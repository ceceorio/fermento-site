import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  slug: string
  title: string
  summary: string
  area: string
  status?: string
  coverImage?: string
}

export function ProjectCard({ slug, title, summary, area, status, coverImage }: ProjectCardProps) {
  return (
    <Link 
      href={`/projetos/${slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-fermento-graphite border border-fermento-border transition-all hover:border-fermento-yellow/50 hover:bg-fermento-charcoal min-h-[280px]"
    >
      {coverImage && (
        <div className="relative w-full h-48 border-b border-fermento-border overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
          <Image
            src={coverImage}
            alt={`Capa do projeto ${title}`}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      <div className="flex flex-col justify-between flex-1 p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <span className="inline-flex items-center rounded-sm bg-fermento-charcoal px-2.5 py-0.5 text-xs font-medium text-fermento-gray border border-fermento-border">
              {area}
            </span>
            {status && (
              <span className="inline-flex items-center text-xs font-medium text-fermento-yellow whitespace-nowrap">
                {status}
              </span>
            )}
          </div>
          
          <h3 className="font-serif text-2xl font-medium text-fermento-white group-hover:text-fermento-yellow transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-fermento-gray line-clamp-3">
            {summary}
          </p>
        </div>

        <div className="mt-6 flex items-center text-sm font-medium text-fermento-yellow">
          Ver projeto
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
