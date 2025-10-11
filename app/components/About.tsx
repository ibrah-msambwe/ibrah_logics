'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { about } from '../data/portfolio'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-16">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* My Journey */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-sky-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-sky-100 dark:border-slate-700"
            >
              <h3 className="text-2xl font-bold text-blue-900 dark:text-sky-100 mb-4">
                {about.journey.title}
              </h3>
              <p className="text-blue-700 dark:text-sky-300 mb-6">
                {about.journey.description}
              </p>
              <ul className="space-y-3">
                {about.journey.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start text-blue-800 dark:text-sky-200"
                  >
                    <span className="text-sky-500 mr-2">▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What I Do */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-sky-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-sky-100 dark:border-slate-700"
            >
              <h3 className="text-2xl font-bold text-blue-900 dark:text-sky-100 mb-4">
                {about.services.title}
              </h3>
              <p className="text-blue-700 dark:text-sky-300">
                {about.services.description}
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 sm:gap-8 max-w-2xl mx-auto px-4"
          >
            {about.stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="text-center p-4 sm:p-6 bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 rounded-2xl shadow-xl"
              >
                <motion.div 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white text-xs sm:text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

