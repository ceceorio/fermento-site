"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 'disritmia',
    slug: 'disritmia-fotografia-e-poesia',
    title: 'Disritmia, Fotografia e Poesia',
    color: 'bg-zinc-800',
    video: '/disritmia_video.mp4'
  },
  {
    id: 'efemera',
    slug: 'a-efemera-beleza-das-flores',
    title: 'A Efêmera Beleza das Flores',
    color: 'bg-emerald-900',
    video: '/efemeravideo.mp4'
  },
  {
    id: 'queercode',
    slug: 'queercode',
    title: 'Queer Code Festival',
    color: 'bg-purple-900'
  },
  {
    id: 'arraia',
    slug: 'arraia-doce-mel-show',
    title: 'Arraiá Doce Mel Show',
    color: 'bg-amber-900'
  }
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full overflow-hidden bg-fermento-black border-y border-fermento-border" ref={emblaRef}>
      <div className="flex touch-pan-y">
        {projects.map((project) => (
          <div key={project.id} className="relative min-w-full flex-[0_0_100%]">
            <Link href={`/projetos/${project.slug}`} className="block relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden group">
              {/* Background Color or Video */}
              <div className={`absolute inset-0 ${project.color} overflow-hidden transition-transform duration-700 group-hover:scale-105`}>
                
                {project.video && (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                )}

                <div className="absolute inset-0 bg-black/40 z-10" />
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight text-center px-4 drop-shadow-xl max-w-5xl">
                    {project.title}
                  </h2>
                  <div className="mt-8 text-fermento-yellow border border-fermento-yellow px-8 py-3 rounded-full text-sm font-medium group-hover:bg-fermento-yellow group-hover:text-fermento-black transition-colors shadow-lg backdrop-blur-sm group-hover:backdrop-blur-none">
                    Conhecer o projeto
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-sm border border-white/10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-sm border border-white/10"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === selectedIndex ? "bg-fermento-yellow w-8" : "bg-white/50 hover:bg-white w-2"
            }`}
            aria-label={`Ir para o slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
