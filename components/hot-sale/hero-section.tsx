"use client"

import { useState, useEffect } from "react"
import { Flame, Calendar, ArrowRight, Sparkles, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"

const HOT_SALE_START = new Date("2026-05-11T03:00:00Z") // May 11, 2026 00:00 ART (UTC-3)

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, ended: false })

  useEffect(() => {
    function calc() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true }
      return {
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1_000),
        ended: false,
      }
    }
    setTimeLeft(calc())
    const id = setInterval(() => setTimeLeft(calc()), 1_000)
    return () => clearInterval(id)
  }, [target])

  return timeLeft
}

export function HeroSection() {
  const countdown = useCountdown(HOT_SALE_START)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative overflow-hidden bg-[#0A1628] py-24 lg:py-36">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,80,195,0.3),transparent)]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Floating orbs */}
      <div className="absolute right-[10%] top-[20%] h-72 w-72 animate-pulse rounded-full bg-[#0050C3]/20 blur-[100px]" />
      <div className="absolute left-[5%] bottom-[10%] h-56 w-56 animate-pulse rounded-full bg-[#00A3E0]/15 blur-[80px]" style={{ animationDelay: '1s' }} />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0050C3]/40 bg-[#0050C3]/10 px-5 py-2.5 backdrop-blur-sm">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00A3E0] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00A3E0]" />
            </div>
            <span className="text-sm font-medium text-[#B8C9E0]">Guia estrategica exclusiva Tiendanube Evolución</span>
          </div>
          
          {/* Main heading */}
          <h1 className="mb-6 max-w-5xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            <span className="block pb-2 bg-gradient-to-r from-white via-[#B8C9E0] to-[#0050C3] bg-clip-text text-transparent">
              Hot Sale Argentina 2026
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="mb-12 max-w-2xl text-pretty text-lg text-[#B8C9E0] sm:text-xl lg:text-2xl leading-relaxed">
            Estrategias, tendencias y el checklist definitivo para escalar tu Tiendanube y romper records este Hot Sale.
          </p>
          
          {/* Date cards */}
          <div className="mb-14 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-[#1E3A5F] bg-[#12203A]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#0050C3]/50 hover:shadow-[0_0_40px_rgba(0,80,195,0.2)]">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#0050C3]/10 blur-2xl transition-all group-hover:bg-[#0050C3]/20" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0050C3]/20">
                  <Flame className="h-6 w-6 text-[#0050C3]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-[#6B7F99]">Hot Sale</p>
                  <p className="text-xl font-bold text-white">11-13 Mayo</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl border border-[#1E3A5F] bg-[#12203A]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#0050C3]/50 hover:shadow-[0_0_40px_rgba(0,80,195,0.2)]">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#0050C3]/10 blur-2xl transition-all group-hover:bg-[#0050C3]/20" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0050C3]/20">
                  <Calendar className="h-6 w-6 text-[#0050C3]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-[#6B7F99]">Hot Week</p>
                  <p className="text-xl font-bold text-white">14-17 Mayo</p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Countdown */}
          {mounted && (
            countdown.ended ? (
              <div className="mb-14 inline-flex items-center gap-2 rounded-full border border-[#00A3E0]/40 bg-[#00A3E0]/10 px-6 py-3 backdrop-blur-sm">
                <Flame className="h-5 w-5 text-[#00A3E0]" />
                <span className="text-base font-semibold text-white">Hot Sale en curso!</span>
              </div>
            ) : (
              <div className="mb-14 w-full max-w-2xl">
                <div className="mb-3 flex items-center justify-center gap-2 text-sm font-medium text-[#6B7F99]">
                  <Timer className="h-4 w-4 text-[#0050C3]" />
                  <span>Comienza en</span>
                </div>
                <div className="grid grid-cols-4 gap-3 sm:gap-4">
                  {([
                    ["days", "Días"],
                    ["hours", "Horas"],
                    ["minutes", "Min"],
                    ["seconds", "Seg"],
                  ] as const).map(([key, label]) => (
                    <div
                      key={key}
                      className="relative overflow-hidden rounded-2xl border border-[#1E3A5F] bg-[#12203A]/80 py-4 backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0050C3]/5 to-transparent" />
                      <div className="relative flex flex-col items-center">
                        <span className="text-3xl font-bold tabular-nums text-white sm:text-4xl lg:text-5xl">
                          {String(countdown[key]).padStart(2, "0")}
                        </span>
                        <span className="mt-1 text-xs font-medium uppercase tracking-wider text-[#6B7F99]">
                          {label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-[#0050C3] px-8 py-6 text-base font-semibold text-white transition-all hover:bg-[#0050C3]/90 hover:shadow-[0_0_40px_rgba(0,80,195,0.4)]"
              onClick={() => document.getElementById('checklist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver la Guía Completa
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#1E3A5F] bg-transparent px-8 py-6 text-base font-semibold text-white hover:bg-[#12203A] hover:text-white"
              onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="mr-2 h-5 w-5 text-[#0050C3]" />
              Ver Resultados 2025
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A1628] to-transparent" />
    </section>
  )
}
