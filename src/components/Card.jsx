import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-dark-50 rounded-xl p-6 border border-dark-200 hover:border-primary-600 hover:glow-green transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card

