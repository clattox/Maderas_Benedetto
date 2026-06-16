'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image
              src="/images/logo.png"
              alt="Maderas Benedetto"
              width={160}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-display font-600 text-sm tracking-wide transition-colors hover:text-[#2E5E3B] ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+56984223285"
              className={`flex items-center gap-2 text-sm font-display font-semibold transition-colors ${
                scrolled ? 'text-[#7B4B24]' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              +56 9 8422 3285
            </a>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contacto') }}
              className="bg-[#2E5E3B] text-white px-5 py-2.5 rounded-full text-sm font-display font-semibold hover:bg-[#3D7A4F] transition-colors"
            >
              Cotizar
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-display font-semibold text-gray-700 hover:text-[#2E5E3B] transition-colors py-2 border-b border-gray-100 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="tel:+56984223285"
                  className="flex items-center gap-2 text-[#7B4B24] font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  +56 9 8422 3285
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contacto') }}
                  className="bg-[#2E5E3B] text-white text-center px-5 py-3 rounded-full font-display font-semibold hover:bg-[#3D7A4F] transition-colors"
                >
                  Solicitar Cotización
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
