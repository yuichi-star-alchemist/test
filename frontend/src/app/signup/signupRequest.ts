import { redirect } from "next/navigation"

const signupRequest = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const result = await fetch("http://57.180.44.232/api/signup", {
    method: "POST",
    body: formData
  })
  if (result.status === 200) {
    redirect("/login")
  }
}

export default signupRequest