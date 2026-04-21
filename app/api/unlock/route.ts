import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const { password } = body

  const expected = process.env.SPLASH_PASSWORD ?? "hotsale2026"

  if (
    typeof password === "string" &&
    password.length === expected.length &&
    password === expected
  ) {
    const res = NextResponse.json({ success: true })
    res.cookies.set("hs_access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    })
    return res
  }

  return NextResponse.json(
    { success: false, message: "Contraseña incorrecta" },
    { status: 401 },
  )
}
