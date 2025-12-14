import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TimelineItem = ({ title, description, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-8 border-l-2 border-primary-600"
    >
      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full glow-green"></div>
      <h3 className="text-xl font-semibold text-primary-400 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

export default TimelineItem

