import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t border-fermento-border bg-fermento-black py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <div className="relative h-12 w-56 opacity-80 hover:opacity-100 transition-opacity">
                <Image 
                  src="/logo_fermento_new.png" 
                  alt="Fermento Cultural" 
                  fill
                  className="object-contain object-left brightness-0 invert" 
                />
              </div>
            </Link>
            <p className="text-sm text-fermento-gray text-balance max-w-xs">
              Plataforma de gestão sociocultural, inteligência cultural, tecnologia e impacto territorial.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-fermento-white">Institucional</h4>
            <ul className="space-y-2 text-sm text-fermento-gray">
              <li><Link href="/sobre" className="hover:text-fermento-yellow transition-colors">Sobre a Fermento</Link></li>
              <li><Link href="/areas" className="hover:text-fermento-yellow transition-colors">Áreas de Atuação</Link></li>
              <li><Link href="/projetos" className="hover:text-fermento-yellow transition-colors">Projetos</Link></li>
              <li><Link href="/clientes-e-parceiros" className="hover:text-fermento-yellow transition-colors">Clientes e Parceiros</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-fermento-white">Inteligência</h4>
            <ul className="space-y-2 text-sm text-fermento-gray">
              <li><Link href="/publicacoes" className="hover:text-fermento-yellow transition-colors">Publicações</Link></li>
              <li><Link href="/radar" className="hover:text-fermento-yellow transition-colors">Radar Fermento</Link></li>
              <li><Link href="/sistema-fermento" className="hover:text-fermento-yellow transition-colors">Plataforma Fermento</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-fermento-white">Contato</h4>
            <ul className="space-y-2 text-sm text-fermento-gray">
              <li>contato@fermentocultural.com.br</li>
              <li><Link href="/contato" className="text-fermento-yellow hover:underline">Fale conosco</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-fermento-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-fermento-gray">
          <p>© {new Date().getFullYear()} Fermento Cultural. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-fermento-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-fermento-white transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
