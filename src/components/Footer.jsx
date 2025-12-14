import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-dark-50 border-t border-dark-200 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Kaylee</h3>
            <p className="text-gray-400">
              Immersive educational tours that bring learning to life.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#journal" className="hover:text-primary-400 transition-colors">Journal</a></li>
              <li><a href="#documentation" className="hover:text-primary-400 transition-colors">Documentation</a></li>
              <li><a href="#certification" className="hover:text-primary-400 transition-colors">Certification</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Contact</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/vercs1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.instagram.com/kylcv1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="mailto:kyleandrei.abellera@hcdc.edu.ph"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FiMail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-200 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Kyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

