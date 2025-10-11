'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Lock } from 'lucide-react'
import { projects } from '../data/portfolio'
import { useState } from 'react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [showRestrictedModal, setShowRestrictedModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string>('')

  const handleProjectClick = (project: any) => {
    if (project.restricted) {
      setSelectedProject(project.title)
      setShowRestrictedModal(true)
    } else if (project.link !== '#') {
      window.open(project.link, '_blank')
    }
  }

  return (
    <section id="projects" className="py-20 bg-sky-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-blue-700 dark:text-sky-300 mb-16 max-w-2xl mx-auto">
            Here are some of the innovative platforms I've built to serve businesses and organizations across Tanzania 🇹🇿.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer border border-sky-100 dark:border-slate-700"
                onClick={() => handleProjectClick(project)}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <motion.span 
                      className="text-4xl sm:text-5xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.emoji}
                    </motion.span>
                    <span className="text-2xl sm:text-3xl">{project.country}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-sky-100 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-blue-700 dark:text-sky-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}
                    >
                      Status: {project.status}
                    </span>
                    
                    {project.restricted ? (
                      <Lock className="text-amber-600 dark:text-amber-400" size={16} />
                    ) : project.link !== '#' ? (
                      <ExternalLink className="text-sky-600 dark:text-sky-400" size={16} />
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Restricted Access Modal */}
      {showRestrictedModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowRestrictedModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-8 border border-amber-200 dark:border-amber-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="bg-amber-100 dark:bg-amber-900 p-4 rounded-full">
                  <Lock className="text-amber-600 dark:text-amber-400" size={32} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-sky-100 mb-3">
                Restricted Access
              </h3>
              
              <p className="text-gray-800 dark:text-sky-300 mb-2">
                <strong>{selectedProject}</strong> is a private system.
              </p>
              
              <p className="text-gray-700 dark:text-sky-400 mb-6">
                For access or demo requests, please contact <strong>ibrah_logics</strong>
              </p>
              
              <div className="space-y-3">
                <a
                  href="mailto:contact@ibrahlogics.com"
                  className="block w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-sky-700 hover:to-blue-700 transition-all"
                >
                  Contact via Email
                </a>
                
                <button
                  onClick={() => setShowRestrictedModal(false)}
                  className="block w-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Projects

