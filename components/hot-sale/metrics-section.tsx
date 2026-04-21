import { BarChart3, Target, Users, RefreshCw, ShoppingCart } from "lucide-react"

const kpis = [
  {
    icon: Target,
    name: "Conversion Rate (CVR)",
    benchmark: "2-4%",
    context: "vs. 1,3% anual",
    insight: "Si es bajo, el problema es la propuesta, el precio o la UX. No más pauta."
  },
  {
    icon: BarChart3,
    name: "Average Order Value (AOV)",
    benchmark: "+15-25%",
    context: "vs. promedio anual",
    insight: "Un AOV más alto con mismo tráfico = más revenue sin más inversión en adquisición."
  },
  {
    icon: Users,
    name: "Customer Acquisition Cost",
    benchmark: "CAC < 30% del LTV",
    context: "esperado: +30-50% vs. anual",
    insight: "Si el CAC supera el LTV proyectado, el evento es un problema disfrazado de éxito."
  },
  {
    icon: ShoppingCart,
    name: "Cart Abandonment Rate",
    benchmark: "< 60%",
    context: "TN Hot Sale 2025: solo 30%",
    insight: "La urgencia del evento + cuotas sin interés reducen drásticamente el abandono."
  },
  {
    icon: RefreshCw,
    name: "Repeat Purchase Rate",
    benchmark: "20-30% a 90 días",
    context: "8-15% a 30 días con nurturing",
    insight: "El KPI que define si el evento construyó algo real o solo generó compradores únicos."
  }
]

const retargetingSegments = [
  {
    segment: "Compradores del evento",
    sequence: "Email de gracias (D+0) → cross-sell (D+2) → solicitar review (D+5) → cupón de recompra 30 días (D+15)"
  },
  {
    segment: "Abandonadores de carrito",
    sequence: "Oferta extendida con deadline 48h post-evento: 'Se acabó el Hot Sale pero no tu descuento'"
  },
  {
    segment: "Visitantes sin add-to-cart",
    sequence: "Secuencia educativa de 2 semanas con contenido de valor + reseñas de compradores del evento"
  },
  {
    segment: "Nuevos suscriptores",
    sequence: "Welcome series de 3 emails en 10 días. Presentar la marca, no vender todavía"
  },
  {
    segment: "Compradores alta frecuencia",
    sequence: "Incorporar al programa VIP para early access del próximo evento. Son tu mejor activo"
  }
]

export function MetricsSection() {
  return (
    <section id="metrics" className="bg-[#0A1628] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0050C3]/30 bg-[#0050C3]/10 px-4 py-2">
            <BarChart3 className="h-4 w-4 text-[#0050C3]" />
            <span className="text-sm font-medium text-[#B8C9E0]">Post Hot Sale</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Métricas que Importan y Retención
          </h2>
          <p className="mx-auto max-w-3xl text-[#B8C9E0]">
            Ignorar: impresiones sin CTR, followers sin engagement, pageviews sin CVR. Medir: las 5 métricas que deciden si el evento fue realmente rentable. Y capitalizar las audiencias ganadas.
          </p>
        </div>

        {/* KPIs Grid */}
        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {kpis.map((kpi) => (
            <div
              key={kpi.name}
              className="group rounded-2xl border border-[#1E3A5F] bg-[#12203A] p-6 transition-all hover:border-[#0050C3]/50"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0050C3]/10 transition-colors group-hover:bg-[#0050C3]/20">
                <kpi.icon className="h-5 w-5 text-[#0050C3]" />
              </div>
              <p className="text-2xl font-bold text-[#00A3E0]">{kpi.benchmark}</p>
              <p className="mb-1 text-xs text-[#6B7F99]">{kpi.context}</p>
              <p className="mb-2 text-sm font-semibold text-white">{kpi.name}</p>
              <p className="text-xs leading-relaxed text-[#6B7F99]">{kpi.insight}</p>
            </div>
          ))}
        </div>

        {/* Retargeting Segments */}
        <div>
          <h3 className="mb-6 text-center text-xl font-bold text-white sm:text-2xl">
            Capitalización de audiencias post-evento
          </h3>
          <div className="space-y-3">
            {retargetingSegments.map((seg, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-[#1E3A5F] bg-[#12203A]"
              >
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-block rounded-lg bg-[#0050C3]/20 px-3 py-1.5 text-sm font-semibold text-[#00A3E0]">
                      {seg.segment}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#B8C9E0]">{seg.sequence}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex items-start gap-4 rounded-xl border border-[#0050C3]/20 bg-[#12203A] p-6">
            <RefreshCw className="h-6 w-6 flex-shrink-0 text-[#0050C3]" />
            <p className="text-[#B8C9E0]">
              <strong className="text-white">Del Hot Sale al CyberMonday:</strong> Construir Lookalike Audiences desde compradores de Hot Sale para prospecting de CyberMonday (noviembre). Los clientes recurrentes convierten 58% más que los nuevos. Los anuncios de retargeting tienen 76% más probabilidad de recibir clics que el display estándar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
