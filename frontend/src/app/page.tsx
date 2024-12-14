import TopPage from "@/features/routes/top/components/TopPage"
import { getImageUrl } from "@/utils/getRequestFromServer"

const initialTopPage = async () => {
  const endpoint = "user/bg-images"
  const imageUrl = await getImageUrl(endpoint) || ""
  const imageSrc = imageUrl.split("localhost").join("57.180.44.232") || ""
  return (
    <TopPage
      imageSrc={ imageSrc }
    />
  )
}

export default initialTopPage