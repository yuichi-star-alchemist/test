"use server"

import { BACKEND_ITEM_KEYS as keys } from "@/constants"
import { cookies } from "next/headers"

const sendFormAction = async (
  formData: FormData,
  endpoint: string,
  requires: string[],
): Promise<{category_id: string, category_name: string, character_id: string, series_id: string, access_token: string} | void> => {
  // 空白パラメータは除去 & 必須項目が空白の場合リクエスト中止
  const newFormData = new FormData()
  for (const query of formData.entries()) {
    const key = query[0]
    const value = query[1]
    if (value !== "") {      
      if (key === keys.tags || key === keys.retailers) {
        const splitValue = value.toString().split(",")
        splitValue.forEach(val => {
          newFormData.append(`${key}[]`, val)
        })
      } else {        
        newFormData.append(key, value)
      }
    }
  }
  for (const requireKey of requires) {
    if (!newFormData.get(requireKey)) return
  }

  const cookieStore = cookies()
  const cookie = (await cookieStore).get("fantre")
  console.log("cookie-sendFormAction", cookie)
  if (!cookie) return

  const header = new Headers({"Cookie": cookie.value})
  const apiBaseUrl = "http://localhost:3000/api/"
  const requestUrl = `${ apiBaseUrl }${ endpoint }`
  console.log("requestUrl-sendFormAction", requestUrl)
  const response = await fetch(
    requestUrl,
    {
      method: "POST",
      headers: header,
      body: newFormData
    })

  return response.status === 200 ? response.json() : null
}

export default sendFormAction