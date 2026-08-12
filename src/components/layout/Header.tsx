import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-fermento-border bg-fermento-black/80 backdrop-blur">
      <div className="container mx-auto flex h-24 md:h-28 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div 
            className="relative h-20 w-[260px] md:h-24 md:w-[380px] transition-opacity hover:opacity-80 bg-fermento-yellow"
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
          <Link href="/projetos-em-captacao" className="text-fermento-yellow hover:text-fermento-white transition-colors">
            Em Captação
          </Link>
          <Link href="/leis-de-incentivo" className="text-fermento-gray hover:text-fermento-yellow transition-colors">
            Leis de Incentivo
          </Link>
          <Link href="/publicacoes" className="text-fermento-gray hover:text-fermento-yellow transition-colors">
            Publicações
          </Link>
          <Link href="/radar" className="text-fermento-gray hover:text-fermento-yellow transition-colors">
            Radar Fermento
          </Link>
          <div className="relative group">
            <Link href="/clientes-e-parceiros" className="text-fermento-gray group-hover:text-fermento-yellow transition-colors">
              Clientes
            </Link>
            <div className="absolute right-0 top-full pt-3 hidden group-hover:block z-50">
              <div className="bg-fermento-charcoal border border-fermento-border rounded-lg py-2 min-w-[280px] shadow-2xl">
                <Link href="/projetos/casa-amarela-providencia" className="block px-5 py-2.5 text-fermento-gray hover:text-fermento-yellow hover:bg-fermento-black/40 transition-colors">
                  Casa Amarela Providência
                </Link>
                <Link href="/projetos/can-art-change-the-world-brasil" className="block px-5 py-2.5 text-fermento-gray hover:text-fermento-yellow hover:bg-fermento-black/40 transition-colors">
                  Can Art Change the World – Brasil
                </Link>
                <Link href="/projetos/instituto-terra-nova" className="block px-5 py-2.5 text-fermento-gray hover:text-fermento-yellow hover:bg-fermento-black/40 transition-colors">
                  Instituto Terra Nova
                </Link>
                <div className="my-2 h-px bg-fermento-border" />
                <Link href="/clientes-e-parceiros" className="block px-5 py-2.5 text-sm text-fermento-yellow hover:bg-fermento-black/40 transition-colors">
                  Todos os clientes e parceiros
                </Link>
              </div>
            </div>
          </div>
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
