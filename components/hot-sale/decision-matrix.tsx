import { Shield, Zap, Check, X } from "lucide-react"

export function DecisionMatrix() {
  return (
    <section className="bg-[#0A1628] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Matriz de Decision: Oficial o Independiente?
          </h2>
          <p className="mx-auto max-w-2xl text-[#B8C9E0]">
            Elegir la estrategia correcta depende de tus objetivos y recursos disponibles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border-2 border-[#0050C3] bg-[#12203A] shadow-[0_0_50px_rgba(0,80,195,0.2)]">
            <div className="bg-[#0050C3] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Socio CACE (Oficial)</h3>
                  <p className="text-sm text-white/80">Maxima exposicion y adquisicion masiva</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0050C3]" />
                  <span className="text-white">Uso legal de la marca registrada y logo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0050C3]" />
                  <span className="text-white">Trafico directo desde la web central de la CACE</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7F99]" />
                  <span className="text-[#6B7F99]">Requiere pago de membresia anual y sponsoreo</span>
                </li>
              </ul>
              <p className="mt-6 rounded-lg border border-[#1E3A5F] bg-[#0A1628] p-4 text-sm text-[#B8C9E0]">
                <strong className="text-white">Ideal para:</strong> Marcas buscando maxima exposicion y adquisicion masiva.
              </p>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-2xl border-2 border-[#00A3E0] bg-[#12203A] shadow-[0_0_50px_rgba(0,163,224,0.15)]">
            <div className="bg-[#00A3E0] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Independiente (Hot Week / Hot Nube)</h3>
                  <p className="text-sm text-white/80">Control total de narrativa y presupuesto</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00A3E0]" />
                  <span className="text-white">100% control de la narrativa y presupuesto</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7F99]" />
                  <span className="text-[#6B7F99]">Prohibido el uso del logo oficial (riesgo de multas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7F99]" />
                  <span className="text-[#6B7F99]">Requiere mayor esfuerzo y presupuesto en pauta propia</span>
                </li>
              </ul>
              <p className="mt-6 rounded-lg border border-[#1E3A5F] bg-[#0A1628] p-4 text-sm text-[#B8C9E0]">
                <strong className="text-white">Ideal para:</strong> Negocios de nicho o con presupuestos enfocados 100% en Ads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
