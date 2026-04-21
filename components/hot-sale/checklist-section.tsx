"use client"

import { useState } from "react"
import { CheckCircle2, Circle, Clock, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChecklistItem {
  task: string
  area: string
}

interface ChecklistWeek {
  label: string
  period: string
  color: string
  items: ChecklistItem[]
}

const checklistWeeks: ChecklistWeek[] = [
  {
    label: "Semana 1",
    period: "D-30 a D-23 (11-18 Abril)",
    color: "bg-red-500",
    items: [
      { task: "Definir objetivos: revenue target, % nuevos clientes, AOV objetivo, unidades a liquidar", area: "Estrategia" },
      { task: "Asignar presupuesto de marketing: 20% pre-evento, 50% durante, 30% post-evento", area: "Marketing" },
      { task: "Seleccionar productos estrella: alto margen + baja rotación. Diseñar bundles y calcular márgenes mínimos", area: "Comercial" },
      { task: "Crear categoría 'Hot Sale 2026' y agregarla al menú de navegación principal", area: "Tiendanube" },
      { task: "Verificar cuotas sin interés activas en Pago Nube / Mercado Pago. Configurar montos mínimos por cantidad de cuotas", area: "Tiendanube" },
      { task: "Activar pop-up VIP: 'Suscribite y accedé al Hot Sale 48h antes'. Iniciar captación de leads", area: "Tiendanube" },
      { task: "Construir audiencias de remarketing en Meta y Google Ads (compradores anteriores, abandonadores, visitantes)", area: "Pauta" },
      { task: "Iniciar estrategia SEO: crear/actualizar landing /hot-sale permanente. Keyword research transaccional", area: "SEO" },
      { task: "Lanzar campañas de awareness en Meta y TikTok para calentar audiencias", area: "Pauta" },
      { task: "Contactar proveedor logístico para confirmar capacidad durante el evento. Auditoría de stock", area: "Logística" },
    ]
  },
  {
    label: "Semana 2",
    period: "D-22 a D-16 (19-25 Abril)",
    color: "bg-orange-500",
    items: [
      { task: "Optimizar SEO de productos estrella: título (max 70 car.), descripción (max 160 car.) y URL con keywords", area: "Tiendanube" },
      { task: "Cargar productos ocultos del evento. Preparar CSV masivo con cambios de precio para activar el día del evento", area: "Tiendanube" },
      { task: "Iniciar creative testing en Meta: 5-10 variantes de creativo por producto estrella. Dejar correr 10+ días", area: "Pauta" },
      { task: "Crear estructura de campañas separada para el evento en Google y Meta. Nunca mezclar con Always-on", area: "Pauta" },
      { task: "Crear templates de WhatsApp: broadcast VIP, recuperación de carrito (3 mensajes), lanzamiento. Enviar a aprobación Meta", area: "WhatsApp" },
      { task: "Diseñar landing page del evento: countdown, top ofertas, formulario VIP. URL permanente /hot-sale", area: "Tech" },
      { task: "Diseñar y cargar slider (3 slides), barra de anuncios, banners promocionales e informativos. Verificar en mobile", area: "Tiendanube" },
      { task: "Producir creativos para todas las plataformas: banners, stories, reels, email headers", area: "Diseño" },
      { task: "Implementar schema markup en la landing (Product, Offer, FAQ Page). Verificar en Google Search Console", area: "SEO" },
      { task: "Enviar segundo email: 'Adelanto exclusivo: categorías con mayor descuento'. Solo al segmento que abrió el primero", area: "Email" },
    ]
  },
  {
    label: "Semana 3",
    period: "D-15 a D-9 (26 Abril - 2 Mayo)",
    color: "bg-yellow-500",
    items: [
      { task: "Configurar automatizaciones de carrito abandonado: email (1h, 6h, 24h) + WhatsApp (2h). Testear flujo completo", area: "Tech" },
      { task: "Configurar cross-sell y upsell en carrito y página de producto. Mapear top 20 productos con complementarios", area: "Tiendanube" },
      { task: "Configurar descuento por transferencia bancaria (10-15%) como medio de pago personalizado", area: "Tiendanube" },
      { task: "Briefear al equipo de atención al cliente: todas las promos, condiciones, excepciones y FAQ interno", area: "Operaciones" },
      { task: "Test de carga del sitio: simular 10x tráfico habitual. Verificar page speed mobile (<3 seg)", area: "Tech" },
      { task: "Agregar keywords de Hot Sale en Google Ads Search. Activar Search Themes en PMax", area: "Google" },
      { task: "Implementar ajustes de bid por estacionalidad en Google Ads para los 3 días del evento (+50-150% CVR)", area: "Google" },
      { task: "Preparar y programar calendario editorial de redes sociales: countdown (D-7 a D-1), lanzamiento y urgencia", area: "Redes" },
    ]
  },
  {
    label: "Semana 4",
    period: "D-8 a D-1 (3-10 Mayo)",
    color: "bg-[#0050C3]",
    items: [
      { task: "Activar countdown en Instagram y TikTok. Hashtags: #HOTSALE #HeyHOTSALE", area: "Redes" },
      { task: "Tercer email: 'Preview de top ofertas — elegí tus favoritos antes que nadie'. Link a lista de deseos", area: "Email" },
      { task: "Test completo del flujo de compra end-to-end en mobile y desktop: selección → carrito → checkout → pago → confirmación", area: "Tech" },
      { task: "Escalar creativos ganadores del testing al 100% del presupuesto. Pausar los que no performaron", area: "Pauta" },
      { task: "Email VIP (D-3) con early access: 'Comprás 48h antes que todos'. Solo para mejores clientes RFM", area: "Email" },
      { task: "Activar envío estándar de respaldo. Verificar que haya al menos 2 medios de envío activos", area: "Tiendanube" },
      { task: "Modificar email de confirmación de compra con aviso de posibles demoras. Activar notificaciones de stock", area: "Tiendanube" },
      { task: "Confirmar turnos del equipo de atención al cliente para los 3 días. Tiempo máximo de respuesta: 15 min", area: "Operaciones" },
      { task: "Revisión final de precios, cupones, envío gratis, cuotas. Verificar todo en mobile", area: "Tech" },
      { task: "D-1: Activar 'Página en construcción'. Cambios finales. Verificar flujo completo. Desactivar a las 00:00 del 11/5", area: "Tiendanube" },
    ]
  }
]

const areaColors: Record<string, string> = {
  "Estrategia": "bg-purple-500/20 text-purple-300",
  "Marketing": "bg-pink-500/20 text-pink-300",
  "Comercial": "bg-amber-500/20 text-amber-300",
  "Tiendanube": "bg-blue-500/20 text-blue-300",
  "Pauta": "bg-orange-500/20 text-orange-300",
  "SEO": "bg-green-500/20 text-green-300",
  "Logística": "bg-red-500/20 text-red-300",
  "WhatsApp": "bg-emerald-500/20 text-emerald-300",
  "Tech": "bg-cyan-500/20 text-cyan-300",
  "Diseño": "bg-fuchsia-500/20 text-fuchsia-300",
  "Email": "bg-yellow-500/20 text-yellow-300",
  "Redes": "bg-rose-500/20 text-rose-300",
  "Google": "bg-sky-500/20 text-sky-300",
  "Operaciones": "bg-slate-500/20 text-slate-300",
}

export function ChecklistSection() {
  const [checked, setChecked] = useState<string[]>([])
  const [activeWeek, setActiveWeek] = useState(0)
  
  const totalItems = checklistWeeks.reduce((acc, w) => acc + w.items.length, 0)
  
  const getItemKey = (weekIdx: number, itemIdx: number) => `${weekIdx}-${itemIdx}`
  
  const toggleItem = (key: string) => {
    setChecked(prev => 
      prev.includes(key) 
        ? prev.filter(k => k !== key)
        : [...prev, key]
    )
  }
  
  const progress = (checked.length / totalItems) * 100

  const weekProgress = (weekIdx: number) => {
    const weekItems = checklistWeeks[weekIdx].items.length
    const weekChecked = checklistWeeks[weekIdx].items.filter((_, i) => 
      checked.includes(getItemKey(weekIdx, i))
    ).length
    return { checked: weekChecked, total: weekItems }
  }
  
  return (
    <section id="checklist" className="bg-[#12203A] py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0050C3]/30 bg-[#0050C3]/10 px-4 py-2">
            <Calendar className="h-4 w-4 text-[#0050C3]" />
            <span className="text-sm font-medium text-[#B8C9E0]">Hot Sale: 11-13 de Mayo</span>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl text-balance">
            Checklist 30 Días de Preparación
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[#B8C9E0]">
            {totalItems} tareas organizadas en 4 semanas. Cada tarea tiene área responsable. Compartí este checklist con todo el equipo.
          </p>
        </div>
        
        {/* Global progress */}
        <div className="mb-8 rounded-2xl border border-[#1E3A5F] bg-[#0A1628] p-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-white">Progreso total</span>
            <span className="text-[#6B7F99]">{checked.length} de {totalItems}</span>
          </div>
          <div className="relative h-4 overflow-hidden rounded-full bg-[#12203A]">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#0050C3] to-[#00A3E0] shadow-[0_0_15px_rgba(0,80,195,0.6)] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Week tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {checklistWeeks.map((week, weekIdx) => {
            const wp = weekProgress(weekIdx)
            return (
              <button
                key={weekIdx}
                onClick={() => setActiveWeek(weekIdx)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeWeek === weekIdx
                    ? "bg-[#0050C3] text-white shadow-[0_0_20px_rgba(0,80,195,0.4)]"
                    : "border border-[#1E3A5F] bg-[#0A1628] text-[#B8C9E0] hover:border-[#0050C3]/50"
                )}
              >
                <span className={cn("h-2 w-2 rounded-full", week.color)} />
                {week.label}
                <span className="text-xs opacity-70">({wp.checked}/{wp.total})</span>
              </button>
            )
          })}
        </div>

        {/* Active week content */}
        <div className="rounded-2xl border border-[#1E3A5F] bg-[#0A1628] p-6 sm:p-8 shadow-[0_0_50px_rgba(0,80,195,0.15)]">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">{checklistWeeks[activeWeek].label}</h3>
              <p className="text-sm text-[#6B7F99]">{checklistWeeks[activeWeek].period}</p>
            </div>
            <div className={cn("rounded-lg px-3 py-1 text-xs font-bold text-white", checklistWeeks[activeWeek].color)}>
              {weekProgress(activeWeek).checked}/{weekProgress(activeWeek).total}
            </div>
          </div>
          
          <ul className="space-y-3">
            {checklistWeeks[activeWeek].items.map((item, index) => {
              const key = getItemKey(activeWeek, index)
              const isChecked = checked.includes(key)
              return (
                <li key={key}>
                  <button
                    onClick={() => toggleItem(key)}
                    className={cn(
                      "group flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all duration-300",
                      isChecked
                        ? "border-[#0050C3] bg-[#0050C3]/15 shadow-[0_0_20px_rgba(0,80,195,0.2)]"
                        : "border-[#1E3A5F] bg-[#12203A] hover:border-[#0050C3]/50 hover:bg-[#12203A]/80"
                    )}
                  >
                    {isChecked ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00A3E0]" />
                    ) : (
                      <Circle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7F99] transition-colors group-hover:text-[#0050C3]" />
                    )}
                    <div className="flex-1">
                      <span className={cn(
                        "text-sm font-medium transition-all",
                        isChecked ? "text-white" : "text-[#B8C9E0] group-hover:text-white"
                      )}>
                        {item.task}
                      </span>
                      <span className={cn(
                        "ml-2 inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase",
                        areaColors[item.area] || "bg-gray-500/20 text-gray-300"
                      )}>
                        {item.area}
                      </span>
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>
          
          {checked.length === totalItems && (
            <div className="mt-6 overflow-hidden rounded-xl border border-[#00A3E0]/50 bg-gradient-to-r from-[#0050C3]/20 to-[#00A3E0]/20 p-4 text-center shadow-[0_0_30px_rgba(0,163,224,0.3)]">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00A3E0]" />
                <p className="font-semibold text-white">Excelente! Estás listo para el Hot Sale 2026</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
