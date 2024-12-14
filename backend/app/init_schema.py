# backend/app/init_schema.py
import os
from datetime import datetime
from bson import ObjectId
from pymongo.errors import DuplicateKeyError
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
import asyncio
from app.database.db_connection import Database
from app.models import Category, Character, ContentCatalog, CustomCategoryName, CustomCharacterName, CustomItem, CustomSeriesName, Image, Item, Series, SeriesCharacter, User, CollectionList, UserSpecificData

# 初期設定
async def init_schema(database):
    db = Database()
    database = await db.connect()  # データベースに接続
    
    await init_beanie(database, document_models=[Category, Character, ContentCatalog, CustomCategoryName, CustomCharacterName, CustomItem, CustomSeriesName, Image, Item, Series, SeriesCharacter, User, CollectionList, UserSpecificData
])

# 初期データを挿入
    # ユーザーを挿入
    # Test Userという名前のユーザーが存在しない場合アイテムを作成    
    test_user = await User.find_one({"user_name": "Test User"}) 
    if not test_user:  # ユーザーが存在しない場合
        try:            
            test_user = User(
                _id=ObjectId("507f1f77bcf86cd799439011"),
                user_name="Test User",
                email="test@example.com",
                password="$2b$12$.gpxTo/xdgQ5fbVCEORpIuU4LUMMhjALICRqP.nAXOVfHb6jVgdlW", # "password"のハッシュ値
                bg_image_id=ObjectId("61f5f484a2d21a1d4cf1b0e6")
            )
            await test_user.insert()  # データベースにユーザーを追加
        except DuplicateKeyError:
            print("User with specified _id or user_name already exists, skipping insertion.")
    else:
        print("User 'Test User' already exists, skipping insertion.")

    # ユーザー独自データを作成
    user_specific_data = await UserSpecificData.find_one({"user_id": test_user.id}) 
    if not user_specific_data:
        user_specific_data = UserSpecificData(
            _id=ObjectId("6736a36adf3ac469905b2afc"),
            user_id=test_user.id,
            custom_items=[
                CustomItem(
                    _id=ObjectId(),
                    item_id=ObjectId("6736b102d2bffe77f23d75db"),
                    # custom_item_images=[ObjectId("61f5f484a2d21a1d4cf1b0e6")],
                    custom_item_name="My Test Custom Item",
                    custom_item_series_name=ObjectId("6739c48fc49c15be3d1dccb7"),
                    custom_item_character_name=ObjectId("6739c48fc49c15be3d1dccb8"),
                    custom_item_category_name=ObjectId("6739c48fc49c15be3d1dccb6"),
                    custom_item_tags=["Mytag1", "Mytag2"],
                    custom_item_retailers=["My Test Local Store"],
                    custom_item_notes="This is a personal note.",
                    created_at=datetime.now(),
                    exchange_status=False,
                    own_status=True
                )
            ],
            custom_category_names=[
                CustomCategoryName(
                    _id=ObjectId("6739c48fc49c15be3d1dccb6"),
                    category_id=ObjectId("6736ae992ca618e77d720a9f"),
                    custom_category_name="My Custom Category"
                )
            ],
            custom_series_names=[
                CustomSeriesName(
                    _id=ObjectId("6739c48fc49c15be3d1dccb7"),
                    series_id=ObjectId("6731371a31c29bb05c8a1275"),
                    custom_series_name="My Custom Series"
                )
            ],
            custom_character_names=[
                CustomCharacterName(
                    _id=ObjectId("6739c48fc49c15be3d1dccb8"),
                    character_id=ObjectId("6731371a31c29bb05c8a1276"),
                    custom_character_name="My Custom Character"
                )
            ]
            )
            # ユーザー独自データをデータベースに追加
        await user_specific_data.insert() 
    else:
        # 既にデータが存在している場合は何もしない
        print("UserSpecificData already exists.")   

       # Test Collection Listという名前のコレクションリストが存在しない場合コレクションリストを作成    
    # if not await User.find_one({"collection_lists": {"$elemMatch": {"list_name": "Test Collection"}}}): 
    if not await User.find_one({"_id": test_user.id, "collection_lists.list_name": "Test Collection"}): 
        collection_list = CollectionList(
            _id=ObjectId(),
            list_name="Test Collection",
            created_at=datetime.now(),
            list_items=[ObjectId("6736b102d2bffe77f23d75db")]         
        )
        test_user.collection_lists.append(collection_list)  # コレクションリストを追加
        await test_user.save()  
    else:
        print("Test Collection already exists.")

    # グッズを挿入
    # Test Itemという名前のグッズが存在しない場合グッズを作成
    test_item = await Item.find_one({"item_name": "Test Item"}) 
    if not test_item:   
        test_item = Item(
            _id=("6736b102d2bffe77f23d75db"),           
            item_name="Test Item",
            # item_images=[ObjectId("61f5f484a2d21a1d4cf1b0e6")],
            item_series=ObjectId("6731371a31c29bb05c8a1275"),
            item_character=ObjectId("6731371a31c29bb05c8a1276"),
            category=ObjectId("6736ae992ca618e77d720a9f"),
            tags=["#test1", "#test2"],
            jan_code="4991567672501",
            release_date="2024-10-10",
            retailers=["Test Shop"],
            # user_data=[ObjectId("6736a36adf3ac469905b2afc")]
        )
        await test_item.insert()  # データベースにグッズを追加

    # ContentCatalog
    # 存在しない場合ContentCatalogを作成
    test_content_catalog = await ContentCatalog.find_one()
    if not test_content_catalog:
        test_content_catalog = ContentCatalog(
            categories=[
                Category(
                    _id=ObjectId("6736ae992ca618e77d720a9f"),
                    category_name="Test Category"
                )
            ],
            series=[
                Series(
                    _id=ObjectId("6731371a31c29bb05c8a1275"),
                    series_name="Test Series"
                )
            ],
            characters=[
                Character(
                    _id=ObjectId("6731371a31c29bb05c8a1276"),
                    character_name="Test Character"
                )
            ],
            series_characters=[
                SeriesCharacter(
                   _id=ObjectId(), 
                   series_id=ObjectId("6731371a31c29bb05c8a1275"),
                   character_id=ObjectId("6731371a31c29bb05c8a1276") 
                )
            ]
        )
        await test_content_catalog.insert() 
    else:
        print("test_content_catalog already exists.")   
   
    # 画像を挿入
    test_image = await Image.find_one({"image_name": "test.jpg"}) 

    if not test_image:
        test_image = Image(
            user_id=ObjectId("6728433a3bdeccb817510476"), 
            item_id=ObjectId("61f5f484a2d21a1d4cf1b0e6"), 
            image_name="test.jpg", 
            created_at=datetime.now(), 
            is_background=False 
        )
        await test_image.insert()  # 画像をデータベースに挿入

if __name__ == "__main__":
    asyncio.run(init_schema())
