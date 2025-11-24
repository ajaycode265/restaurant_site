'use client'

import { motion } from 'framer-motion'
import { Leaf, Clock, Heart } from 'lucide-react'

/**
 * Highlights/Features Section
 * Showcases three key features of the restaurant
 */
export default function Highlights() {
  // Features configuration with icons and descriptions
  const features = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'We source the finest local produce daily to ensure every dish bursts with authentic flavor.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Quick and efficient service without compromising quality. Your time is valuable to us.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Heart,
      title: 'Cozy Ambience',
      description: 'A warm, inviting atmosphere perfect for family gatherings and special moments.',
      color: 'bg-red-100 text-red-600',
    },
  ]

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-padding bg-gradient-to-b from-white to-brand-cream" id="about">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're committed to delivering an exceptional dining experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                variants={itemVariants}
              >
                {/* Icon Container */}
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className="w-8 h-8" strokeWidth={2} />
                </div>

                {/* Feature Title */}
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

