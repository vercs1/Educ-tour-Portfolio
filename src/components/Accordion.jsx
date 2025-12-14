import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const Accordion = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-dark-200">
      <button
        onClick={onClick}
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg px-2"
      >
        <span className="font-semibold text-lg text-gray-100">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="text-primary-400 text-xl" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-300 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion

