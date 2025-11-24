'use client'

import { motion } from 'framer-motion'
import { MapPin, Menu as MenuIcon } from 'lucide-react'

/**
 * Hero Section Component
 * Full-width banner with headline, subheadline, and CTA buttons
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      role="banner"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070')",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Authentic Flavors at
            <span className="block text-brand-orange mt-2">Kapruwan Hotel</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto font-light text-gray-200 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the best local cuisine in town. Fresh ingredients, warm hospitality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#menu"
              className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center"
              aria-label="View our menu"
            >
              <MenuIcon className="w-5 h-5" />
              <span>View Menu</span>
            </a>
            <a
              href="https://maps.app.goo.gl/MyrsjmCEypJiUPz17"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center space-x-2 w-full sm:w-auto justify-center bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-brand-orange"
              aria-label="Get directions to our location"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

