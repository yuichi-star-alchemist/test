export const NEXT_PUBLIC_API_BASE_URL = `${ process.env.HOSTNAME }/api/`
// 検索
export const SEARCH_INPUT_KEYS = [
  "series_name",
  "character_name",
  "item_name",
  "tags",
  "category_id",
  "jan_code",
  "release_date",
  "retailers",
]

// 作成
export const BACKEND_ITEM_KEYS = {
  series: "item_series",
  character: "item_character",
  name: "item_name",
  tags: "tags",
  category: "category",
  janCode: "jan_code",
  releaseDate: "release_date",
  retailers: "retailers",
  image: "item_images",
}

// 更新
export const BACKEND_UPDATE_ITEM_KEYS = {
  name: "custom_item_name",
  series: "custom_series_name",
  character: "custom_character_name",
  category: "custom_category_name",
  tags: "custom_item_tags",
  retailers: "custom_item_retailers",
}

// signup用
export const BACKEND_AUTH_KEYS = {
  name: "user_name",
  email: "email",
  pass1: "password1",
  pass2: "password2",
}

export const COOKIE_OPTIONS = {
  maxAge: 60*60*24*30,
  // secure: process.env.NODE_ENV === "production",
  httpOnly: true,
  path: "/",
}

export const TOKEN_PREFIX = "Bearer "

// ファイルタイプ許可リスト
export const IMAGE_FORMAT_ALLOW_LIST = [
  "image/png",
  "image/jpg",
  "image/jpeg",
]
// 拡張子に変換
export const MIME_TO_EXTENSION: {[key:string]: string} = {
  "image/png": ".png",
  "image/jpg": ".jpg",
  "image/jpeg": ".jpeg",
}

export const VALIDATION_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"

// 8字以上 & 数値1以上 & 小英数1以上 & 大英数1以上
export const VALIDATION_PASSWORD = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"

// items/create内のモーダルで表示する通信の型のダミーデータ
export const DummyModalDataResponse = {
  "category_id": "dummy",
  "category_name": "dummy",
  "character_id": "dummy",
  "series_id": "dummy",
  "access_token": "dummy",
}

// 型対策
export interface KeyTypeIsStringObject {
  [key: string]: string
}

export const LOADING_IMAGE_URL = "/no-image.svg"

export const ERROR_MESSAGES = {
  IMAGE_SIZE_TOO_LARGE: "画像のサイズが大きすぎます。\n1MB未満にしてください。",
  ITEM_CREATION_FAILED: "グッズの作成に失敗しました。\n再度お試しください。",
  CREATED_BUT_FAILED_TO_UPLOAD_IMAGE: "グッズは作成できましたが、画像の登録に失敗しました。\n再度お試しください。",
}

export const PLACEHOLDER_TEXT = {
  isPartialMatch: "部分一致検索",
  isListFormat: "小カンマ(,)で複数の指定",
  isDigits: "8桁 or 13桁の半角数字",
  noDuplication: "既存の名前と重複不可",
}
