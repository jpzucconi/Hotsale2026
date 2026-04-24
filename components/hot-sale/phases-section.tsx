"use client"

import { useState } from "react"
import { Server, Smartphone, Flame, Mail, MonitorPlay, ShoppingCart, Truck, Package, AlertTriangle, Clock, Megaphone, Target, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

const phases = [
  {
    id: "fase1",
    title: "FASE 1",
    subtitle: "Preparación del E-commerce",
    timing: "El Mes Previo",
    color: "bg-[#0050C3]",
    items: [
      {
        icon: Server,
        title: "Infraestructura",
        description: "El servidor usa AWS de Amazon, garantizando estabilidad total ante picos masivos. Simular 10x el tráfico habitual y verificar page speed mobile (<3 segundos)."
      },
      {
        icon: Package,
        title: "Stock, Catálogo y Precios",
        description: "Refuerzo de inventario de productos estrella. Descarga de CSV de respaldo. Crear categoría 'Hot Sale 2026' en el menú. Pre-cargar productos ocultos con precios programados."
      },
      {
        icon: Smartphone,
        title: "Diseño y UX Mobile",
        description: "Slider con 3 slides: apertura, categoría estrella, cuotas + envío gratis. Barra de anuncios con beneficio principal. Banners por categoría. Verificar todo en mobile (75-81% del tráfico)."
      }
    ]
  },
  {
    id: "fase2",
    title: "FASE 2",
    subtitle: "Calentamiento y Expectativa",
    timing: "3-4 Semanas Previas",
    color: "bg-[#00A3E0]",
    items: [
      {
        icon: Target,
        title: "Construir audiencias",
        description: "Remarketing en Meta y Google: compradores anteriores, abandonadores de carrito, visitantes recientes. Lookalikes desde clientes de mayor LTV (testear 1%, 3%, 5%)."
      },
      {
        icon: Mail,
        title: "Captación de leads VIP",
        description: "Pop-up en sitio + social ads. Email D-14: 'Guardá la fecha'. Email D-7: early access solo para quienes abrieron. Objetivo: 500-2.000 nuevos suscriptores."
      },
      {
        icon: Flame,
        title: "Pauta pre-evento",
        description: "Awareness en Meta y TikTok para calentar audiencias. Testear 5-10 variantes de creativo por producto estrella. El 70% de la efectividad se decide en los primeros 3 segundos del video."
      }
    ]
  },
  {
    id: "fase3",
    title: "FASE 3",
    subtitle: "El War Room",
    timing: "Durante el Evento (3 días)",
    color: "bg-[#0050C3]",
    items: [
      {
        icon: MonitorPlay,
        title: "Encendido de pauta",
        description: "Prender campañas 4-5h antes de las 00:00 para salir de la fase de aprendizaje. Activar ajustes de bid por estacionalidad (+50-150% CVR). Shopping/PMax: 70-80% del presupuesto."
      },
      {
        icon: ShoppingCart,
        title: "Monitoreo y ajuste en vivo",
        description: "KPIs cada hora: sesiones, CVR, revenue, carritos abandonados, stock. En Tiendanube: 750 compras/minuto en el pico de las 11:00hs. Comparar precios vs. competencia las primeras 2h."
      },
      {
        icon: Megaphone,
        title: "Flash Sales + WhatsApp",
        description: "Flash sales rotativas por categoría cada 2-3h anunciadas por WhatsApp y Stories (no email, para no saturar). Push a abandonadores con código exclusivo WA."
      }
    ]
  },
  {
    id: "fase4",
    title: "FASE 4",
    subtitle: "Post-Evento y Logística",
    timing: "Los Días Siguientes",
    color: "bg-[#00A3E0]",
    items: [
      {
        icon: Truck,
        title: "Logística sin fallar",
        description: "Activar envío estándar de respaldo SIEMPRE. Mínimo 2 medios de envío activos. Acolchonar promesas de entrega. Habilitar retiro en tienda para bajar ansiedad."
      },
      {
        icon: Mail,
        title: "Retención inmediata",
        description: "Email de gracias (D+0), cross-sell (D+2), solicitar review (D+5), cupón de recompra con vencimiento 30 días (D+15). Abandonadores: oferta extendida 48h post-evento."
      },
      {
        icon: BarChart3,
        title: "Documentar y aprender",
        description: "Post-mortem dentro de los 7 días: top productos, fuentes con mejor CVR, ROAS por canal, horarios pico. Construir Lookalike de compradores para CyberMonday."
      }
    ]
  }
]

const calendar = [
  {
    day: "DÍA 1 — Lunes 11",
    label: "Lanzamiento",
    color: "bg-[#0050C3]",
    slots: [
      { time: "00:00-09:00", action: "Early access VIP activo. WhatsApp broadcast a lista VIP. Categoría oculta desbloqueada." },
      { time: "09:00-11:00", action: "Email de lanzamiento a toda la base. Campañas pagas al 100%. Publicar en redes." },
      { time: "10:00-13:00", action: "PICO MÁXIMO (750 compras/min a las 11:00hs). Monitoreo cada 60 min. Ajustar pujas." },
      { time: "12:00-18:00", action: "Flash sale #1 (categoría rotativa). Anunciar por WhatsApp y Stories." },
      { time: "18:00-00:00", action: "Email 'más vendidos del día'. Flash sale nocturna. Push a abandonadores de carrito." }
    ]
  },
  {
    day: "DÍA 2 — Martes 12",
    label: "Momentum",
    color: "bg-[#00A3E0]",
    slots: [
      { time: "08:00", action: "Email '¿Te perdiste algo? Los más vendidos del Día 1 + top ofertas de hoy'." },
      { time: "Todo el día", action: "Flash sales por categoría cada 2-3 horas. Anunciar SOLO por WhatsApp y Stories." },
      { time: "12:00", action: "Live Shopping si está planificado — mejor horario de conversión para sesiones en vivo." },
      { time: "18:00", action: "Email: 'Queda 1 día' + countdown. Retargeting agresivo a visitantes sin conversión del Día 1." },
      { time: "20:00", action: "WhatsApp push a abandonadores del Día 1 con código exclusivo + deadline claro." }
    ]
  },
  {
    day: "DÍA 3 — Miércoles 13",
    label: "Última oportunidad",
    color: "bg-[#0050C3]",
    slots: [
      { time: "08:00", action: "Email final: 'Última oportunidad — cierra hoy'. Urgencia máxima. Subject < 40 caracteres." },
      { time: "Todo el día", action: "Retargeting agresivo a todos los que visitaron y no compraron. Máxima precisión." },
      { time: "16:00", action: "Último email: countdown a cierre + descuento extra por transferencia (si aplica)." },
      { time: "18:00-Cierre", action: "Evaluar performance para decidir si se mantienen campañas. Menor actividad histórica." }
    ]
  }
]

export function PhasesSection() {
  const [activePhase, setActivePhase] = useState("fase1")
  const [activeView, setActiveView] = useState<"phases" | "calendar">("phases")
  
  const currentPhase = phases.find(p => p.id === activePhase)
  
  return (
    <section id="phases" className="bg-[#0A1628] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Plan de Acción Completo
          </h2>
          <p className="mx-auto max-w-2xl text-[#B8C9E0]">
            Desde la preparación hasta la retención post-evento. Incluye calendario hora por hora para los 3 días.
          </p>
        </div>

        {/* Budget Distribution */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-[#1E3A5F] bg-[#12203A] p-6">
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-[#B8C9E0]">Distribución recomendada de presupuesto</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0050C3]/20">
                <span className="text-2xl font-bold text-[#0050C3]">20%</span>
              </div>
              <p className="text-sm font-semibold text-white">Pre-evento</p>
              <p className="text-xs text-[#6B7F99]">Awareness + captación</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0050C3]/30">
                <span className="text-2xl font-bold text-[#00A3E0]">50%</span>
              </div>
              <p className="text-sm font-semibold text-white">Durante</p>
              <p className="text-xs text-[#6B7F99]">Conversión + retargeting</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00A3E0]/20">
                <span className="text-2xl font-bold text-[#00A3E0]">30%</span>
              </div>
              <p className="text-sm font-semibold text-white">Post-evento</p>
              <p className="text-xs text-[#6B7F99]">Retención + re-engagement</p>
            </div>
          </div>
        </div>

        {/* View toggle */}
        <div className="mb-8 flex justify-center gap-2">
          <button
            onClick={() => setActiveView("phases")}
            className={cn(
              "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
              activeView === "phases"
                ? "bg-[#0050C3] text-white shadow-[0_0_20px_rgba(0,80,195,0.4)]"
                : "border border-[#1E3A5F] bg-[#12203A] text-[#B8C9E0] hover:border-[#0050C3]/50"
            )}
          >
            Las 4 Fases
          </button>
          <button
            onClick={() => setActiveView("calendar")}
            className={cn(
              "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
              activeView === "calendar"
                ? "bg-[#0050C3] text-white shadow-[0_0_20px_rgba(0,80,195,0.4)]"
                : "border border-[#1E3A5F] bg-[#12203A] text-[#B8C9E0] hover:border-[#0050C3]/50"
            )}
          >
            Calendario 3 Días
          </button>
        </div>

        {activeView === "phases" && (
          <>
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {phases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                    activePhase === phase.id
                      ? "bg-[#0050C3] text-white shadow-[0_0_20px_rgba(0,80,195,0.4)]"
                      : "border border-[#1E3A5F] bg-[#12203A] text-[#B8C9E0] hover:border-[#0050C3]/50"
                  )}
                >
                  {phase.title}: {phase.subtitle}
                </button>
              ))}
            </div>
            
            {currentPhase && (
              <div className="rounded-2xl border border-[#1E3A5F] bg-[#12203A] p-8 shadow-[0_0_50px_rgba(0,80,195,0.1)]">
                <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <div>
                    <div className={cn("mb-2 inline-block rounded-lg px-3 py-1 text-sm font-medium text-white", currentPhase.color)}>
                      {currentPhase.timing}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {currentPhase.title}: {currentPhase.subtitle}
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {currentPhase.items.map((item) => (
                    <div key={item.title} className="rounded-xl border border-[#1E3A5F] bg-[#0A1628] p-6">
                      <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-[0_0_15px_rgba(0,80,195,0.3)]", currentPhase.color)}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 font-semibold text-white">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-[#6B7F99]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {activeView === "calendar" && (
          <div className="space-y-6">
            {calendar.map((day) => (
              <div key={day.day} className="overflow-hidden rounded-2xl border border-[#1E3A5F] bg-[#12203A] shadow-[0_0_50px_rgba(0,80,195,0.1)]">
                <div className={cn("flex items-center justify-between px-6 py-4", day.color)}>
                  <h3 className="text-lg font-bold text-white">{day.day}</h3>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">{day.label}</span>
                </div>
                <div className="divide-y divide-[#1E3A5F]">
                  {day.slots.map((slot, i) => (
                    <div key={i} className="flex gap-4 px-6 py-4">
                      <div className="flex w-28 flex-shrink-0 items-start">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-[#0050C3]" />
                          <span className="text-sm font-medium text-[#00A3E0]">{slot.time}</span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-[#B8C9E0]">{slot.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
