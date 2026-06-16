'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/maderasbenedetto.webp',
    alt: 'Maderas Benedetto — vista general',
    caption: 'Maderas Benedetto',
  },
  {
    src: '/images/maderas1.webp',
    alt: 'Aserradero Maderas Benedetto',
    caption: 'Aserradero',
  },
  {
    src: '/images/maderas2.webp',
    alt: 'Madera procesada',
    caption: 'Proceso Productivo',
  },
  {
    src: '/images/maderas3.webp',
    alt: 'Troncos y madera en patio',
    caption: 'Patio de Acopio',
  },
  {
    src: '/images/maderas4.webp',
    alt: 'Madera dimensionada',
    caption: 'Madera Dimensionada',
  },
  {
    src: '/images/maderas5.webp',
    alt: 'Producción de madera',
    caption: 'Producción',
  },
  {
    src: '/images/maderas6.webp',
    alt: 'Maquinaria del aserradero',
    caption: 'Maquinaria',
  },
  {
    src: '/images/maderas7.webp',
    alt: 'Carga y despacho de madera',
    caption: 'Despacho',
  },
  {
    src: '/images/maderas8.webp',
    alt: 'Productos terminados',
    caption: 'Productos Terminados',
  },
  {
    src: '/images/maderas9.webp',
    alt: 'Troncos de pino',
    caption: 'Troncos',
  },
  {
    src: '/images/maderas10.webp',
    alt: 'Instalaciones del aserradero',
    caption: 'Instalaciones',
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((i) => (i! - 1 + galleryImages.length) % galleryImages.length)
  const next = () => setLightbox((i) => (i! + 1) % galleryImages.length)

  return (
    <section id="galeria" className="py-24 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#7B4B24] font-display font-semibold text-sm uppercase tracking-[0.25em] mb-3">
            Instalaciones y Trabajo
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E3F28] mb-6">
            Galería
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Una mirada al interior de Maderas Benedetto: nuestra planta, procesos y productos.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="masonry-item group relative cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              onClick={() => setLightbox(i)}
            >
              <div className="relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={i % 3 === 0 ? 350 : 250}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#1E3F28]/0 group-hover:bg-[#1E3F28]/50 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-display font-semibold">{img.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center lightbox-backdrop bg-black/85"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
              onClick={() => setLightbox(null)}
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white/70 text-sm text-center mt-3 font-display">
                {galleryImages[lightbox].caption}
              </p>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-display">
              {lightbox + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
