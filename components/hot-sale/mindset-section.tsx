import { Lightbulb } from "lucide-react"

export function MindsetSection() {
  return (
    <section className="bg-[#0A1628] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            El error más común: arrancar por el descuento
          </h2>
          <p className="mx-auto max-w-3xl text-[#B8C9E0]">
            <strong className="text-[#00A3E0]">El descuento puro es una ilusión</strong>. Lo que convierte es: propuesta de valor clara + cuotas accesibles + envío gratuito + percepción de evento exclusivo.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#1E3A5F] bg-[#12203A]/50 p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6B7F99]">Paso 1</p>
            <h3 className="mb-4 text-xl font-bold text-white">Definí tu diferencial</h3>
            <p className="text-sm leading-relaxed text-[#B8C9E0]">
              ¿Qué problema le resolvés a tu cliente? ¿Por qué tu producto es la mejor opción ahora? ¿Qué podés ofrecer que tu competencia no puede? Respondé estas preguntas antes de armar cualquier oferta.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1E3A5F] bg-[#12203A]/50 p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6B7F99]">Paso 2</p>
            <h3 className="mb-4 text-xl font-bold text-white">Diseñá la oferta comercial</h3>
            <p className="text-sm leading-relaxed text-[#B8C9E0]">
              Las tácticas que más convierten: cuotas sin interés (6–12 pagos), envío gratis con umbral mínimo, bundles/combos (+20–35% AOV), early access VIP, descuento por transferencia (10–15% adicional).
            </p>
          </div>

          <div className="rounded-2xl border border-[#1E3A5F] bg-[#12203A]/50 p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6B7F99]">Paso 3</p>
            <h3 className="mb-4 text-xl font-bold text-white">Seleccioná productos estratégicamente</h3>
            <p className="text-sm leading-relaxed text-[#B8C9E0]">
              Priorizá productos de alto margen y baja rotación. Los bundles combinan un bestseller con un producto de baja rotación: aumentan el ticket sin erosionar el margen ni la percepción de valor.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-xl border border-[#0050C3]/20 bg-[#12203A] p-6">
          <Lightbulb className="h-6 w-6 flex-shrink-0 text-[#0050C3]" />
          <p className="text-[#B8C9E0]">
            <strong className="text-white">Hot Sale no son 3 días — es un ciclo de 3 meses.</strong> El 50% investiga un mes antes. La retención post-evento define el ROI real. Un cliente nuevo satisfecho hoy es un cliente recurrente mañana. Los clientes recurrentes convierten 58% más que los nuevos.
          </p>
        </div>
      </div>
    </section>
  )
}
