import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import MenuPreview from '@/components/MenuPreview'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'

/**
 * Main Landing Page for Kapruwan Hotel
 * Integrates all sections into a cohesive, responsive layout
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar - Sticky */}
      <Navbar />

      {/* Hero Section - Full viewport height */}
      <Hero />

      {/* Highlights/Features Section */}
      <Highlights />

      {/* Popular Menu Items Preview */}
      <MenuPreview />

      {/* Contact & Information Board (Critical Section) */}
      <ContactInfo />

      {/* Footer */}
      <Footer />
    </main>
  )
}

