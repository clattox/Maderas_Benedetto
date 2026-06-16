'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/maderasbenedetto.webp"
          alt="Vista del aserradero Maderas Benedetto, Los Álamos, Biobío"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark forest overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Spinning ring — the signature element */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-dashed border-[#D4A853]/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <Image
              src="/images/logo.png"
              alt="Maderas Benedetto"
              width={220}
              height={220}
              className="h-36 w-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#D4A853] font-display font-semibold text-sm sm:text-base uppercase tracking-[0.25em] mb-4"
        >
          Aserradero &amp; Comercializadora — Provincia de Arauco
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance mb-6"
        >
          Calidad y experiencia
          <br />
          <span className="text-[#D4A853]">en productos de madera</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Maderas Benedetto ofrece soluciones en madera para construcción,
          agricultura e industria en la Región del Biobío.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToContact}
            className="bg-[#2E5E3B] hover:bg-[#3D7A4F] text-white font-display font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Solicitar Cotización
          </button>
          <a
            href="https://wa.me/56984223285?text=Hola%2C%20me%20gustaría%20consultar%20sobre%20sus%20productos%20de%20madera."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-display font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactar por WhatsApp
          </a>
        </motion.div>

        {/* Phone highlight */}
        <motion.a
          href="tel:+56984223285"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.7 }}
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
        >
          <Phone className="w-4 h-4" />
          <span className="font-display font-semibold tracking-wide">+56 9 8422 3285</span>
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1"
        aria-label="Desplazarse hacia abajo"
      >
        <span className="text-xs font-display uppercase tracking-widest">Conocer más</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  )
}
