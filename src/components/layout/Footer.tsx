import Image from 'next/image'
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1E3F28] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Maderas Benedetto"
              width={180}
              height={64}
              className="h-14 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Aserradero y comercializadora de madera con experiencia en la Región del Biobío.
              Calidad garantizada, atención personalizada y compromiso con el desarrollo regional.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2E5E3B] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2E5E3B] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#D4A853] mb-4">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2">
              {['Nosotros', 'Productos', 'Servicios', 'Galería', 'Cobertura', 'Contacto'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#D4A853] mb-4">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-[#D4A853] shrink-0 mt-0.5" />
                <span>Km 12 Ruta P60, Sector Pitrinco, Antihuala, Los Álamos, Biobío</span>
              </li>
              <li>
                <a
                  href="tel:+56984223285"
                  className="flex gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#D4A853] shrink-0" />
                  +56 9 8422 3285
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@maderasbenedetto.cl"
                  className="flex gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#D4A853] shrink-0" />
                  contacto@maderasbenedetto.cl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {currentYear} Maderas Benedetto. Todos los derechos reservados.</p>
          <p>
            Diseño web por{' '}
            <a
              href="https://claunet.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A853] hover:text-white transition-colors"
            >
              ClauNet
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
