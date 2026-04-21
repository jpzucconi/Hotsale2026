import { Smartphone, CreditCard, Truck, MessageSquare, MessageCircle, Instagram, Search } from "lucide-react"

const consumerTraits = [
  {
    icon: Smartphone,
    stat: "75-81%",
    title: "Mobile First",
    description: "de las compras en Hot Sale son desde celular. En Tiendanube llega al 81%. Tu sitio móvil es tu principal punto de venta."
  },
  {
    icon: CreditCard,
    stat: "75%",
    title: "Cuotas como Driver #1",
    description: "de las transacciones se realizaron en cuotas. El 54% sin interés. Son el principal motor de conversión en Argentina."
  },
  {
    icon: Instagram,
    stat: "28,9M",
    title: "Social Discovery",
    description: "usuarios argentinos en Instagram. El 83% dice descubrir nuevos productos. TikTok: 24,4M usuarios y creciendo."
  },
  {
    icon: MessageCircle,
    stat: "80-98%",
    title: "WhatsApp Primero",
    description: "tasa de apertura (vs. 20-30% del email). 93% de penetración, 4,2h de uso diario. ROAS promedio: 16,6x."
  },
  {
    icon: Search,
    stat: "50%",
    title: "Investigan antes",
    description: "de los compradores inicia su búsqueda un mes antes del evento. El 66% usa al menos 2 canales para investigar."
  }
]

export function MobileMockupsSection() {
  return (
    <section className="bg-[#0A1628] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Consumer Profile Cards */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0050C3]/30 bg-[#0050C3]/10 px-4 py-2">
              <span className="text-sm font-medium text-[#B8C9E0]">El consumidor argentino 2026</span>
            </div>
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl text-balance">
              Más informado, más comparador, más exigente
            </h2>
            <p className="mx-auto max-w-3xl text-[#B8C9E0]">
              Años de inflación y acceso masivo a la información lo convirtieron en un comprador estratégico. Esto no es una amenaza: es el punto de partida para construir propuestas de valor que realmente conviertan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {consumerTraits.map((trait) => (
              <div
                key={trait.title}
                className="group rounded-2xl border border-[#1E3A5F] bg-[#12203A]/50 p-6 transition-all hover:border-[#0050C3]/50"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0050C3]/10 transition-colors group-hover:bg-[#0050C3]/20">
                  <trait.icon className="h-5 w-5 text-[#0050C3]" />
                </div>
                <p className="mb-1 text-2xl font-bold text-[#00A3E0]">{trait.stat}</p>
                <p className="mb-2 text-sm font-semibold text-white">{trait.title}</p>
                <p className="text-xs leading-relaxed text-[#6B7F99]">{trait.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-[#6B7F99]">
            Fuente: DataReportal Digital 2025 Argentina · CACE Resultados Hot Sale 2025 · Burbuxa / ITPago 2026
          </p>
        </div>

        {/* Mobile Experience */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0050C3]/30 bg-[#0050C3]/10 px-4 py-2">
            <Smartphone className="h-4 w-4 text-[#0050C3]" />
            <span className="text-sm font-medium text-[#B8C9E0]">Experiencia Mobile-First</span>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl text-balance">
            El 75% de las compras Hot Sale son mobile
          </h2>
          <p className="mx-auto max-w-2xl text-[#B8C9E0]">
            En Tiendanube llega al 81%. Tu Tiendanube está optimizada para convertir con un checkout hasta 4x más rápido.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#1E3A5F] bg-[#12203A]/50 p-6 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0050C3]/20">
              <CreditCard className="h-6 w-6 text-[#0050C3]" />
            </div>
            <h3 className="mb-2 font-semibold text-white">Pago Nube</h3>
            <p className="text-sm text-[#6B7F99]">Hasta 18 cuotas sin interés. Comisión 0% de Tiendanube sobre ventas procesadas.</p>
          </div>
          <div className="rounded-2xl border border-[#1E3A5F] bg-[#12203A]/50 p-6 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0050C3]/20">
              <Truck className="h-6 w-6 text-[#0050C3]" />
            </div>
            <h3 className="mb-2 font-semibold text-white">Envio Nube</h3>
            <p className="text-sm text-[#6B7F99]">Tarifas competitivas que hacen viable el envío gratis. Impresión masiva de etiquetas.</p>
          </div>
          <div className="rounded-2xl border border-[#1E3A5F] bg-[#12203A]/50 p-6 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0050C3]/20">
              <MessageSquare className="h-6 w-6 text-[#0050C3]" />
            </div>
            <h3 className="mb-2 font-semibold text-white">Chat Nube</h3>
            <p className="text-sm text-[#6B7F99]">IA que atiende 24/7 con tu voz de marca. Respuesta en menos de 15 min durante el evento.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
