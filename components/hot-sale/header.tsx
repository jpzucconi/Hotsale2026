"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#stats", label: "Resultados 2025" },
  { href: "#trends", label: "Tendencias" },
  { href: "#offers", label: "Ofertas" },
  { href: "#phases", label: "Plan de Acción" },
  { href: "#metrics", label: "Métricas importantes" },
  { href: "#checklist", label: "Checklist" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="https://www.tiendanube.com/evolucion" target="_blank" rel="noopener noreferrer" className="group">
          <Image
            src="/logo-tiendanube-evolucion/logo.png"
            alt="Tiendanube Evolución"
            width={180}
            height={45}
            priority
          />
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="relative px-4 py-2 text-sm font-medium text-[#B8C9E0] transition-colors hover:text-white group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#0050C3] transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
            </a>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-white lg:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#1E3A5F]/50 bg-[#0A1628]/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#B8C9E0] transition-colors hover:bg-[#12203A] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
