"use client"

import { Tag, Clock, Truck, Gift, Home, Shirt, Sparkles, Monitor, UtensilsCrossed } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const elements = [
  {
    icon: Tag,
    title: "Propuesta de valor",
    description: "Definí tu diferencial antes de armar cualquier oferta. ¿Qué problema le resolvés a tu cliente? ¿Por qué tu producto es la mejor opción en este momento?"
  },
  {
    icon: Clock,
    title: "Urgencia + Exclusividad",
    description: "Temporizadores visibles, stock limitado y early access VIP para suscriptores. La percepción de evento exclusivo es el verdadero driver."
  },
  {
    icon: Truck,
    title: "Envío gratis + Cuotas",
    description: "Envío gratis con umbral mínimo + cuotas sin interés (6-18 pagos). Descuento extra del 10-15% por transferencia bancaria."
  },
  {
    icon: Gift,
    title: "Bundles y Cross-sell",
    description: "Combos que combinan un bestseller con un producto de baja rotación. Aumentan el ticket +20-35% sin erosionar el margen unitario."
  }
]

const categoryStrategies = [
  {
    icon: Home,
    category: "Home y Deco",
    strategy: "Bundles por ambiente ('Renovación Living'). Descuentos progresivos por monto. 6-12 cuotas sin interés obligatorio.",
    insight: "Ticket alto, decisión lenta. Fotos de ambientación completa, no producto aislado. El envío gratis y la financiación son decisivos."
  },
  {
    icon: Shirt,
    category: "Moda",
    strategy: "Cápsulas exclusivas del evento. 2x1 o 3x2 en básicos. Shop the Look para cross-sell. Guía de talles con medidas en cm.",
    insight: "Cambio de estación: liquidar verano + lanzar nueva colección. La guía de talles reduce devoluciones un 20-30%."
  },
  {
    icon: Sparkles,
    category: "Belleza",
    strategy: "Kits de rutina completa. Muestras gratis o regalos desde cierto monto. Contenido educativo con tutoriales.",
    insight: "Ticket bajo, alta recurrencia. Apostar a relaciones de largo plazo. Micro-influencers de 5-50K son los más efectivos."
  },
  {
    icon: Monitor,
    category: "Electrónica",
    strategy: "Mostrar siempre el precio por cuota mensual, no el total. Bundles tecnológicos. Garantía extendida como upsell.",
    insight: "El consumidor ya investigó el precio semanas antes. La financiación cierra la venta. Cuotas hasta 18 pagos en Hot Sale."
  },
  {
    icon: UtensilsCrossed,
    category: "Alimentos",
    strategy: "Packs familiares con descuento por volumen. Envío gratis como ventaja competitiva. Suscripción recurrente bonificada.",
    insight: "Alta frecuencia, ticket bajo. Volumen y retención son el juego. Jabón líquido fue el producto #1 en CABA en HS 2025."
  }
]

export function OfferAnatomy() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="offers" className="bg-[#12203A] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Anatomía de la Oferta Irresistible
          </h2>
          <p className="mx-auto max-w-2xl text-[#B8C9E0]">
            Los cuatro pilares para construir ofertas que convierten, más estrategias específicas por categoría.
          </p>
        </div>
        
        {/* 4 Pillars */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {elements.map((element, index) => (
            <div 
              key={element.title}
              className="flex gap-5 rounded-2xl border border-[#1E3A5F] bg-[#0A1628] p-6 shadow-[0_0_30px_rgba(0,80,195,0.08)]"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#0050C3] text-white shadow-[0_0_20px_rgba(0,80,195,0.3)]">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <element.icon className="h-5 w-5 text-[#0050C3]" />
                  <h3 className="text-lg font-semibold text-white">{element.title}</h3>
                </div>
                <p className="leading-relaxed text-[#6B7F99]">{element.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Category Strategies */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-xl font-bold text-white sm:text-2xl">
            Estrategia por categoría
          </h3>

          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {categoryStrategies.map((cat, index) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(index)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === index
                    ? "bg-[#0050C3] text-white shadow-[0_0_20px_rgba(0,80,195,0.4)]"
                    : "border border-[#1E3A5F] bg-[#0A1628] text-[#B8C9E0] hover:border-[#0050C3]/50"
                )}
              >
                <cat.icon className="h-4 w-4" />
                {cat.category}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#1E3A5F] bg-[#0A1628] shadow-[0_0_40px_rgba(0,80,195,0.1)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="border-b border-[#1E3A5F] p-8 lg:border-b-0 lg:border-r">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0050C3]/20">
                    {(() => {
                      const Icon = categoryStrategies[activeCategory].icon
                      return <Icon className="h-5 w-5 text-[#0050C3]" />
                    })()}
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-[#0050C3]">Estrategia de oferta</p>
                    <h4 className="text-lg font-semibold text-white">{categoryStrategies[activeCategory].category}</h4>
                  </div>
                </div>
                <p className="leading-relaxed text-[#B8C9E0]">{categoryStrategies[activeCategory].strategy}</p>
              </div>
              <div className="p-8">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#00A3E0]">Insight clave</p>
                <p className="leading-relaxed text-[#B8C9E0]">{categoryStrategies[activeCategory].insight}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
