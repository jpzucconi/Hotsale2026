import { ShoppingCart, AlertCircle, Zap, MessageSquare, Mail, MonitorPlay, Clock, Gift } from "lucide-react"

const recoverySequence = [
  {
    timing: "15-30 min",
    channel: "Email #1 + WhatsApp",
    icon: Mail,
    description: "Recordatorio con imagen del producto exacto + link al carrito. Sin descuento todavía.",
    color: "border-[#0050C3]/30 bg-[#0050C3]/5"
  },
  {
    timing: "1-2 horas",
    channel: "Meta DPA Retargeting",
    icon: MonitorPlay,
    description: "Dynamic Product Ad con el producto abandonado. Mayor intención = mayor bid. ROI típico: 300-500%.",
    color: "border-[#00A3E0]/30 bg-[#00A3E0]/5"
  },
  {
    timing: "2 horas",
    channel: "WhatsApp exclusivo",
    icon: MessageSquare,
    description: "Código de descuento solo para WhatsApp. Tasa de recuperación: +35%.",
    color: "border-[#0050C3]/30 bg-[#0050C3]/5"
  },
  {
    timing: "4-6 horas",
    channel: "Email #2",
    icon: Mail,
    description: "'Tus productos se están agotando.' Social proof + reviews del producto.",
    color: "border-[#00A3E0]/30 bg-[#00A3E0]/5"
  },
  {
    timing: "24 horas",
    channel: "Email #3",
    icon: Gift,
    description: "Incentivo final: envío gratis o 5% extra. Deadline explícito en el subject.",
    color: "border-[#0050C3]/30 bg-[#0050C3]/5"
  }
]

export function CartRescueSection() {
  return (
    <section className="bg-[#12203A] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Rescate de Carritos: Secuencia Multi-Canal
          </h2>
          <p className="mx-auto max-w-3xl text-[#B8C9E0]">
            La tasa de abandono durante Hot Sale es alta por el &apos;comparison shopping&apos;. La secuencia debe ser más comprimida que en fechas normales — el evento dura 72h y cada minuto cuenta.
          </p>
        </div>
        
        {/* Key Stats */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#1E3A5F] bg-[#0A1628] p-6 text-center">
            <ShoppingCart className="mx-auto mb-3 h-8 w-8 text-[#6B7F99]" />
            <h3 className="text-sm font-semibold text-white">El Comportamiento</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6B7F99]">
              El usuario llena carritos en 3-4 tiendas simultáneamente para comparar precio final con envío.
            </p>
          </div>
          
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
            <AlertCircle className="mx-auto mb-3 h-8 w-8 text-red-400" />
            <h3 className="text-sm font-semibold text-white">Solo 30% de abandono</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#B8C9E0]">
              Hot Sale Tiendanube 2025: 30% de abandono (vs. 70% global) gracias a urgencia del evento + cuotas.
            </p>
          </div>
          
          <div className="rounded-2xl border-2 border-[#0050C3] bg-[#0050C3]/10 p-6 text-center">
            <Zap className="mx-auto mb-3 h-8 w-8 text-[#00A3E0]" />
            <h3 className="text-sm font-semibold text-white">WhatsApp recupera +30%</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#B8C9E0]">
              vs. 3-14% del email solo. Clave: escalonar canales y nunca enviarlos simultáneamente.
            </p>
          </div>
        </div>

        {/* Recovery Sequence Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-[#0050C3] to-[#00A3E0] sm:block" />
          
          <div className="space-y-4">
            {recoverySequence.map((step, index) => (
              <div key={index} className="relative flex gap-4 sm:gap-8">
                <div className="relative z-10 hidden flex-shrink-0 sm:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#0050C3] bg-[#0A1628]">
                    <Clock className="h-5 w-5 text-[#0050C3]" />
                  </div>
                </div>
                <div className={`flex-1 rounded-2xl border p-5 ${step.color}`}>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="rounded-lg bg-[#0050C3]/20 px-3 py-1 text-xs font-bold text-[#00A3E0]">{step.timing}</span>
                    <div className="flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-[#0050C3]" />
                      <span className="text-sm font-semibold text-white">{step.channel}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[#B8C9E0]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 rounded-xl border border-[#0050C3]/30 bg-[#0050C3]/10 p-6">
          <MessageSquare className="h-6 w-6 flex-shrink-0 text-[#0050C3]" />
          <p className="text-center text-[#B8C9E0]">
            <strong className="text-white">Clave:</strong> Actualizar listas de supresión antes de cada envío. Nunca enviar todos los canales simultáneamente.
          </p>
        </div>
      </div>
    </section>
  )
}
