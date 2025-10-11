'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Briefcase, ArrowRight } from 'lucide-react'
import { personalInfo, services } from '../data/portfolio'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone / WhatsApp', value: personalInfo.phone, link: `https://wa.me/${personalInfo.whatsapp}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Briefcase, label: 'Availability', value: personalInfo.availability },
  ]

  return (
    <section id="contact" className="py-20 bg-sky-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <p className="text-center text-blue-700 dark:text-sky-300 mb-16 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm available for freelance projects and collaborations.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  const content = (
                    <>
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-sky-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600 dark:text-sky-400">
                          {item.label}
                        </p>
                        <p className="mt-1 text-base text-blue-900 dark:text-sky-100">
                          {item.value}
                        </p>
                      </div>
                    </>
                  )
                  
                  return item.link ? (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start p-4 bg-white dark:bg-slate-900 rounded-lg shadow border border-sky-100 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-600 transition-all cursor-pointer hover:shadow-lg"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-white dark:bg-slate-900 rounded-lg shadow border border-sky-100 dark:border-slate-700"
                    >
                      {content}
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Services Offered */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Services I Offer
              </h3>
              <div className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-lg shadow border border-sky-100 dark:border-slate-700"
                  >
                    <span className="text-sky-500 mr-3">▸</span>
                    <span className="text-blue-900 dark:text-sky-100">{service}</span>
                  </div>
                ))}
              </div>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center w-full px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-full text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-2xl"
              >
                Start a Project
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

