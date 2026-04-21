"use client"

import { Package, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  {
    icon: DollarSign,
    value: 46995,
    suffix: "M",
    prefix: "$",
    label: "Vendidos en Hot Sale 2025",
    description: "+60% vs Hot Sale 2024",
  },
  {
    icon: ShoppingCart,
    value: 468829,
    suffix: "",
    label: "Órdenes generadas",
    description: "+16% vs Hot Sale 2024",
  },
  {
    icon: Package,
    value: 1674987,
    suffix: "",
    label: "Productos vendidos",
    description: "+29% vs Hot Sale 2024",
  },
]

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const startTime = performance.now()
          
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(value * easeOutQuart)
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(value)
            }
          }
          
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [value, hasAnimated])
  
  const formatNumber = (n: number) => {
    if (Number.isInteger(value)) {
      return Math.floor(n).toLocaleString('es-AR')
    }
    return n.toFixed(1).replace('.', ',')
  }
  
  return (
    <div ref={ref} className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
      <span className="bg-gradient-to-r from-white to-[#B8C9E0] bg-clip-text text-transparent">
        {prefix}{formatNumber(count)}{suffix}
      </span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section id="stats" className="relative overflow-hidden bg-[#12203A] py-20 lg:py-28">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#0A1628] to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#0A1628] to-transparent" />
      <div className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#0050C3]/10 blur-[100px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0050C3]/30 bg-[#0050C3]/10 px-4 py-2">
            <TrendingUp className="h-4 w-4 text-[#0050C3]" />
            <span className="text-sm font-medium text-[#B8C9E0]">Resultados Hot Sale 2025</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            Nuestros merchants rompieron récords
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#B8C9E0]">
            Las tiendas Tiendanube vendieron casi $47 mil millones en Hot Sale 2025, con un crecimiento del 60% vs el año anterior. Más de 468 mil órdenes y casi 1,7 millones de productos vendidos demuestran que la preparación marca la diferencia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#0050C3]/50 to-[#00A3E0]/50 opacity-0 blur transition-opacity group-hover:opacity-100" />
              
              <div className="relative flex flex-col items-center rounded-3xl border border-[#1E3A5F] bg-[#0A1628] p-8 text-center transition-all group-hover:border-[#0050C3]/50">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0050C3]/20 to-[#00A3E0]/10">
                  <stat.icon className="h-7 w-7 text-[#0050C3]" />
                </div>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
                <p className="mt-1 text-xs text-[#6B7F99]">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
