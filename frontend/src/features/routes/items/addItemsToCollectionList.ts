import { NEXT_PUBLIC_API_BASE_URL as nextApi } from "@/constants"
import type { Dispatch, SetStateAction } from "react"
const addItemsToCollectionList = async (
  e: React.FormEvent<HTMLFormElement>,
  itemsToAddToCollectionList: string[],
  setItemsToAddToCollectionList: Dispatch<SetStateAction<string[]>>,
  setSelectList: Dispatch<SetStateAction<string>>,
) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)// listIdを含む
  const listId = formData.get("list-id")?.toString()
  if (listId === "default") {
    alert("リストを選択してください")
    return
  }
  const requestUrl = `${ nextApi }list-items`
  formData.set("listItems", itemsToAddToCollectionList.join(","))
  await fetch(requestUrl, {
    method: "POST",
    body: formData,
  }).then((response) => {
    if (response.status === 200) {
      setItemsToAddToCollectionList([])
      setSelectList("default")
    } else {
      alert("コレクションリストに追加できませんでした")
    }
  })
}

export default addItemsToCollectionList