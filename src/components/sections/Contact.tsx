'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'

interface FormData {
  nombre: string
  empresa: string
  telefono: string
  correo: string
  mensaje: string
}

const initialForm: FormData = {
  nombre: '',
  empresa: '',
  telefono: '',
  correo: '',
  mensaje: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()

    if (!form.nombre || !form.telefono || !form.mensaje) {
      setError('Por favor completa los campos obligatorios: nombre, teléfono y mensaje.')
      return
    }

    setError('')
    setSubmitting(true)

    // Compose WhatsApp message as fallback (replace with real form submission if needed)
    const msg = encodeURIComponent(
      `*Nueva consulta desde maderasbenedetto.cl*\n\n` +
        `Nombre: ${form.nombre}\n` +
        `Empresa: ${form.empresa || 'N/A'}\n` +
        `Teléfono: ${form.telefono}\n` +
        `Correo: ${form.correo || 'N/A'}\n\n` +
        `Mensaje:\n${form.mensaje}`
    )

    // Simulate async
    await new Promise((r) => setTimeout(r, 800))
    setSubmitting(false)
    setSubmitted(true)

    // Open WhatsApp with the message
    window.open(`https://wa.me/56984223285?text=${msg}`, '_blank')

    // Reset after 4s
    setTimeout(() => {
      setSubmitted(false)
      setForm(initialForm)
    }, 4000)
  }

  return (
    <section id="contacto" className="py-24 bg-[#F5EFE6]">
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
            Hablemos
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E3F28] mb-6">
            Contacto
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Completa el formulario o escríbenos directamente. Respondemos a la brevedad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info card */}
            <div className="bg-[#1E3F28] text-white rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl mb-6">Información de contacto</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#D4A853]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-white/80 uppercase tracking-wide mb-1">
                      Dirección
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Km 12, Ruta P60, Sector Pitrinco, Antihuala, Los Álamos, Biobío
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#D4A853]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-white/80 uppercase tracking-wide mb-1">
                      Teléfono
                    </p>
                    <a
                      href="tel:+56984223285"
                      className="text-white hover:text-[#D4A853] transition-colors text-sm font-semibold"
                    >
                      +56 9 8422 3285
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#D4A853]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-white/80 uppercase tracking-wide mb-1">
                      Correo
                    </p>
                    <a
                      href="mailto:contacto@maderasbenedetto.cl"
                      className="text-white hover:text-[#D4A853] transition-colors text-sm"
                    >
                      contacto@maderasbenedetto.cl
                    </a>
                  </div>
                </li>
              </ul>

              {/* WhatsApp direct */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm mb-3">También puedes escribirnos directo por:</p>
                <a
                  href="https://wa.me/56984223285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-display font-bold px-5 py-3 rounded-xl text-sm transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-5 h-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border border-[#E8DDD0] rounded-2xl p-6">
              <h4 className="font-display font-bold text-[#1E3F28] mb-4">Horario de atención</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Lunes – Viernes</span>
                  <span className="font-semibold text-[#2E5E3B]">08:00 – 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-semibold text-[#2E5E3B]">08:00 – 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-semibold text-gray-400">Cerrado</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8DDD0]">
              <h3 className="font-display font-bold text-xl text-[#1E3F28] mb-6">
                Enviar consulta o cotización
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="w-16 h-16 text-[#2E5E3B] mb-4" />
                  <h4 className="font-display font-bold text-xl text-[#1E3F28] mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-gray-500">
                    Nos pondremos en contacto contigo a la brevedad. También se abrió WhatsApp para atención inmediata.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Nombre */}
                    <div>
                      <label className="block text-sm font-display font-semibold text-gray-700 mb-1.5">
                        Nombre <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E5E3B] focus:ring-2 focus:ring-[#2E5E3B]/20 transition-all"
                      />
                    </div>
                    {/* Empresa */}
                    <div>
                      <label className="block text-sm font-display font-semibold text-gray-700 mb-1.5">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa (opcional)"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E5E3B] focus:ring-2 focus:ring-[#2E5E3B]/20 transition-all"
                      />
                    </div>
                    {/* Teléfono */}
                    <div>
                      <label className="block text-sm font-display font-semibold text-gray-700 mb-1.5">
                        Teléfono <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+56 9 xxxx xxxx"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E5E3B] focus:ring-2 focus:ring-[#2E5E3B]/20 transition-all"
                      />
                    </div>
                    {/* Correo */}
                    <div>
                      <label className="block text-sm font-display font-semibold text-gray-700 mb-1.5">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        name="correo"
                        value={form.correo}
                        onChange={handleChange}
                        placeholder="tu@correo.cl"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E5E3B] focus:ring-2 focus:ring-[#2E5E3B]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sm font-display font-semibold text-gray-700 mb-1.5">
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe tu consulta o detalla los productos y cantidades que necesitas..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E5E3B] focus:ring-2 focus:ring-[#2E5E3B]/20 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 bg-[#2E5E3B] hover:bg-[#3D7A4F] disabled:opacity-60 text-white font-display font-bold py-4 px-8 rounded-xl transition-colors text-base"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar consulta
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    Al enviar, se abrirá WhatsApp con tu mensaje para respuesta inmediata.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
