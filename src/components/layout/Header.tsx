import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-fermento-border bg-fermento-black/80 backdrop-blur">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div 
            className="relative h-16 w-[240px] md:h-20 md:w-[340px] transition-opacity hover:opacity-80 bg-fermento-yellow"
            style={{ 
              WebkitMaskImage: 'url(/logo_fermento_new.png)', 
              WebkitMaskSize: 'contain', 
              WebkitMaskRepeat: 'no-repeat', 
              WebkitMaskPosition: 'left center',
              maskImage: 'url(/logo_fermento_new.png)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'left center'
            }}
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/sobre" className="text-fermento-gray hover:text-fermento-yellow transition-colors">
            Sobre a Fermento
          </Link>
          <Link href="/areas" className="text-fermento-gray hover:text-fermento-yellow transition-colors">
            Áreas de Atuação
          </Link>
          <Link href="/projetos" className="text-fermento-gray hover:text-fermento-yellow transition-colors">
            Projetos
          </Link>
          <Link href="/publicacoes" className="text-fermento-gray hover:text-fermento-yellow transition-colors">
            Publicações
          </Link>
          <Link href="/radar" className="text-fermento-gray hover:text-fermento-yellow transition-colors">
            Radar Fermento
          </Link>
          <Link href="/clientes-e-parceiros" className="text-fermento-gray hover:text-fermento-yellow transition-colors">
            Clientes
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/contato">Contato</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
