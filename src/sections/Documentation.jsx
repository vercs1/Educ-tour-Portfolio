import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import Card from '../components/Card'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Documentation = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Helper function to generate photo objects for a day
  const generateDayPhotos = (day, date, baseTitle, baseDescription, imageFiles) => {
    return imageFiles.map((imageFile, index) => ({
      id: `${day}-${index + 1}`,
      title: index === 0 ? baseTitle : `${baseTitle} - Photo ${index + 1}`,
      date: date,
      image: `/images/Day${day}/${imageFile}`,
      description: index === 0 ? baseDescription : `${baseDescription} - Travel documentation photo.`,
    }))
  }

  // Day 1 Photos
  const day1Photos = generateDayPhotos(
    1,
    'November 19, 2025',
    'DAY 1 - Worldtech Information Solutions',
    'Visiting Worldtech Information Solutions, Inc. - A leading IT consultancy specializing in cybersecurity solutions and professional training.',
    [
      'Worldtech.jpg',
      'DSC06997.jpg',
      'DSC07004.jpg',
      'DSC07010.jpg',
      'DSC07030.jpg',
      'DSC07067.jpg',
      'DSC07069.jpg',
      'DSC07077.jpg',
      'DSC07092.jpg',
      'DSC07093.jpg',
      'DSC07094.jpg',
      'DSC07124.jpg',
    ]
  )

  // Day 2 Photos
  const day2Photos = generateDayPhotos(
    2,
    'November 20, 2025',
    'DAY 2 - CodeChum & Rivan IT Cebu',
    'Exploring CodeChum and learning at Rivan IT Cebu - Educational technology platforms and IT training centers.',
    [
      'codechum.jpg',
      'RivanIT.jpg',
      'DSC07149.jpg',
      'DSC07153.jpg',
      'DSC07156.jpg',
      'DSC07187.jpg',
      'DSC07205.jpg',
      'DSC07212.jpg',
      'DSC07226.jpg',
      'DSC07240.jpg',
      'DSC07253.jpg',
      'DSC07260.jpg',
      'DSC07263.jpg',
      'DSC07266.jpg',
      'DSC07270.jpg',
      'DSC07280.jpg',
      'DSC07282.jpg',
      'DSC07295.jpg',
      'DSC07298.jpg',
      'DSC07301.jpg',
      'DSC07303.jpg',
      'DSC07310.jpg',
      'DSC07311.jpg',
      'DSC07319.jpg',
      'DSC07324.jpg',
      'DSC07326.jpg',
      'DSC07327.jpg',
      'DSC07344.jpg',
      'DSC07346.jpg',
    ]
  )

  // Day 3 Photos
  const day3Photos = generateDayPhotos(
    3,
    'November 21, 2025',
    'DAY 3 - MATA Technologies',
    'Discovering MATA Technologies - A provider of virtual tours for real estate and virtual reality maps of tourist destinations.',
    [
      'mata.jpg',
      'DSC07364.jpg',
      'DSC07371.jpg',
      'DSC07421.jpg',
      'DSC07414.jpg',
      'DSC07416.jpg',
      'DSC07428.jpg',
      'DSC07432.jpg',
      'DSC07442.jpg',
      'DSC07444.jpg',
      'DSC07465.jpg',
      'DSC07466.jpg',
      'DSC07490.jpg',
      'DSC07508.jpg',
      'DSC07511.jpg',
      'DSC07515.jpg',
      'DSC07517.jpg',
      'DSC07518.jpg',
      'DSC07526.jpg',
      'DSC07537.jpg',
      'DSC07558.jpg',
      'DSC07559.jpg',
      'DSC07570.jpg',
      'DSC07572.jpg',
    ]
  )

  // Day 4 Photos
  const day4Photos = generateDayPhotos(
    4,
    'November 22, 2025',
    'DAY 4 - T.A.R.S.I.E.R. 117',
    'Visiting T.A.R.S.I.E.R. 117 - An emergency response and disaster management unit in Bohol.',
    [
      'Tarsierr.JPG',
      'DSC07576.JPG',
      'DSC07579.JPG',
      'DSC07586.JPG',
      'DSC07592.JPG',
      'DSC07615.JPG',
      'DSC07704.JPG',
      'DSC07724.JPG',
      'DSC07735.JPG',
      'DSC07740.JPG',
      'DSC07743.JPG',
      'DSC07754.JPG',
      'DSC07756.JPG',
      'DSC07781.JPG',
      'DSC07802.JPG',
      'DSC07814.JPG',
      'DSC07828.JPG',
      'DSC07829.JPG',
      'DSC07834.JPG',
      'DSC07848.JPG',
      'DSC07859.JPG',
      'DSC07866.JPG',
      'DSC07887.JPG',
      'DSC08016.JPG',
      'DSC08046.JPG',
      'DSC08075.JPG',
      'DSC08101.JPG',
      'DSC08128-2.JPG',
      'DSC08141.JPG',
      'DSC08145.JPG',
      'DSC08152.JPG',
    ]
  )

  // Organize photos by day (album structure)
  const albumDays = [
    {
      day: 1,
      title: 'DAY 1',
      subtitle: 'Worldtech Information Solutions',
      date: 'November 19, 2025',
      description: 'Visiting Worldtech Information Solutions, Inc. - A leading IT consultancy specializing in cybersecurity solutions and professional training.',
      photos: day1Photos,
      coverPhoto: day1Photos[0],
    },
    {
      day: 2,
      title: 'DAY 2',
      subtitle: 'CodeChum & Rivan IT Cebu',
      date: 'November 20, 2025',
      description: 'Exploring CodeChum and learning at Rivan IT Cebu - Educational technology platforms and IT training centers.',
      photos: day2Photos,
      coverPhoto: day2Photos[0],
    },
    {
      day: 3,
      title: 'DAY 3',
      subtitle: 'MATA Technologies',
      date: 'November 21, 2025',
      description: 'Discovering MATA Technologies - A provider of virtual tours for real estate and virtual reality maps of tourist destinations.',
      photos: day3Photos,
      coverPhoto: day3Photos[0],
    },
    {
      day: 4,
      title: 'DAY 4',
      subtitle: 'T.A.R.S.I.E.R. 117',
      date: 'November 22, 2025',
      description: 'Visiting T.A.R.S.I.E.R. 117 - An emergency response and disaster management unit in Bohol.',
      photos: day4Photos,
      coverPhoto: day4Photos[0],
    },
  ]

  // Combine all photos for navigation
  const allPhotos = [...day1Photos, ...day2Photos, ...day3Photos, ...day4Photos]

  const openImage = (photo, dayPhotos, dayIndex) => {
    // Find the global index of the photo
    const globalIndex = allPhotos.findIndex(p => p.id === photo.id)
    setSelectedImage(photo)
    setCurrentIndex(globalIndex)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allPhotos.length
    setCurrentIndex(nextIndex)
    setSelectedImage(allPhotos[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length
    setCurrentIndex(prevIndex)
    setSelectedImage(allPhotos[prevIndex])
  }

  return (
    <SectionWrapper id="documentation" className="bg-dark-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-primary-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 border-2 border-primary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Travel</span> Memories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A scrapbook of my educational journey
          </p>
        </motion.div>
      </div>
      
      {/* Unique Album Layout - Scrapbook Style */}
      <div className="relative z-10">
        {albumDays.map((albumDay, dayIndex) => {
          // Create random rotations for polaroid effect
          const getRotation = (index) => {
            const rotations = [-2, 1.5, -1, 2.5, -1.5, 1, -2.5, 0.5, -0.5, 2, -1.2, 1.8]
            return rotations[index % rotations.length]
          }

          return (
            <motion.div
              key={albumDay.day}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: dayIndex * 0.15 }}
              className="relative mb-24"
            >
              {/* Timeline Ribbon */}
              <div className="relative mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center glow-green-lg">
                      <span className="text-2xl font-bold text-white">{albumDay.day}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-400 rounded-full animate-pulse"></div>
                  </motion.div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
                </div>
                
                {/* Day Info Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="max-w-2xl mx-auto"
                >
                  <Card className="text-center p-6 border-2 border-primary-600/30">
                    <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                      {albumDay.title}
                    </h3>
                    <p className="text-2xl text-gray-200 font-semibold mb-2">{albumDay.subtitle}</p>
                    <p className="text-primary-400 font-medium mb-3">{albumDay.date}</p>
                    <p className="text-gray-400">{albumDay.description}</p>
                    <div className="mt-4 inline-block px-4 py-2 bg-primary-900/50 rounded-full border border-primary-600/50">
                      <span className="text-primary-300 font-semibold">{albumDay.photos.length} Memories</span>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Hero Cover Photo - Polaroid Style */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-2xl mx-auto mb-12 cursor-pointer"
                onClick={() => openImage(albumDay.coverPhoto, albumDay.photos, dayIndex)}
              >
                <div className="bg-white p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={albumDay.coverPhoto.image}
                      alt={albumDay.coverPhoto.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-gray-800 text-lg" style={{ fontFamily: "'Kalam', cursive" }}>{albumDay.coverPhoto.title}</p>
                    <p className="text-gray-500 text-sm mt-1">{albumDay.date}</p>
                  </div>
                </div>
              </motion.div>

              {/* Photo Gallery - Polaroid/Masonry Style */}
              <div className="relative">
                {/* Decorative tape corners */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-500/30 rotate-45 opacity-50"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500/30 rotate-45 opacity-50"></div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                  {albumDay.photos.slice(1).map((photo, photoIndex) => {
                    const rotation = getRotation(photoIndex)
                    const isLarge = photoIndex % 7 === 0 // Every 7th photo is larger
                    
                    return (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 0.8, rotate: rotation }}
                        whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ 
                          duration: 0.5, 
                          delay: photoIndex * 0.05,
                          type: 'spring',
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 0,
                          zIndex: 10
                        }}
                        className={`cursor-pointer ${isLarge ? 'col-span-2 row-span-2' : ''}`}
                        onClick={() => openImage(photo, albumDay.photos, dayIndex)}
                      >
                        <div 
                          className="bg-white p-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                          style={{ 
                            transform: `rotate(${rotation}deg)`,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                          }}
                        >
                          <div className={`relative overflow-hidden bg-gray-100 ${isLarge ? 'aspect-[4/3]' : 'aspect-square'}`}>
                            <img
                              src={photo.image}
                              alt={photo.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
                          </div>
                          <div className="mt-2 text-center">
                            <p className="text-gray-700 text-xs truncate" style={{ fontFamily: "'Kalam', cursive" }}>{photo.title.split(' - ')[0]}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Decorative divider between days */}
              {dayIndex < albumDays.length - 1 && (
                <div className="mt-16 flex items-center justify-center">
                  <div className="w-1 h-16 bg-gradient-to-b from-primary-600 via-primary-400 to-primary-600"></div>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Full Size Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={closeImage}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImage}
                className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-white/10 z-10"
                aria-label="Close"
              >
                <FiX size={32} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors p-3 rounded-full bg-black/50 hover:bg-black/70 z-10"
                aria-label="Previous"
              >
                <FiChevronLeft size={28} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors p-3 rounded-full bg-black/50 hover:bg-black/70 z-10"
                aria-label="Next"
              >
                <FiChevronRight size={28} />
              </button>

              <div className="bg-dark-50 rounded-2xl border border-dark-200 overflow-hidden">
                <div className="relative w-full h-[70vh]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gradient mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-400 mb-3">{selectedImage.date}</p>
                  <p className="text-gray-300 leading-relaxed">{selectedImage.description}</p>
                  <p className="text-center text-gray-400 mt-4 text-sm">
                    {currentIndex + 1} of {allPhotos.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}

export default Documentation

