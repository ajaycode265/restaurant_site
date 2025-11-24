'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Navigation } from 'lucide-react'

/**
 * Contact & Information Board Component (CRITICAL SECTION)
 * Displays opening hours, phone number, address, and embedded map
 */
export default function ContactInfo() {
  // Contact information configuration
  const contactDetails = {
    phone: '+91 9997130568',
    phoneRaw: '+919997130568',
    address: 'Kapruwan Hotel, Main Bazar, Raiwala, Uttarakhand 249205',
    hours: [
      { day: 'Monday - Sunday', time: '10:00 AM - 10:00 PM' },
      { day: 'Tuesday', time: 'Closed' },
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13816.236031150802!2d78.19089252501725!3d30.035164937808254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093f93169a3775%3A0x3125b416322b9ae7!2sKAPRUWAN%20HOTEL!5e0!3m2!1sen!2sin!4v1763981249029!5m2!1sen!2sin',
    googleMapsLink: 'https://maps.app.goo.gl/MyrsjmCEypJiUPz17',
  }

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
    <section className="section-padding bg-gradient-to-b from-brand-cream to-white" id="contact">
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
            Visit Us Today
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to serve you with delicious food and warm hospitality
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Contact Details */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Opening Hours Card */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-blue-100"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-5">
                {contactDetails.hours.map((schedule, index) => (
                  <div key={index} className={`flex justify-between items-center p-3 sm:p-4 rounded-lg sm:rounded-xl ${schedule.time === 'Closed' ? 'bg-red-50' : 'bg-green-50'}`}>
                    <span className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">{schedule.day}</span>
                    <span className={`font-bold text-sm sm:text-base md:text-lg ${schedule.time === 'Closed' ? 'text-red-600' : 'text-green-600'}`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Phone Number Card */}
            <motion.div
              className="bg-gradient-to-br from-brand-orange via-brand-orange-dark to-orange-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl text-white relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full -ml-10 -mb-10 sm:-ml-12 sm:-mb-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-brand-orange" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold">
                    Call to Order
                  </h3>
                </div>
                <a
                  href={`tel:${contactDetails.phoneRaw}`}
                  className="block text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 hover:scale-105 transition-transform duration-300 active:scale-95"
                  aria-label="Call us"
                >
                  {contactDetails.phone}
                </a>
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-white/95 text-sm sm:text-base leading-relaxed">
                    Available during opening hours for takeout and delivery orders
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              className="bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-green-200 relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Decorative Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-green-100/30 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900">
                    Location
                  </h3>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 shadow-sm border border-green-100">
                  <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                    {contactDetails.address}
                  </p>
                </div>
                <a
                  href={contactDetails.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl"
                  aria-label="Navigate to our location"
                >
                  <Navigation className="w-5 h-5" />
                  <span>Navigate Now</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Google Map */}
          <motion.div
            className="h-full min-h-[400px] sm:min-h-[500px] lg:min-h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-full">
              <iframe
                src={contactDetails.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kapruwan Hotel Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

