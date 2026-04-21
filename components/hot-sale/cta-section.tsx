import { Rocket } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-[#0A1628] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#0050C3] p-8 text-center shadow-[0_0_80px_rgba(0,80,195,0.4)] sm:p-12 lg:p-16">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
            <Rocket className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="mb-4 text-balance text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Es tu momento de romper records
          </h2>
          
          <p className="mx-auto max-w-2xl text-pretty text-white/80">
            El exito en Hot Sale no es producto de la suerte, es el resultado de la planificacion. Tienes las herramientas, los datos y el ecosistema. Estas a tiempo de hacer de 2026 el año en que tu marca cambie de escala.
          </p>
        </div>
      </div>
    </section>
  )
}
