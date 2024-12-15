import { LOADING_IMAGE_URL as loading } from "@/constants"
import TopPage from "@/features/routes/top/components/TopPage"
import { getImageUrl } from "@/utils/getRequestFromServer"

const initialTopPage = async () => {
  const endpoint = "user/bg-images"
  const imageUrl = await getImageUrl(endpoint) || loading
  console.log("imageUrl", imageUrl)
  // const imageSrc = imageUrl.split("localhost").join("57.180.44.232")
  const imageSrc = loading
  return (
    <TopPage
      imageSrc={ imageSrc }
    />
  )
}

export default initialTopPage