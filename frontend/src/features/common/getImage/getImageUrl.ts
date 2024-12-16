import { NEXT_PUBLIC_API_BASE_URL as nextApi } from "@/constants"

const getImageUrl = async (
  endpoint: string,
) => {
  const response = await fetch(`${ nextApi }/getImageUrl?endpoint=${ endpoint }`)

  return response?.status === 200 ? await response.json() : null
}

export default getImageUrl