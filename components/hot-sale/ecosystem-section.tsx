import { CreditCard, Truck, Mail, MessageCircle } from "lucide-react"

const tools = [
  {
    icon: CreditCard,
    name: "Pago Nube",
    description: "Hasta 18 cuotas sin interés. Comisión 0% de Tiendanube. Transferencias automatizadas con confirmación instantánea. Descuento por transferencia configurable (10-15%).",
    stat: "54% sin interés"
  },
  {
    icon: Truck,
    name: "Envío Nube",
    description: "Tarifas competitivas que hacen viable el envío gratis. Gestión centralizada de despachos. Impresión masiva de etiquetas. Activar envío estándar de respaldo como red de seguridad.",
    stat: "Envío gratis = driver #2"
  },
  {
    icon: Mail,
    name: "Marketing Nube",
    description: "Automatización nativa para recuperación de carritos (email + WhatsApp a los 30 min). Cross-sell en carrito. Newsletters y secuencia completa de emails programados.",
    stat: "+35% recuperación WA"
  },
  {
    icon: MessageCircle,
    name: "WhatsApp + Chat Nube",
    description: "WhatsApp: 80-98% open rate, 8,3x más conversión que email, ROAS 16,6x. Chat Nube con IA 24/7 que resuelve el 70% de consultas automáticamente.",
    stat: "16,6x ROAS"
  }
]

export function EcosystemSection() {
  return (
    <section className="bg-[#0050C3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            El Ecosistema Nube: Tu Motor de Escalamiento
          </h2>
          <p className="mx-auto max-w-2xl text-white/80">
            Herramientas integradas para maximizar tu rendimiento. Todas las promociones se pueden programar para activarse automáticamente el 11 de mayo a las 00:00hs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div 
              key={tool.name}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  <tool.icon className="h-6 w-6 text-white" />
                </div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">{tool.stat}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{tool.name}</h3>
              <p className="text-sm leading-relaxed text-white/80">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
