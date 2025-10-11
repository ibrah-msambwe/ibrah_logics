'use client'

import { motion } from 'framer-motion'
import { Youtube, Instagram, Facebook } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolio'

// TikTok Icon Component (not available in lucide-react)
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-sky-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-2">
            {personalInfo.name}
          </h3>
          <p className="text-blue-700 dark:text-sky-300 mb-6">
            {personalInfo.title}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-700 dark:text-sky-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </motion.a>
            <motion.a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-700 dark:text-sky-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-700 dark:text-sky-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </motion.a>
            <motion.a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-700 dark:text-sky-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </motion.a>
          </div>
          
          <p className="text-blue-600 dark:text-sky-400 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

