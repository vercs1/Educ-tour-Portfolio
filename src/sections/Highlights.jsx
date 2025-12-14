import SectionWrapper from '../components/SectionWrapper'
import { useState, useEffect } from 'react'
import { FiChevronDown, FiX } from 'react-icons/fi'

const Highlights = () => {
  const tours = [
    {
      day: 'Day 1',
      title: 'Departure & Explore',
      images: [
        '/images/Day1/DSC06997.jpg',
        '/images/Day1/DSC07004.jpg',
        '/images/Day1/DSC07010.jpg',
        '/images/Day1/Worldtech.jpg',
        '/images/Day1/DSC07030.jpg',
        '/images/Day1/DSC07067.jpg',
        '/images/Day1/DSC07069.jpg',
        '/images/Day1/DSC07077.jpg',
        '/images/Day1/DSC07092.jpg',
        '/images/Day1/DSC07093.jpg',
        '/images/Day1/DSC07094.jpg',
        '/images/Day1/DSC07124.jpg',
      ]
    },
    {
      day: 'Day 2',
      title: 'Coding Centers Tour',
      images: [
        '/images/Day2/DSC07149.jpg',
        '/images/Day2/DSC07153.jpg',
        '/images/Day2/codechum.jpg',
        '/images/Day2/RivanIT.jpg',
        '/images/Day2/DSC07156.jpg',
        '/images/Day2/DSC07187.jpg',
        '/images/Day2/DSC07205.jpg',
        '/images/Day2/DSC07212.jpg',
        '/images/Day2/DSC07226.jpg',
        '/images/Day2/DSC07240.jpg',
        '/images/Day2/DSC07253.jpg',
        '/images/Day2/DSC07260.jpg',
      ]
    },
    {
      day: 'Day 3',
      title: 'Virtual Reality & tech Innovations',
      images: [
        '/images/Day3/DSC07364.jpg',
        '/images/Day3/DSC07371.jpg',
        '/images/Day3/DSC07559.jpg',
        '/images/Day3/mata.jpg',
        '/images/Day3/DSC07414.jpg',
        '/images/Day3/DSC07416.jpg',
        '/images/Day3/DSC07428.jpg',
        '/images/Day3/DSC07432.jpg',
        '/images/Day3/DSC07442.jpg',
        '/images/Day3/DSC07444.jpg',
        '/images/Day3/DSC07465.jpg',
        '/images/Day3/DSC07466.jpg',
      ]
    },
    {
      day: 'Day 4',
      title: 'Adventure & Discovery',
      images: [
        '/images/Day4/DSC07756.JPG',
        '/images/Day4/DSC07579.JPG',
        '/images/Day4/DSC08145.JPG',
        '/images/Day4/DSC07859.JPG',
        '/images/Day4/DSC07586.JPG',
        '/images/Day4/DSC07592.JPG',
        '/images/Day4/DSC07754.JPG',
        '/images/Day4/DSC07704.JPG',
        '/images/Day4/DSC07724.JPG',
        '/images/Day4/DSC07735.JPG',
        '/images/Day4/DSC07814.JPG',
        '/images/Day4/DSC07743.JPG',
      ]
    },
  ]

  // State to track expanded/collapsed tours
  const [expandedTours, setExpandedTours] = useState([true, true, true, true])
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const toggleTour = (index) => {
    setExpandedTours(prev => {
      const newExpanded = [...prev]
      newExpanded[index] = !newExpanded[index]
      return newExpanded
    })
  }

  const openImage = (image, tourIndex) => {
    const imageIndex = tours[tourIndex].images.indexOf(image)
    setSelectedImage({ image, tourIndex })
    setCurrentImageIndex(imageIndex)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (!selectedImage) return
    const nextIndex = (currentImageIndex + 1) % tours[selectedImage.tourIndex].images.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage({
      ...selectedImage,
      image: tours[selectedImage.tourIndex].images[nextIndex]
    })
  }

  const prevImage = () => {
    if (!selectedImage) return
    const prevIndex = (currentImageIndex - 1 + tours[selectedImage.tourIndex].images.length) % tours[selectedImage.tourIndex].images.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage({
      ...selectedImage,
      image: tours[selectedImage.tourIndex].images[prevIndex]
    })
  }
  
  return (
    <section id="highlights" className="relative py-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/highlights-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <SectionWrapper id="highlights-content" className="bg-transparent">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Tour</span> Highlights
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our incredible journey through unforgettable destinations and experiences
            </p>
          </div>
          
          {/* Tour Days Accordion */}
          <div className="space-y-3">
            {tours.map((tour, index) => (
              <div key={index} className="group">
                {/* Folder Header */}
                <button
                  onClick={() => toggleTour(index)}
                  className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-primary-500/25 to-transparent hover:from-primary-500/40 rounded-lg transition-all duration-300 border border-primary-400/40 hover:border-primary-400/60 backdrop-blur-sm"
                >
                  <FiChevronDown 
                    size={24} 
                    className={`text-primary-400 transition-transform duration-300 flex-shrink-0 ${expandedTours[index] ? 'rotate-180' : ''}`}
                  />
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-gray-100">{tour.day}</h3>
                    <p className="text-sm text-primary-300">{tour.title}</p>
                  </div>
                  <div className="text-xs text-gray-400 hidden md:block px-3 py-1 bg-black/30 rounded-full">
                    {tour.images.length} photos
                  </div>
                </button>

                {/* Expanded Gallery - Masonry Layout */}
                {expandedTours[index] && (
                  <div className="mt-3 overflow-hidden animate-in fade-in">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-3 space-y-3">
                      {tour.images.map((image, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => openImage(image, index)}
                          className="relative overflow-hidden rounded-lg cursor-pointer group/photo break-inside-avoid hover:shadow-2xl transition-all duration-300 border border-primary-400/20 hover:border-primary-400/60"
                          style={{
                            height: imgIndex % 3 === 0 ? '280px' : imgIndex % 3 === 1 ? '240px' : '260px'
                          }}
                        >
                          <img 
                            src={image} 
                            alt={`${tour.day} - ${imgIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-125"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <div className="text-white opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                              <p className="text-sm font-semibold">View Full</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-screen flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              <FiX size={28} className="text-white" />
            </button>

            {/* Main Image */}
            <img 
              src={selectedImage.image} 
              alt="Full view"
              className="w-full h-auto rounded-lg shadow-2xl"
            />

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 text-white"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 text-white"
            >
              →
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 rounded-full border border-white/20 text-white text-sm">
              {currentImageIndex + 1} / {tours[selectedImage.tourIndex].images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Highlights

