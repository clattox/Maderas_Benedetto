'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    name: 'Madera Dimensionada',
    description: 'Madera aserrada y clasificada con medidas estándar para construcción y obras civiles.',
    sizes: '1" × 2" / 1" × 4" / 2" × 4" / 2" × 6"',
    image: '/images/maderas2.jpg',
    alt: 'Madera dimensionada apilada',
  },
  {
    name: 'Tablas',
    description: 'Tablas de pino para revestimientos, entablados, cielorasos y múltiples usos.',
    sizes: '1" × 6" / 1" × 8" / 1" × 10" / 1" × 12"',
    image: '/images/maderas3.jpg',
    alt: 'Tablas de madera',
  },
  {
    name: 'Vigas',
    description: 'Vigas estructurales para techumbre, pisos y estructuras de alta resistencia.',
    sizes: '3" × 6" / 4" × 6" / 4" × 8" / 6" × 8"',
    image: '/images/maderas4.jpg',
    alt: 'Vigas de madera estructural',
  },
  {
    name: 'Cuartones',
    description: 'Piezas cuadradas para estructura liviana, cercos, pérgolas y proyectos diversos.',
    sizes: '2" × 2" / 3" × 3" / 4" × 4"',
    image: '/images/maderas5.jpg',
    alt: 'Cuartones de madera',
  },
  {
    name: 'Polines',
    description: 'Polines tratados para pisos industriales, bodegas, ferroviarios y estructuras pesadas.',
    sizes: '4" × 6" / 6" × 6" / 6" × 8" / según pedido',
    image: '/images/maderas6.jpg',
    alt: 'Polines de madera',
  },
  {
    name: 'Postes',
    description: 'Postes impregnados para cercos, viñedos, tendido eléctrico y construcción rural.',
    sizes: 'Largo 2,5 m / 3 m / 3,5 m / 4 m',
    image: '/images/maderas7.jpg',
    alt: 'Postes de madera para cerco',
  },
  {
    name: 'Madera a Medida',
    description: 'Corte personalizado según planos y especificaciones del proyecto del cliente.',
    sizes: 'Cualquier medida a pedido',
    image: '/images/maderas10.jpg',
    alt: 'Madera cortada a medida',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function Products() {
  const handleCotizar = (productName: string) => {
    const msg = encodeURIComponent(
      `Hola Maderas Benedetto, me gustaría solicitar una cotización para: ${productName}`
    )
    window.open(`https://wa.me/56984223285?text=${msg}`, '_blank')
  }

  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#7B4B24] font-display font-semibold text-sm uppercase tracking-[0.25em] mb-3">
            Catálogo
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E3F28] mb-6">
            Nuestros Productos
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ofrecemos una amplia variedad de productos de madera para construcción, agricultura
            e industria, con posibilidad de corte a medida.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-white border border-[#E8DDD0] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3F28]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-[#1E3F28] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Sizes badge */}
                <div className="bg-[#F5EFE6] rounded-lg px-3 py-2 mb-5">
                  <p className="text-xs font-display font-semibold text-[#7B4B24] uppercase tracking-wide">
                    Medidas disponibles
                  </p>
                  <p className="text-sm text-gray-600 mt-0.5">{product.sizes}</p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleCotizar(product.name)}
                  className="w-full flex items-center justify-center gap-2 bg-[#2E5E3B] hover:bg-[#3D7A4F] text-white font-display font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
                >
                  Cotizar este producto
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 mb-4">¿No encuentras lo que buscas?</p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 border-2 border-[#2E5E3B] text-[#2E5E3B] hover:bg-[#2E5E3B] hover:text-white font-display font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            Consultar por otro producto
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
