'use client'

import { motion } from 'framer-motion'
import { MapPin, Truck } from 'lucide-react'

const coverageZones = [
  { name: 'Los Álamos', note: 'Sede principal' },
  { name: 'Cañete', note: 'Despacho regular' },
  { name: 'Lebu', note: 'Despacho regular' },
  { name: 'Arauco', note: 'Despacho regular' },
  { name: 'Curanilahue', note: 'Despacho programado' },
  { name: 'Contulmo', note: 'Despacho programado' },
]

export default function Coverage() {
  return (
    <section id="cobertura" className="py-24 bg-white">
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
            Área de servicio
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E3F28] mb-6">
            Cobertura Regional
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Despachamos productos de madera a toda la{' '}
            <strong className="text-[#2E5E3B]">Provincia de Arauco</strong> y zonas cercanas
            de la Región del Biobío.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Coverage zones */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="bg-[#F5EFE6] rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#2E5E3B] rounded-xl flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-[#1E3F28] text-lg">
                  Zonas de despacho
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {coverageZones.map((zone, i) => (
                  <motion.li
                    key={zone.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-center justify-between py-2.5 border-b border-[#E8DDD0] last:border-0"
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#2E5E3B] shrink-0" />
                      <span className="font-display font-semibold text-gray-700 text-sm">
                        {zone.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{zone.note}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-[#2E5E3B] text-white rounded-2xl p-6">
              <h4 className="font-display font-bold text-lg mb-2">¿Estás fuera de la lista?</h4>
              <p className="text-white/75 text-sm mb-4 leading-relaxed">
                Consúltanos igual. Evaluamos despachos a zonas adicionales según volumen y logística.
              </p>
              <a
                href="https://wa.me/56984223285?text=Hola%2C%20me%20gustaría%20consultar%20si%20hacen%20despacho%20a%20mi%20zona."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4A853] hover:bg-[#C49840] text-[#1E3F28] font-display font-bold px-5 py-3 rounded-xl text-sm transition-colors"
              >
                Consultar por mi zona
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8DDD0]" style={{ height: 480 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47558.97765482!2d-73.49!3d-37.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c2f0000000%3A0x1!2sLos%20%C3%81lamos%2C%20Biob%C3%ADo!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Maderas Benedetto - Km 12 Ruta P60, Los Álamos, Biobío"
              />
            </div>
            {/* Address below map */}
            <div className="mt-4 flex items-start gap-3 bg-[#F5EFE6] rounded-xl p-4">
              <MapPin className="w-5 h-5 text-[#2E5E3B] mt-0.5 shrink-0" />
              <div>
                <p className="font-display font-bold text-[#1E3F28] text-sm">
                  Maderas Benedetto — Planta Principal
                </p>
                <p className="text-gray-500 text-sm">
                  Kilómetro 12, Ruta P60, Sector Pitrinco, Antihuala, Comuna de Los Álamos, Región del Biobío, Chile
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
