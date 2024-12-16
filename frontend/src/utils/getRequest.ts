import { KeyTypeIsStringObject, NEXT_PUBLIC_API_BASE_URL as nextApi } from "@/constants"

export const getRequestItems = async (
  endpoint: string,
  searchInput: URLSearchParams,
  currentPage: number,
  cookie: string = "",
) => {
  const baseURL = `${ nextApi }${ endpoint }`
  const newSearchInput = new URLSearchParams(searchInput)
  newSearchInput.set("currentPage", currentPage.toString())
  const requestUrl = `${ baseURL }?${ newSearchInput }`
  const response = cookie === "" ?
    await fetch(requestUrl) :
    await fetch(requestUrl, { headers: { cookie: cookie } })
  return response.status !== 200 ? null : response.json()
}
      
export const getRequestItemsCreate = async (
  endpoint: string,
  choiced?: string,
): Promise<KeyTypeIsStringObject | null> => {
  const onlyCharacterParameter = choiced ? `&seriesId=${ choiced }` : ""
  const requestUrl = `${ nextApi }items/create?endpoint=${ endpoint }${ onlyCharacterParameter }`

  const response = await fetch(requestUrl)

  return response.status !== 200 ? null : response.json()
}