import { motion } from 'framer-motion'
import Button from '../components/Button'
import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Multiple Grid Pattern Backgrounds */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px',
        }}
      />
      
      {/* Diagonal Stripe Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(34, 197, 94, 0.1) 10px, rgba(34, 197, 94, 0.1) 20px)',
        }}
      />
      
      {/* Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Circular Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5" style={{ zIndex: 0 }}>
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx="50%"
            cy="50%"
            r={100 + i * 80}
            fill="none"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="1"
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-primary-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl"
        />
        
        {/* Additional smaller animated shapes */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.08, 0.18, 0.08],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary-700 rounded-full blur-2xl"
        />
        
        {/* Geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-primary-600/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/3 right-1/3 w-24 h-24 border-2 border-primary-400/30"
          style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
        />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: 0 }}>
          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="url(#gradient2)"
            strokeWidth="2"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#16a34a" stopOpacity="0" />
              <stop offset="50%" stopColor="#16a34a" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* More animated orbs */}
        <motion.div
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0.06, 0.16, 0.06],
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-1/5 w-72 h-72 bg-primary-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 0.7, 1.3],
            opacity: [0.07, 0.17, 0.07],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/3 left-1/5 w-56 h-56 bg-primary-800 rounded-full blur-2xl"
        />
        
        {/* More geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/2 w-20 h-20 border-2 border-primary-500/40"
          style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [0.9, 1.1, 0.9],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-2/3 left-1/4 w-16 h-16 border-2 border-primary-400/40"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 0.7, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-28 h-28 border-2 border-primary-600/40"
          style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
        />
        
        {/* Floating particles - more of them */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary-400 rounded-full"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, (i % 2 === 0 ? 20 : -20), 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + (i % 4) * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Larger floating orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute bg-primary-500 rounded-full blur-xl"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              left: `${20 + i * 25}%`,
              top: `${40 + (i % 2) * 30}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 5 + i * 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Wave patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-8" style={{ zIndex: 0 }}>
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={`wave-${i}`}
              d={`M 0 ${200 + i * 100} Q ${100 + i * 50} ${150 + i * 50}, ${200 + i * 100} ${200 + i * 100} T ${400 + i * 200} ${200 + i * 100}`}
              fill="none"
              stroke={`rgba(34, 197, 94, ${0.15 - i * 0.05})`}
              strokeWidth="2"
              animate={{
                d: [
                  `M 0 ${200 + i * 100} Q ${100 + i * 50} ${150 + i * 50}, ${200 + i * 100} ${200 + i * 100} T ${400 + i * 200} ${200 + i * 100}`,
                  `M 0 ${200 + i * 100} Q ${150 + i * 50} ${200 + i * 50}, ${200 + i * 100} ${200 + i * 100} T ${400 + i * 200} ${200 + i * 100}`,
                  `M 0 ${200 + i * 100} Q ${100 + i * 50} ${150 + i * 50}, ${200 + i * 100} ${200 + i * 100} T ${400 + i * 200} ${200 + i * 100}`,
                ],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.8,
              }}
            />
          ))}
        </svg>
      </div>
      
      {/* Mesh Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(34, 197, 94, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 70%, rgba(22, 163, 74, 0.1) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(34, 197, 94, 0.05) 0px, transparent 50%)
          `,
        }}
      />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-transparent to-dark/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/30 via-transparent to-dark/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-dark/20 to-transparent pointer-events-none" />
      
      {/* Radial gradient accents */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(22, 163, 74, 0.2) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(22, 163, 74, 0.2) 0%, transparent 70%)',
        }}
      />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gradient">Kyle</span>
              <br />
              <span className="text-gray-100 text-3xl md:text-4xl lg:text-5xl font-large">UI/UX Designer</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Hi, I'm Kyle Andrei, a BSIT student passionate about photography and UI/UX designing. I enjoy expressing creativity through visuals while continuously learning and improving my skills.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button onClick={() => scrollToSection('highlights')}>
                Explore Tours
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('journal')}>
                View Journal
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-6"
            >
              <span className="text-gray-400">Follow me:</span>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/vercs1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/kylcv1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="Instagram"
                >
                  <FiInstagram size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:kyleandrei.abellera@hcdc.edu.ph"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="Email"
                >
                  <FiMail size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[470px] rounded-2xl overflow-hidden border-2 border-primary-600 glow-green-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src="/images/pfp.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient if image not found
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary-900', 'to-dark')
                  }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark/20 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

