'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

/**
 * Footer Component
 * Contains copyright, social media links, and quick navigation
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Footer configuration
  const footerData = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'Menu', href: '#menu' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
    socialMedia: [
      { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
      { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
      { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    ],
    contact: [
      { icon: Phone, text: '+91 9997130568', href: 'tel:+919997130568' },
      { icon: Mail, text: 'info@kapruwanhotel.com', href: 'mailto:info@kapruwanhotel.com' },
      { icon: MapPin, text: 'Dehradun, Uttarakhand, India', href: '#contact' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-3xl font-bold text-brand-orange mb-4">
                Kapruwan Hotel
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Serving authentic local cuisine with passion and dedication since 1995. Your satisfaction is our priority.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {footerData.socialMedia.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-display text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerData.quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-brand-orange transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-brand-orange transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-display text-xl font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                {footerData.contact.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-brand-orange transition-colors duration-300 flex items-start group"
                      >
                        <Icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="leading-tight">{item.text}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Opening Hours Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-display text-xl font-bold mb-6">Opening Hours</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-between">
                  <span>Mon - Sun:</span>
                  <span className="text-white font-semibold">10AM - 10PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Tuesday:</span>
                  <span className="text-red-400 font-semibold">Closed</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © {currentYear} Kapruwan Hotel. All rights reserved.
            </motion.p>
            <motion.div
              className="flex space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

