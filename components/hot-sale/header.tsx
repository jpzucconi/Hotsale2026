"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#trends", label: "Tendencias" },
  { href: "#offers", label: "Ofertas" },
  { href: "#phases", label: "Plan de Acción" },
  { href: "#metrics", label: "Métricas" },
  { href: "#checklist", label: "Checklist" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
      scrolled
        ? "border-b border-[#1E3A5F]/50 bg-[#0A1628]/90 shadow-[0_4px_30px_rgba(0,80,195,0.1)] backdrop-blur-xl"
        : "bg-transparent"
    )}>
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <a href="https://www.tiendanube.com/evolucion" target="_blank" rel="noopener noreferrer" className="shrink-0">
          <Image
            src="/logo-tiendanube-evolucion/logo.png"
            alt="Tiendanube"
            width={200}
            height={34}
            className="hidden sm:block"
            priority
          />
          <Image
            src="/logo-tiendanube-evolucion/logo.png"
            alt="Tiendanube"
            width={130}
            height={22}
            className="block sm:hidden"
            priority
          />
        </a>

        <nav className="flex min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto scrollbar-hide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative shrink-0 px-3 py-1.5 text-xs font-medium text-[#B8C9E0] transition-colors hover:text-white group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#0050C3] transition-all duration-300 group-hover:left-3 group-hover:w-[calc(100%-1.5rem)]" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
