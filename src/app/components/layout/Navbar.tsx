'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Load fonts dynamically
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Flow', href: '#flow' },
    { name: 'Theme', href: '#theme' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gray-900/95 backdrop-blur-md' 
            : 'bg-transparent'
        }`}
        style={{ height: '104px' }}
      >
        {/* Desktop Layout */}
        <div className="hidden xl:flex items-center justify-between h-full px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Logo and Institute Name */}
          <div className="flex items-center">
            <img 
              src="/sdit-logo.jpg" 
              alt="SDIT Logo" 
              className="w-12 h-12 object-contain"
              onError={(e) => {
                console.log('Logo failed to load, check if /sdit-logo.png exists in public folder');
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col ml-1">
              <span 
                className="text-white text-lg font-bold leading-tight" 
                style={{ fontFamily: 'LOVELO, Arial, sans-serif' }}
              >
                SHREE DEVI
              </span>
              <span 
                className="text-white text-sm font-medium leading-tight" 
                style={{ fontFamily: 'LOVELO, Arial, sans-serif' }}
              >
                Institute of Technology
              </span>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center bg-gray-800/60 backdrop-blur-md rounded-full px-8 py-4 border border-gray-700/30">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium px-6"
                style={{ fontFamily: 'Sora, Inter, sans-serif' }}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Get Started Button */}
          <div>
            <button
              onClick={() => scrollToSection('#register')}
              className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] px-8 py-3 rounded-full text-white font-medium transition-all duration-200 hover:scale-105 shadow-lg flex items-center space-x-2"
              style={{ fontFamily: 'Sora, Inter, sans-serif' }}
            >
              <span>Register</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="xl:hidden h-full px-4">
          <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
            
            {/* Mobile Logo and Text */}
            <div className="flex items-center">
              <img 
                src="/sdit-logo.jpg" 
                alt="SDIT Logo" 
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  console.log('Mobile logo failed to load');
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="flex flex-col ml-1">
                <span 
                  className="text-white text-base font-bold leading-tight" 
                  style={{ fontFamily: 'LOVELO, Arial, sans-serif' }}
                >
                  SHREE DEVI
                </span>
                <span 
                  className="text-white text-xs font-medium leading-tight" 
                  style={{ fontFamily: 'LOVELO, Arial, sans-serif' }}
                >
                  Institute of Technology
                </span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg transition-all duration-300 z-50 relative"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/90 backdrop-blur-md z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30 pointer-events-auto relative max-w-sm w-full mx-4">
              <div className="text-center">
                <div className="space-y-3 mb-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      onClick={() => scrollToSection(item.href)}
                      className="text-white text-xl font-medium transition-all duration-200 block w-full py-3 px-6 rounded-lg hover:text-purple-300"
                      style={{ fontFamily: 'Sora, Inter, sans-serif' }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
                
                {/* Mobile Get Started Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#register')}
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] px-8 py-3 rounded-full text-white font-medium transition-all duration-200 flex items-center justify-center space-x-2 mx-auto"
                  style={{ fontFamily: 'Sora, Inter, sans-serif' }}
                >
                  <span>Register</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}