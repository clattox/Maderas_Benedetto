import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Products from '@/components/sections/Products'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Coverage from '@/components/sections/Coverage'
import Contact from '@/components/sections/Contact'
import WoodDivider from '@/components/ui/WoodDivider'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WoodDivider />
        <About />
        <WoodDivider />
        <Products />
        <WoodDivider />
        <Services />
        <WoodDivider />
        <Gallery />
        <WoodDivider />
        <Coverage />
        <WoodDivider />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
