import { NEXT_PUBLIC_API_BASE_URL as nextApi } from "@/constants"
import { redirect } from "next/navigation"

const signupRequest = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const result = await fetch(`${ nextApi }signup`, {
    method: "POST",
    body: formData
  })
  if (result.status === 200) {
    redirect("/login")
  }
}

export default signupRequest