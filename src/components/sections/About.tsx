'use client'

import { motion } from 'framer-motion'
import { Award, Users, Truck, MapPin, TreePine, BadgeCheck, Handshake, Factory, Sprout } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Image from 'next/image'

const stats = [
  {
    icon: Award,
    value: 30,
    suffix: '+',
    label: 'Años de experiencia',
    color: '#2E5E3B',
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Clientes atendidos',
    color: '#7B4B24',
  },
  {
    icon: Truck,
    value: 15000,
    suffix: '+',
    label: 'm³ procesados',
    color: '#2E5E3B',
  },
  {
    icon: MapPin,
    value: 6,
    suffix: '',
    label: 'Comunas con cobertura',
    color: '#7B4B24',
  },
]

const highlights = [
  {
    icon: TreePine,
    title: 'Experiencia en el rubro',
    description: 'Décadas de trabajo en la industria forestal del sur de Chile nos avalan.',
    color: '#2E5E3B',
  },
  {
    icon: BadgeCheck,
    title: 'Calidad garantizada',
    description: 'Madera seleccionada y procesada bajo estándares exigentes de calidad.',
    color: '#7B4B24',
  },
  {
    icon: Handshake,
    title: 'Atención personalizada',
    description: 'Asesoramos a cada cliente según su proyecto y necesidades específicas.',
    color: '#2E5E3B',
  },
  {
    icon: Factory,
    title: 'Producción local',
    description: 'Procesamos nuestra propia madera en el corazón de la Provincia de Arauco.',
    color: '#7B4B24',
  },
  {
    icon: Sprout,
    title: 'Compromiso regional',
    description: 'Impulsamos el desarrollo económico y laboral de nuestra comunidad.',
    color: '#2E5E3B',
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-[#F5EFE6]">
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
            Quiénes somos
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E3F28] mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            En Maderas Benedetto contamos con años de experiencia en la producción y
            comercialización de madera, entregando productos de calidad y un servicio confiable
            a nuestros clientes en toda la Región del Biobío.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#E8DDD0] hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-[#1E3F28] mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/maderas1.webp"
                alt="Aserradero Maderas Benedetto"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3F28]/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 bg-[#D4A853] text-[#1E3F28] rounded-2xl p-5 shadow-xl">
              <p className="font-display font-black text-3xl leading-none">30+</p>
              <p className="font-display font-semibold text-xs uppercase tracking-wide mt-1">
                Años de trayectoria
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="flex flex-col gap-5 pt-6 lg:pt-0">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-[#E8DDD0] hover:border-[#2E5E3B]/30 hover:shadow-md transition-all"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#1E3F28] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
