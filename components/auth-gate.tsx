import { cookies } from "next/headers"
import { SplashScreen } from "@/components/splash-screen"

export async function AuthGate({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const hasAccess = cookieStore.get("hs_access")?.value === "granted"

  if (!hasAccess) {
    return <SplashScreen />
  }

  return <>{children}</>
}
