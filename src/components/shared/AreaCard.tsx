import Link from "next/link"
import * as LucideIcons from "lucide-react"

interface AreaCardProps {
  slug: string
  title: string
  shortDescription: string
  icon: string
}

export function AreaCard({ slug, title, shortDescription, icon }: AreaCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as any)[icon.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')] || LucideIcons.Circle

  return (
    <Link 
      href={`/areas/${slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-lg bg-fermento-graphite border border-fermento-border p-6 transition-all hover:border-fermento-yellow/50 hover:bg-fermento-charcoal min-h-[240px]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-fermento-yellow/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-fermento-black border border-fermento-border mb-6 group-hover:border-fermento-yellow transition-colors text-fermento-yellow">
        <Icon size={24} />
      </div>
      
      <div className="relative z-10 space-y-3">
        <h3 className="font-serif text-xl font-medium text-fermento-white group-hover:text-fermento-yellow transition-colors">
          {title}
        </h3>
        <p className="text-sm text-fermento-gray line-clamp-3">
          {shortDescription}
        </p>
      </div>
    </Link>
  )
}
