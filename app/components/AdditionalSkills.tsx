'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Monitor, 
  Camera, 
  Network, 
  Settings, 
  Shield, 
  Server,
  Layers,
  Cpu
} from 'lucide-react'

const AdditionalSkills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const generalSkills = [
    { 
      icon: Network, 
      title: 'Network Infrastructure', 
      description: 'Design, installation, and configuration of local and wide area networks',
      color: 'from-sky-500 to-blue-500'
    },
    { 
      icon: Camera, 
      title: 'CCTV Systems', 
      description: 'Installation and setup of security camera systems and surveillance solutions',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      icon: Settings, 
      title: 'Device Configuration', 
      description: 'Configuration and optimization of routers, switches, and network devices',
      color: 'from-cyan-500 to-sky-500'
    },
    { 
      icon: Layers, 
      title: 'ERP Systems', 
      description: 'Implementation and management of SAP and other enterprise resource planning systems',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      icon: Server, 
      title: 'System Administration', 
      description: 'Server management, maintenance, and system optimization',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Shield, 
      title: 'IT Security', 
      description: 'Implementation of security protocols and network protection measures',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      icon: Monitor, 
      title: 'Technical Support', 
      description: 'Troubleshooting, maintenance, and end-user support services',
      color: 'from-rose-500 to-red-500'
    },
    { 
      icon: Cpu, 
      title: 'Hardware Solutions', 
      description: 'Computer assembly, upgrades, and hardware troubleshooting',
      color: 'from-red-500 to-orange-500'
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-4">
            General ICT Skills
          </h2>
          <p className="text-center text-blue-700 dark:text-sky-300 mb-16 max-w-2xl mx-auto">
            Comprehensive IT services covering hardware, software, networking, and enterprise solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 border border-sky-100 dark:border-slate-700"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-md`}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-blue-900 dark:text-sky-100 mb-2">
                    {skill.title}
                  </h3>
                  
                  <p className="text-sm text-blue-700 dark:text-sky-300">
                    {skill.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AdditionalSkills

