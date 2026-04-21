import { Cloud } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#1E3A5F] bg-[#0A1628] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0050C3] shadow-[0_0_15px_rgba(0,80,195,0.3)]">
              <Cloud className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">Tiendanube</span>
              <span className="text-xs font-medium text-[#0050C3]">Evolucion</span>
            </div>
          </div>
          
          <p className="text-center text-sm text-[#6B7F99]">
            Hot Sale Argentina 2026. Guía exclusiva Tiendanube Evolución.
          </p>
          
          <a 
            href="https://www.tiendanube.com/evolucion" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#0050C3] hover:underline"
          >
            tiendanube.com/evolucion
          </a>
        </div>
      </div>
    </footer>
  )
}
