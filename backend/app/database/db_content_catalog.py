# backend/app/database/db_content_catalog.py
from bson import ObjectId
from app.models import Category, Character, ContentCatalog, Series, SeriesCharacter
from app.database.db_connection import Database
from fastapi import HTTPException, status

db = Database()

# ContentCatalogにかかわるすべてのデータ保存
async def save_content_catalog(content_catalog: ContentCatalog):	
    await db.connect()
    try:
        await content_catalog.save()
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error saving content catalog: {str(e)}"
            )
    finally:
        await db.disconnect()

# ContentCatalogを取得する
async def get_content_catalog():
    await db.connect()
    try:
        content_catalog = await ContentCatalog.find_one()
        if not content_catalog:
            content_catalog = ContentCatalog()
        return content_catalog
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching content catalog: {str(e)}"
            )
    finally:
        await db.disconnect()

# カテゴリー重複チェック
async def existing_categogy_check(category_name) -> bool:
    try:
        existing_category = await ContentCatalog.find_one({"categories.category_name": category_name.strip()})
        return existing_category is not None
    except Exception as e:
        print(f"Error checking for duplicate category: {str(e)}")
        raise RuntimeError(f"Error while checking category duplication: {str(e)}")
  

# 新しいグッズジャンル(カテゴリー)を作成する 
async def create_category(category_name: str):
    await db.connect()
    try:
        category_name = category_name.strip()

        # 既存のcategory_nameとの重複を確認
        if await existing_categogy_check(category_name):            
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Category with the same name already exists."
            )        
        # 新しいカテゴリーを作成
        new_category = Category(_id=ObjectId(), category_name=category_name)
        # ContentCatalogに追加
        await ContentCatalog.find_one({}).update({"$push":{ContentCatalog.categories:new_category}})

        return new_category
    
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurd while creating the category."
        )
    finally:
        await db.disconnect()

# すべてのグッズジャンル（詳細を含む）を取得する
async def get_all_categories():
    try:
        content_catalog = await get_content_catalog()
        if content_catalog:
            return content_catalog.categories
        return []
    except Exception as e:
        raise Exception(f"Error fetching categories: {str(e)}")
     
    
# 作品重複チェック
async def existing_series_check(series_name) -> bool:    
    try:
        series_name = series_name.strip()
        existing_series = await ContentCatalog.find_one({"series.series_name": series_name})
        return existing_series is not None 
    except Exception as e:
        print(f"Error checking for duplicate series: {str(e)}")
        raise RuntimeError(f"Error while checking series duplication: {str(e)}")


# 新しい作品を作成する
async def create_series(series_name: str):
    await db.connect()
    try:
        series_name = series_name.strip()

        # 既存の作品名と重複を確認
        if await existing_series_check(series_name):            
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Series with the same name already exists."
            )       
        # 新しい作品を作成
        new_series = Series(_id=ObjectId(), series_name=series_name)
        # ContentCatalogに追加
        await ContentCatalog.find_one({}).update({"$push":{ContentCatalog.series:new_series}})

        return new_series
    
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurd while creating the series."
        )
    finally:
        await db.disconnect()

# すべての作品（詳細を含む）を取得する
async def get_all_series():
    try:
        content_catalog = await get_content_catalog()
        if content_catalog:
            return content_catalog.series
        return []
    except Exception as e:
        raise Exception(f"Error fetching series: {str(e)}") 

# 新しいキャラクターを作成する
async def create_character(character_name: str):
    await db.connect()
    try:
        character_name = character_name.strip()

        # 新しいキャラクターを作成
        new_character = Character(_id=ObjectId(), character_name=character_name)
        # ContentCatalogに追加
        await ContentCatalog.find_one({}).update({"$push":{ContentCatalog.characters:new_character}})                                         
        
        return new_character
    
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurd while creating the character."
        )
    finally:
        await db.disconnect()
    
# すべてのキャラクター（詳細含む）を取得する
async def get_all_characters():
    try:
        content_catalog = await get_content_catalog()
        if content_catalog:
            return content_catalog.characters
        return []
    except Exception as e:
        raise Exception(f"Error fetching characters: {str(e)}") 


# 作品＆キャラクターの重複チェック
async def existing_series_character_check(series_id: ObjectId, character_id: ObjectId) -> bool:
    try:
        content_catalog = await get_content_catalog()
        for pair in content_catalog.series_characters:
            if pair.series_id == series_id and pair.character_id == character_id:
                return True # 重複あり
        return False # 重複なし
    except Exception as e:
        print(f"Error checking for duplicate series-character pair: {str(e)}")
        raise RuntimeError(f"Error while checking series-character duplication: {str(e)}")
        

# 新しい作品＆キャラクターの組み合わせを作成する
async def create_series_character(series_id: ObjectId, character_id: ObjectId):
    await db.connect()
    try:
        # 同じ作品とキャラクターのペアがすでに存在するか確認
        if await existing_series_character_check(series_id, character_id):
            return{
                "message":"Series and character pair already exists.",
                "series_id": str(series_id),
                "character_id": str(character_id)                    
                } 
        # 新しいペアを作成       
        new_pair = SeriesCharacter(_id=ObjectId(),series_id=series_id, character_id=character_id)
        # ContentCatalogに追加
        await ContentCatalog.find_one({}).update({"$push":{ContentCatalog.series_characters:new_pair}})                                        
        
        return new_pair  
    
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurd while creating the series_character."
        )
    finally:
        await db.disconnect()
    

# すべての作品＆キャラクターの組み合わせを取得する
async def get_all_series_characters():
    try:
        content_catalog = await get_content_catalog()
        if content_catalog:
            return content_catalog.series_characters
        return None
    except Exception as e:
        raise Exception(f"Error fetching series_characters: {str(e)}") 
    
    
# 指定した作品またはキャラクターに関連している相手方の名前一覧を取得
async def get_series_characters(series_id: ObjectId):
    try:
        content_catalog = await get_content_catalog()
        if content_catalog:
            filtered_characters = [
                character for character in content_catalog.series_characters 
                if character.series_id == ObjectId(series_id)
            ]
            return filtered_characters
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail="No characters found for this series")
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching filtered characters by series_id: {str(e)}"
            ) 


# category_idからcategory_nameを取得する
async def get_category_name(category_id: ObjectId):
    if category_id is None:
        return None
    try:
        content_catalog = await get_content_catalog()

        for category in content_catalog.categories:
            if category.id == category_id:
                return category.category_name
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail="Category not found.")
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching category name by category_id: {str(e)}"
            )
    
# series_idからseries_nameを取得する
async def get_series_name(series_id: ObjectId):
    if series_id is None:
        return None
    try:
        content_catalog = await get_content_catalog()

        for series in content_catalog.series:
            if series.id == series_id:
                return series.series_name
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail="Series not found.")
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching series name by series_id: {str(e)}"
            )
    
# character_idからcharacter_nameを取得する
async def get_character_name(character_id: ObjectId):
    if character_id is None:
        return None
    try:
        content_catalog = await get_content_catalog()

        for character in content_catalog.characters:
            if character.id == character_id:
                return character.character_name
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail="Character not found.")
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching character name by character_id: {str(e)}"
            )
    
# series_nameの部分一致検索
async def series_name_partial_match(series_name: str):
    content_catalog = await get_content_catalog()

    matched_series_ids = []

    for series in content_catalog.series:
        if series_name.lower() in series.series_name.lower():
            matched_series_ids.append(series.id)

    return matched_series_ids



# character_nameの部分一致検索
async def character_name_partial_match(character_name: str):
    content_catalog = await get_content_catalog()

    matched_character_ids = []

    for character in content_catalog.characters:
        if character_name.lower() in character.character_name.lower():
            matched_character_ids.append(character.id)

    return matched_character_ids


# 新しいカテゴリーを作成する（内部処理用）
async def create_new_category(category_name: str) -> Category:

    if not category_name or len(category_name.strip()) == 0:
        raise ValueError("Category name is required.")
    await db.connect()
    try:
        if await existing_categogy_check(category_name):
            raise ValueError(f"Category '{category_name}' already exists.")
        
        new_category = await create_category(category_name)
        return new_category
    except Exception as e:
        print(f"Error during category creation: {str(e)}")
        raise RuntimeError(f"Failed to create category: {str(e)}")
    finally:
        await db.disconnect()