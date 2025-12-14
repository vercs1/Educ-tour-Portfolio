import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Stat = ({ number, label, icon, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-5xl mb-2">{icon}</div>
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2, type: 'spring' }}
        className="text-4xl font-bold text-gradient mb-2"
      >
        {number}
      </motion.div>
      <div className="text-gray-400 text-lg">{label}</div>
    </motion.div>
  )
}

export default Stat

