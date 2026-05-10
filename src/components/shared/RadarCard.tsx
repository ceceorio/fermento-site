import { ArrowRight, Calendar, Clock } from "lucide-react"
import { RadarItem } from "@/content/radar"

export function RadarCard({ title, category, status, summary, publishDate, deadline, externalLink }: RadarItem) {
  // Determine status styling
  const statusStyles: Record<string, string> = {
    "Aberto": "text-green-400 bg-green-400/10 border-green-400/20",
    "Em andamento": "text-fermento-yellow bg-fermento-yellow/10 border-fermento-yellow/20",
    "Encerrado": "text-red-400 bg-red-400/10 border-red-400/20",
    "Informativo": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  };

  const currentStatusStyle = statusStyles[status] || "text-fermento-gray bg-fermento-charcoal border-fermento-border";

  return (
    <a 
      href={externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between overflow-hidden rounded-lg bg-fermento-graphite border border-fermento-border p-6 transition-all hover:border-fermento-yellow/50 hover:bg-fermento-charcoal min-h-[320px]"
    >
      <div className="space-y-4">
        {/* Header Tags */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <span className="inline-flex items-center rounded-sm bg-fermento-charcoal px-2.5 py-0.5 text-xs font-medium text-fermento-white border border-fermento-border uppercase tracking-widest">
            {category}
          </span>
          <span className={`inline-flex items-center rounded-sm px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest border ${currentStatusStyle}`}>
            {status}
          </span>
        </div>
        
        {/* Dates */}
        <div className="flex flex-col gap-1.5 text-xs text-fermento-gray/80 font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Publicado em: {publishDate}</span>
          </div>
          {deadline && (
            <div className="flex items-center gap-1.5 text-fermento-yellow/90">
              <Clock className="w-3.5 h-3.5" />
              <span>{deadline}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3 pt-2">
          <h3 className="font-serif text-2xl font-medium text-fermento-white group-hover:text-fermento-yellow transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-sm text-fermento-gray leading-relaxed">
            {summary}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-fermento-border/50 pt-4">
        <span className="text-sm font-medium text-fermento-yellow">
          Saiba mais
        </span>
        <div className="w-8 h-8 rounded-full bg-fermento-charcoal flex items-center justify-center border border-fermento-border group-hover:bg-fermento-yellow group-hover:border-fermento-yellow transition-colors">
          <ArrowRight className="h-4 w-4 text-fermento-gray group-hover:text-fermento-black group-hover:-rotate-45 transition-all" />
        </div>
      </div>
    </a>
  )
}
