import { Bot, Video, Users, Search } from "lucide-react"

const trends = [
  {
    icon: Bot,
    title: "IA como Asistente",
    description: "Busqueda conversacional y chatbots 24/7. Las marcas escalan el soporte sin perder personalizacion."
  },
  {
    icon: Video,
    title: "Live Commerce",
    description: "Transmisiones en vivo sin edicion. Mostrar el producto real genera confianza instantanea y acelera el checkout."
  },
  {
    icon: Users,
    title: "Video UGC",
    description: "El 70% de la Gen Z confia mas en resenas en video de personas reales que en producciones de estudio."
  },
  {
    icon: Search,
    title: "Posicionamiento AEO",
    description: "El consumidor delega en agentes de IA. Si tu marca no es la respuesta directa, quedas fuera del top 3."
  }
]

export function TrendsSection() {
  return (
    <section id="trends" className="bg-[#12203A] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Radar de Tendencias 2026
          </h2>
          <p className="mx-auto max-w-2xl text-[#B8C9E0]">
            Las tendencias clave que definen el comportamiento del consumidor este año.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trends.map((trend) => (
            <div 
              key={trend.title}
              className="group rounded-2xl border border-[#1E3A5F] bg-[#0A1628] p-6 shadow-[0_0_30px_rgba(0,80,195,0.08)] transition-all hover:border-[#0050C3]/50 hover:shadow-[0_0_40px_rgba(0,80,195,0.15)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0050C3]/10 transition-colors group-hover:bg-[#0050C3]/20">
                <trend.icon className="h-6 w-6 text-[#0050C3]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{trend.title}</h3>
              <p className="text-sm leading-relaxed text-[#6B7F99]">{trend.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
