import { useState, useRef, useEffect } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { journalPosts } from '../data/journal'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiX } from 'react-icons/fi'

const Journal = () => {
  const [selectedPost, setSelectedPost] = useState(null)
  const [isLogoOpen, setIsLogoOpen] = useState(false)

  const getLogoSrc = (post) => {
    if (!post) return null
    switch (post.id) {
      case 1:
        return '/images/WorldTechJournal.jpeg'
      case 2:
        return '/images/CodechumJournal.jpeg'
      case 3:
        return '/images/RivanJournal.jpeg'
      case 4:
        return '/images/MataJournal.jpeg'
      case 5:
        return '/images/TarsierJournal.jpeg'
      default:
        return null
    }
  }

  const openModal = (post) => {
    setSelectedPost(post)
    setIsLogoOpen(false)
  }

  const closeModal = () => {
    setSelectedPost(null)
    setIsLogoOpen(false)
  }

  // Close modal/lightbox on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (isLogoOpen) setIsLogoOpen(false)
        else if (selectedPost) setSelectedPost(null)
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isLogoOpen, selectedPost])

  return (
    <SectionWrapper id="journal">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Journal</span> & Stories
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Read about my experiences, projects, and professional journey
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {journalPosts.map((post, index) => (
          <JournalCard key={post.id} post={post} index={index} onReadMore={() => openModal(post)} />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-dark-50 rounded-2xl border border-dark-200 p-6 md:p-8 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-dark-100"
                aria-label="Close"
              >
                <FiX size={24} />
              </button>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {selectedPost.day && (
                      <span className="text-primary-400 font-semibold text-sm mb-2 block">{selectedPost.day}</span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient">{selectedPost.title}</h2>
                  </div>
                  <span className="text-sm text-gray-400">{new Date(selectedPost.date).toLocaleDateString()}</span>
                </div>
                
                {selectedPost.image && (
                  <div className={`w-full rounded-lg overflow-hidden mb-6 ${selectedPost.id === 1 ? 'h-96 md:h-[32rem]' : 'h-64 md:h-80'}`}>
                    <img 
                      src={selectedPost.image} 
                      alt={selectedPost.title} 
                      className={`w-full h-full ${selectedPost.id === 1 ? 'object-contain bg-dark-700' : 'object-cover'}`}
                    />
                  </div>
                )}

                {/* Company logo (clickable) */}
                {selectedPost && getLogoSrc(selectedPost) && (
                  <div className="flex justify-center md:justify-start mb-4">
                    <button
                      onClick={() => setIsLogoOpen(true)}
                      className="p-0 bg-transparent border-0 cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                      aria-label={`Open ${selectedPost.title} image`}
                    >
                      <img
                        src={getLogoSrc(selectedPost)}
                        alt={`${selectedPost.title} logo`}
                        className="w-36 h-36 md:w-40 md:h-40 object-contain rounded-md bg-dark-700 p-2 hover:scale-105 transition-transform"
                      />
                    </button>
                  </div>
                )}   
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-3">Company</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedPost.fullDescription}</p>
                </div>

                {selectedPost.observations && (
                  <div>
                    <h3 className="text-xl font-semibold text-primary-400 mb-3">Observations</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedPost.observations}</p>
                  </div>
                )}

                {selectedPost.learnings && (
                  <div>
                    <h3 className="text-xl font-semibold text-primary-400 mb-3">Learnings</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedPost.learnings}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-4">
                  {selectedPost.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo lightbox */}
      <AnimatePresence>
        {isLogoOpen && selectedPost && getLogoSrc(selectedPost) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            style={{ zIndex: 9999 }}
            onClick={() => setIsLogoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsLogoOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-dark-100"
                aria-label="Close"
              >
                <FiX size={24} />
              </button>
              <div className="w-full max-h-[80vh] flex items-center justify-center">
                <img
                  src={getLogoSrc(selectedPost)}
                  alt={`${selectedPost.title} large`}
                  className="max-w-full max-h-[80vh] object-contain rounded-md bg-dark-700 p-4"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}

const JournalCard = ({ post, index, onReadMore }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col">
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary-900 to-dark">
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            {post.image ? (
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            ) : (
              '📚'
            )}
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-100 mb-3">{post.title}</h3>
          
          <p className="text-gray-400 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReadMore}
            className="text-primary-400 hover:text-primary-300 font-medium text-sm self-start transition-colors"
          >
            Read more →
          </motion.button>
        </div>
      </Card>
    </motion.div>
  )
}

export default Journal

