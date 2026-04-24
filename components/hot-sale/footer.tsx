import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-[#1E3A5F] bg-[#0A1628] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Image
            src="/logo-tiendanube-evolucion/logo.png"
            alt="Tiendanube"
            width={200}
            height={34}
          />
          
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
