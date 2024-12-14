# backend/app/api/list.py
from typing import Annotated, List
from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException, Form
from datetime import datetime
from pydantic import BaseModel, Field, field_validator, ValidationInfo

from app.models import CollectionList
from app.api.user import get_current_user
from app.database.db_user import exists_user
from app.database.db_item import get_item_names, exists_item_id
from app.database.db_collection_list import exists_collection_list_name, get_collection_list, add_collection_list, add_item_to_list, delete_item_from_list, delete_list
from app.database.db_user_specific import exists_user_custom_items




router = APIRouter(dependencies=[Depends(get_current_user)])


class ListItems(BaseModel):
    list_id: str
    item_id: List[str]

    @field_validator("item_id")
    def item_id_list(cls, v) -> List[str]:
        id_list = v[0].split(',')
        return id_list


# コレクションリスト作成
@router.post("/api/lists")
async def create_collectionlist(list_name: Annotated[str, Form()], user_id: str = Depends(get_current_user)):
    # ユーザー確認
    if await exists_user(ObjectId(user_id)) is None:
        raise HTTPException(status_code=400, detail="The user not exist.")
    
    # リスト名空白チェック
    if not list_name or len(list_name.strip()) == 0:
        raise HTTPException(status_code=422, detail="Collection List name is required.")                                
    
    # リスト名重複チェック
    if await exists_collection_list_name(list_name, ObjectId(user_id)):
        raise HTTPException(status_code=422, detail="The listname already exist.")
   
    # リスト追加
    new_list_id = ObjectId()
    new_list = CollectionList(_id=new_list_id, list_name=list_name, created_at=datetime.now(), list_items=[])
    await add_collection_list(new_list, user_id=ObjectId(user_id))
    return str(new_list_id)



# コレクションリスト一覧取得
@router.get("/api/lists")
async def get_collection_lists(user_id: str = Depends(get_current_user)):
    # ユーザー確認
    if await exists_user(ObjectId(user_id)) is None:
        raise HTTPException(status_code=400, detail="The user not exist.")
    
    # ユーザー固有のコレクションリスト取得して整形
    collection_lists = await get_collection_list(ObjectId(user_id))
    collection_lists_response = []
    for list in collection_lists:
        collection_lists_response.append({str(list.id): list.list_name})

    return collection_lists_response
        

# コレクションリスト詳細取得
@router.get("/api/lists/{list_id}")
async def get_list_detail(list_id: str, user_id: str = Depends(get_current_user)):
    # ユーザー確認
    if await exists_user(ObjectId(user_id)) is None:
        raise HTTPException(status_code=400, detail="The user not exist.")

    # ユーザー固有のコレクションリスト取得して指定のリストからitem_id取得
    collection_lists = await get_collection_list(ObjectId(user_id))
    collection_item_ids = []
    for list in collection_lists:
        if list.id == ObjectId(list_id):
            collection_item_ids.extend(list.list_items)   

    # item_idからitem_name取得して整形
    collection_item_dict = await get_item_names(collection_item_ids)

    # ユーザーが固有データを持っているか確認
    custom_items = await exists_user_custom_items(ObjectId(user_id))
    if custom_items is not None:
        for id in collection_item_ids:
            for item in custom_items:
                if id == item.item_id:
                    collection_item_dict[str(id)] = item.custom_item_name
    
    # 整形
    collection_item_response = [{k:v} for k, v in collection_item_dict.items()]

    return collection_item_response


# コレクションリストにグッズ追加
@router.post("/api/list-items")
async def add_list_items(list_items: Annotated[ListItems, Form()], user_id: str = Depends(get_current_user)):
    # ユーザー確認
    if await exists_user(ObjectId(user_id)) is None:
        raise HTTPException(status_code=400, detail="The user not exist.")
    
    # item_id存在確認
    item_ids = []
    for id in list_items.item_id:
        if id == '':
            continue
        id = ObjectId(id)
        if await exists_item_id(ObjectId(id)):
            raise HTTPException(status_code=422, detail="The item does not exist.")
        item_ids.append(id)
    
    await add_item_to_list(ObjectId(list_items.list_id), item_ids, ObjectId(user_id))

    return 'OK'


# コレクションリストからグッズ削除
@router.delete("/api/list-items")
async def delete_list_items(list_items: Annotated[ListItems, Form()], user_id: str = Depends(get_current_user)):
    # ユーザー確認
    if await exists_user(ObjectId(user_id)) is None:
        raise HTTPException(status_code=400, detail="The user not exist.")
    
    # item_id存在確認
    item_ids = []
    for id in list_items.item_id:
        if id == '':
            continue
        id = ObjectId(id)
        if await exists_item_id(ObjectId(id)):
            raise HTTPException(status_code=422, detail="The item does not exist.")
        item_ids.append(id)
    
    await delete_item_from_list(ObjectId(list_items.list_id), item_ids, ObjectId(user_id))

    return 'OK'


# コレクションリスト削除
@router.delete("/api/lists/{list_id}")
async def cdelete_list_items(list_id: str, user_id: str = Depends(get_current_user)):
    # ユーザー確認
    if await exists_user(ObjectId(user_id)) is None:
        raise HTTPException(status_code=400, detail="The user not exist.")
    
    await delete_list(ObjectId(list_id), ObjectId(user_id))