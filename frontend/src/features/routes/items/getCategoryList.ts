import { NEXT_PUBLIC_API_BASE_URL as nextApi } from "@/constants"

const getCategoryList = async (
  cookie: string,
) => {
  const response = await fetch(
    `${ nextApi }items/create?endpoint=category`,
    {
      headers: {
        cookie: cookie,
      },
    }
  )
  const categoryList = response.status === 200 ? await response.json() : []
  return categoryList
}

export default getCategoryList