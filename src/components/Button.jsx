import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark'
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white glow-green hover:glow-green-lg',
    secondary: 'bg-dark-100 hover:bg-dark-200 text-primary-400 border-2 border-primary-600',
    outline: 'bg-transparent hover:bg-primary-600 text-primary-400 hover:text-white border-2 border-primary-600',
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button

