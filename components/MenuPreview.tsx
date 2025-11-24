'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

/**
 * Menu Preview Section
 * Displays popular menu items with images, prices, and descriptions
 */
export default function MenuPreview() {
  // Popular dishes configuration
  const menuItems = [
    {
      id: 1,
      name: 'Tandoori Chicken',
      description: 'Juicy chicken marinated in yogurt and spices, cooked in tandoor',
      image: '/images/tandoori chicken.png',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Butter Chicken',
      description: 'Creamy tomato-based curry with succulent chicken pieces',
      image: '/images/butter chicken.png',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Mutton Curry',
      description: 'Tender mutton cooked in aromatic spices and rich gravy',
      image: '/images/mutton.png',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Tandoori Naan',
      description: 'Soft, fluffy bread baked fresh in traditional clay oven',
      image: '/images/Tandoori_naan.jpg',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Fried Rice',
      description: 'Aromatic basmati rice stir-fried with vegetables and spices',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800',
      rating: 4.6,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="section-padding bg-white" id="menu">
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
            Popular Dishes
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our most loved dishes, prepared with authentic recipes and fresh ingredients
          </p>
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              variants={itemVariants}
            >
               {/* Image Container */}
               <div className="relative h-48 sm:h-56 overflow-hidden">
                 <img
                   src={item.image}
                   alt={item.name}
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   loading="lazy"
                 />
                 {/* Rating Badge */}
                 <div className="absolute top-3 right-3 bg-white rounded-full px-2.5 py-1 sm:px-3 sm:py-1 flex items-center space-x-1 shadow-lg">
                   <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                   <span className="text-xs sm:text-sm font-semibold text-gray-900">{item.rating}</span>
                 </div>
               </div>

               {/* Content */}
               <div className="p-4 sm:p-6">
                 <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                   {item.name}
                 </h3>
                 <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                   {item.description}
                 </p>
               </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Menu Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="btn-primary">
            View Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  )
}

