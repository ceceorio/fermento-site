import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

interface PublicationCardProps {
  slug: string
  title: string
  summary: string
  category: string
  tags: string[]
  coverImage?: string
}

import Image from "next/image"

export function PublicationCard({ slug, title, summary, category, tags, coverImage }: PublicationCardProps) {
  return (
    <Link 
      href={`/publicacoes/${slug}`}
      className="group flex flex-col justify-between overflow-hidden rounded-lg bg-fermento-graphite border border-fermento-border p-6 transition-all hover:border-fermento-yellow/50 hover:bg-fermento-charcoal min-h-[280px]"
    >
      {coverImage && (
        <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded border border-fermento-border/50">
          <Image 
            src={coverImage} 
            alt={`Capa de ${title}`} 
            fill 
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-fermento-yellow text-xs font-medium uppercase tracking-wider">
          <BookOpen size={14} />
          {category}
        </div>
        
        <h3 className="font-serif text-xl font-medium text-fermento-white group-hover:text-fermento-yellow transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-fermento-gray line-clamp-3">
          {summary}
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center rounded-sm bg-fermento-black px-2 py-0.5 text-[10px] font-medium text-fermento-gray border border-fermento-border uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center text-sm font-medium text-fermento-yellow">
          Ler publicação
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
