import { NEXT_PUBLIC_API_BASE_URL as nextApi } from "@/constants"
import { redirect } from "next/navigation"

const loginRequest = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const result = await fetch(`${ nextApi }login`, {
    method: "POST",
    body: formData
  })
  console.log(result)
  if (result.status === 200) {
    console.log(result.status)
  }
  redirect("/")  
}

export default loginRequest