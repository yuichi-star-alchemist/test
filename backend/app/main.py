# backend/app/main.py
from contextlib import asynccontextmanager
from app.database.db_connection import Database
from fastapi import FastAPI, Request, status, HTTPException, Depends
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse


from app.init_schema import init_schema
from app.api.user import get_current_user
from app.api.user import router as user_router  # ユーザー用のルーターをインポート
from app.api.item import router as item_router  # アイテム用のルーターをインポート
from app.api.content_catalog import router as content_catalog_router  # ContentCatalog用のルーターをインポート
from app.api.image import router as image_router  # 画像用のルーターをインポート
from app.api.collection_list import router as collection_list_router  # コレクションリスト用のルーターをインポート


@asynccontextmanager
async def lifespan(app: FastAPI):
    db = Database()
    database = await db.connect()     
    await init_schema(database) # データベースのスキーマを初期化
    yield  # アプリケーションが実行中の間はこの状態を保持


app = FastAPI(lifespan=lifespan)


# # ValidationErrorでの422エラーのレスポンス変更
# @app.exception_handler(RequestValidationError)
# async def error_handler(request: Request, exc: RequestValidationError):
#     return JSONResponse(
#         content={"detail": "There was an error in your input. Please"}, status_code=status.HTTP_422_UNPROCESSABLE_ENTITY
#     )


# ルーター追加
app.include_router(user_router)  # ユーザー関連のルーターを追加
app.include_router(item_router)  # アイテム関連のルーターを追加
app.include_router(content_catalog_router)  # アイテム関連のルーターを追加
app.include_router(image_router)  # 画像関連のルーターを追加
app.include_router(collection_list_router)  # 画像関連のルーターを追加