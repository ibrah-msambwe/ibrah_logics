'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data/portfolio'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    { title: 'Development', items: skills.development, color: 'sky', icon: '💻' },
    { title: 'Design', items: skills.design, color: 'blue', icon: '🎨' },
    { title: 'ICT & Networks', items: skills.ict, color: 'cyan', icon: '🌐' },
    { title: 'ERP & Business', items: skills.erp, color: 'indigo', icon: '📊' },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      sky: 'from-sky-500 to-sky-600',
      blue: 'from-blue-500 to-blue-600',
      cyan: 'from-cyan-500 to-cyan-600',
      indigo: 'from-indigo-500 to-indigo-600',
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-center text-blue-700 dark:text-sky-300 mb-16 max-w-2xl mx-auto">
            I work with modern technologies to build scalable and performant applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-sky-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg p-6 border border-sky-100 dark:border-slate-700"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${getColorClasses(
                    category.color
                  )} text-white text-lg sm:text-xl font-bold py-3 px-4 rounded-xl mb-4 text-center shadow-md`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    <span>{category.title}</span>
                  </div>
                </motion.div>
                <ul className="space-y-3">
                  {category.items.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.05) }}
                      whileHover={{ x: 5 }}
                      className="text-blue-800 dark:text-sky-200 flex items-center text-sm sm:text-base"
                    >
                      <motion.span 
                        className="w-2 h-2 bg-sky-500 rounded-full mr-3"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

