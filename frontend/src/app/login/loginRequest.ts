import { redirect } from "next/navigation"

const loginRequest = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const result = await fetch("http://57.180.44.232:3000/api/login", {
    method: "POST",
    body: formData
  })
  if (result.status === 200) {
    redirect("/")
  }
}

export default loginRequest