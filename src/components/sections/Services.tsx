'use client'

import { motion } from 'framer-motion'
import {
  Scissors,
  ScanLine,
  PackageCheck,
  Truck,
  Warehouse,
  BrainCircuit,
} from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Corte a Medida',
    description:
      'Cortamos la madera exactamente según las dimensiones de tu proyecto, eliminando desperdicios y ahorrando tiempo en obra.',
    color: '#2E5E3B',
  },
  {
    icon: ScanLine,
    title: 'Dimensionado',
    description:
      'Procesamos la madera hasta alcanzar medidas precisas y acabados uniformes para uso estructural o decorativo.',
    color: '#7B4B24',
  },
  {
    icon: PackageCheck,
    title: 'Carga de Camiones',
    description:
      'Cargamos eficientemente grandes volúmenes de madera para transporte seguro hacia tu destino.',
    color: '#2E5E3B',
  },
  {
    icon: Truck,
    title: 'Despacho',
    description:
      'Entregamos en toda la Provincia de Arauco y zonas aledañas, coordinando el despacho según tu necesidad.',
    color: '#7B4B24',
  },
  {
    icon: Warehouse,
    title: 'Productos en Stock',
    description:
      'Mantenemos inventario permanente de los productos más demandados para entrega inmediata.',
    color: '#2E5E3B',
  },
  {
    icon: BrainCircuit,
    title: 'Asesoría Técnica',
    description:
      'Nuestro equipo orienta sobre el tipo y calidad de madera más adecuado para cada proyecto o uso.',
    color: '#7B4B24',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#1E3F28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4A853] font-display font-semibold text-sm uppercase tracking-[0.25em] mb-3">
            Lo que hacemos
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Más allá de la venta de madera, ofrecemos un conjunto de servicios para que tu
            proyecto se ejecute de forma eficiente y sin contratiempos.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#D4A853]/40 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${service.color}25` }}
              >
                <service.icon
                  className="w-7 h-7"
                  style={{ color: service.color === '#2E5E3B' ? '#5DBB7F' : '#D4A853' }}
                />
              </div>

              <h3 className="font-display font-bold text-white text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${service.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/56984223285?text=Hola%2C%20me%20gustaría%20consultar%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4A853] hover:bg-[#C49840] text-[#1E3F28] font-display font-bold px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar sobre nuestros servicios
          </a>
        </motion.div>
      </div>
    </section>
  )
}
