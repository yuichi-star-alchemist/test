import { cookies } from "next/headers"
import type { NextRequest } from "next/server"

export const middleware = async (
  request: NextRequest,
) => {
  const cookieStore = await cookies()
  const cookie = cookieStore.get("fantre")
  console.log(cookie, request)
  // if (!cookie) return NextResponse.redirect(new URL("login", request.url))
}

export const config = {
  matcher: [
    "/:path",
    "/items/:path*",
    "/series/:path*",
    "/lists/:path*",
    "/chat/:path*",
    "/calender/:path*",
  ]
}