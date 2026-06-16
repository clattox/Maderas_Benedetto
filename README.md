# Maderas Benedetto — Sitio Web Corporativo

Sitio web premium para **Maderas Benedetto**, aserradero y comercializadora de madera ubicado en el Km 12, Ruta P60, Sector Pitrinco, Antihuala, Los Álamos, Provincia de Arauco, Región del Biobío, Chile.

## Stack

- **Next.js 15** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React**
- **TypeScript**

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # Root layout con SEO, fuentes y metadata
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales y utilitarios
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navbar fija responsiva con menú móvil
│   │   └── Footer.tsx      # Footer con links, redes y datos de contacto
│   ├── sections/
│   │   ├── Hero.tsx        # Hero fullscreen con logo, anillo animado y CTAs
│   │   ├── About.tsx       # Sobre nosotros con stats animados
│   │   ├── Products.tsx    # Catálogo de 9 productos con tarjetas
│   │   ├── Services.tsx    # 6 servicios con iconos (fondo verde oscuro)
│   │   ├── Gallery.tsx     # Galería masonry con lightbox
│   │   ├── Coverage.tsx    # Cobertura regional con mapa embebido
│   │   └── Contact.tsx     # Formulario + datos de contacto + horario
│   └── ui/
│       ├── WhatsAppFloat.tsx    # Botón flotante de WhatsApp
│       ├── WoodDivider.tsx      # Separador textura de madera
│       └── AnimatedCounter.tsx  # Contador animado con IntersectionObserver
└── hooks/
    └── useInView.ts        # Hook scroll-triggered animations
```

## Paleta de colores

| Nombre        | Hex       | Uso                              |
|--------------|-----------|----------------------------------|
| Forest        | `#2E5E3B` | Color principal (verde bosque)   |
| Forest Dark   | `#1E3F28` | Secciones oscuras, texto títulos |
| Wood          | `#7B4B24` | Acento madera, etiquetas         |
| Gold          | `#D4A853` | Acentos dorados (del logo)       |
| Beige         | `#F5EFE6` | Fondos alternos                  |
| White         | `#FFFFFF` | Fondo principal                  |

## Instalación

```bash
npm install
npm run dev
```

## Producción (Vercel)

```bash
npm run build
```

Deploy via GitHub → Vercel (auto-deploy en push a `main`).

## Logo

Coloca el logo en: `public/images/logo_benedetto.png`

El logo se usa en:
- Navbar (coloreado normal + invertido en footer oscuro)
- Hero (con anillo animado giratorio como firma visual)

## Imágenes

Por defecto se usan imágenes de **Unsplash** (bosques, madera, aserradero) configuradas en `next.config.ts`. Para producción, reemplaza por imágenes reales del aserradero.

## SEO

- Metadata completa en `layout.tsx`
- Keywords optimizadas para búsquedas locales
- OpenGraph tags
- `canonical` configurado (actualizar al dominio final)

## Funcionalidades

- ✅ Navbar fija con scroll y menú hamburguesa
- ✅ Hero con logo, anillo giratorio y CTAs a WhatsApp
- ✅ Estadísticas animadas con IntersectionObserver
- ✅ Galería masonry con lightbox y navegación
- ✅ Botón flotante WhatsApp con animación pulse
- ✅ Formulario que abre WhatsApp con el mensaje compuesto
- ✅ Mapa de Google Maps embebido
- ✅ Separadores de textura madera entre secciones
- ✅ Totalmente responsivo (mobile-first)
- ✅ Animaciones Framer Motion con `whileInView`
- ✅ Contadores animados (`AnimatedCounter`)
- ✅ Footer con links y datos de contacto

## Créditos

Diseño y desarrollo: [ClauNet](https://claunet.cl)
