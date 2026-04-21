import { AlertTriangle, Shield } from "lucide-react"

const errors = [
  {
    error: "Arrancar por el descuento sin propuesta de valor.",
    prevention: "Definí tu diferencial primero. El descuento real en HS 2025 fue solo 0,7-2,9%. Lo que convierte es cuotas + envío gratis + percepción de exclusividad."
  },
  {
    error: "Romper la experiencia por falta de stock o precios inflados.",
    prevention: "Backup en CSV, stock auditado y sincronización en tiempo real. El consumidor rastrea el historial de precios y penaliza el engaño."
  },
  {
    error: "No tener envío de respaldo ni múltiples medios de pago.",
    prevention: "Activar SIEMPRE envío estándar como respaldo + mínimo 2 medios de envío. Si la app de envíos falla en el pico, tu tienda sigue vendiendo."
  },
  {
    error: "Improvisar sin brand building previo.",
    prevention: "En 2025, el ROAS promedio cayó ~50% (de 15-30x a ~7x). Las marcas que habían invertido en comunidad pre-evento mantuvieron conversiones fuertes."
  },
  {
    error: "Colapso en atención al cliente.",
    prevention: "Definir turnos de guardia, respuesta máx 15 min. Business AI de Meta (gratuito) resuelve el 70% de consultas. Briefear al equipo con FAQ interno."
  },
  {
    error: "Apagar la pauta el día post-evento.",
    prevention: "Lunes y martes posteriores son oro puro para remarketing. Oferta extendida 48h para abandonadores. Construir Lookalikes de compradores para CyberMonday."
  }
]

export function ErrorsSection() {
  return (
    <section id="errors" className="bg-[#0A1628] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            6 Errores Fatales a Evitar
          </h2>
          <p className="mx-auto max-w-2xl text-[#B8C9E0]">
            Los errores más comunes que destruyen el ROI del evento y cómo prevenirlos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map((item, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-2xl border border-[#1E3A5F] bg-[#12203A] shadow-[0_0_30px_rgba(0,80,195,0.08)]"
            >
              <div className="flex items-start gap-4 border-b border-red-500/20 bg-red-500/5 p-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-red-400">Error {index + 1}</p>
                  <p className="text-sm font-semibold text-white">{item.error}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#0050C3]/10">
                  <Shield className="h-5 w-5 text-[#0050C3]" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#0050C3]">Prevención</p>
                  <p className="text-sm leading-relaxed text-[#B8C9E0]">{item.prevention}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
