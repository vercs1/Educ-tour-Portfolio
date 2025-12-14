import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import Card from '../components/Card'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

const Certification = () => {
  const [isEnlarged, setIsEnlarged] = useState(false)

  const toggleEnlarge = () => {
    setIsEnlarged(!isEnlarged)
  }

  const closeEnlarged = () => {
    setIsEnlarged(false)
  }

  return (
    <SectionWrapper id="certification">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Certification</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          My professional certifications and achievements
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden">
            <div className="relative w-full cursor-pointer" onClick={toggleEnlarge}>
              <img
                src="/images/cert.jpeg"
                alt="Certificate"
                className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = '<div class="p-8 text-center text-gray-400">Certificate image not found</div>'
                }}
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-400 opacity-0 hover:opacity-100 transition-opacity duration-300 text-sm">
                  Click to enlarge
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Enlarged Modal */}
      <AnimatePresence>
        {isEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeEnlarged}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeEnlarged}
                className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Close"
              >
                <FiX size={32} />
              </button>
              <img
                src="/images/cert.jpeg"
                alt="Certificate - Enlarged"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg border-2 border-primary-600/50"
              />
              <p className="text-center text-gray-400 mt-4 text-sm">
                Click outside to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}

export default Certification

