"use client"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import { Lock, ArrowRight, AlertCircle } from "lucide-react"

export function SplashScreen() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        window.location.reload()
      } else {
        setError("Contraseña incorrecta")
        setPassword("")
      }
    } catch {
      setError("Error de conexión. Intentá de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A1628] px-4">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#0050C3]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#0050C3]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-10 text-center">
          <Image
            src="/logo-tiendanube-evolucion/logo.png"
            alt="Tiendanube Evolución"
            width={280}
            height={70}
            className="mb-6 mx-auto"
            priority
          />
          <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            Guía Hot Sale 2026
          </h1>
          <p className="text-sm text-[#6B7F99] sm:text-base">
            Este contenido es exclusivo. Ingresá la contraseña para acceder.
          </p>
        </div>

        <div className="rounded-2xl border border-[#1E3A5F] bg-[#12203A]/80 p-6 shadow-[0_0_60px_rgba(0,80,195,0.08)] backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0050C3]/20 bg-[#0050C3]/10">
              <Lock className="h-5 w-5 text-[#0050C3]" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">
                Acceso restringido
              </h2>
              <p className="text-xs text-[#6B7F99]">Guía Hot Sale 2026</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#B8C9E0]"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresá la contraseña"
                required
                autoFocus
                autoComplete="off"
                className="w-full rounded-xl border border-[#1E3A5F] bg-[#0A1628] px-4 py-3 text-sm text-white placeholder-[#6B7F99] outline-none transition-all focus:border-[#0050C3] focus:ring-2 focus:ring-[#0050C3]/20"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0050C3] px-4 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,80,195,0.3)] transition-all hover:bg-[#0050C3]/90 hover:shadow-[0_0_30px_rgba(0,80,195,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <>
                  Acceder
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-xs text-[#6B7F99]">
          © 2026 Tiendanube Evolución. Todos los derechos reservados.
        </p>
      </div>
    </div>
  )
}
