'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
  animationDuration: number;
}

const HeroSection = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles for background
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 100; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.6 + 0.2,
          animationDelay: Math.random() * 5,
          animationDuration: Math.random() * 4 + 3,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <motion.div 
      className="relative w-full overflow-hidden bg-black"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '25px',
        padding: '180px 40px 100px 40px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full">
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, Math.sin(index) * 30, Math.cos(index) * 20, 0],
              y: [0, Math.cos(index) * 25, Math.sin(index) * 15, 0],
              opacity: [particle.opacity * 0.3, particle.opacity, particle.opacity * 0.5, particle.opacity * 0.8],
              scale: [1, 1.5, 0.8, 1],
            }}
            transition={{
              duration: particle.animationDuration,
              delay: particle.animationDelay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Rotating Circles Background */}
      <div 
        className="absolute flex items-center justify-center"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '406px',
          height: '406px',
          opacity: 0.6,
          filter: 'blur(10px)',
          zIndex: 1
        }}
      >
        {/* Big Circle */}
        <motion.div 
          className="absolute"
          style={{
            width: '406px',
            height: '406px',
            background: 'linear-gradient(135deg, #DF7AFE, #A855F7)',
            borderRadius: '50%',
            opacity: 1,
          }}
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity
          }}
        />

        {/* Small Circle */}
        <motion.div 
          className="absolute"
          style={{
            top: '53px',
            left: '53px',
            width: '300px',
            height: '300px',
            background: 'linear-gradient(135deg, #DF7AFE, #A855F7)',
            borderRadius: '50%',
            opacity: 1,
            zIndex: 2
          }}
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 12,
            ease: 'linear',
            repeat: Infinity
          }}
        />
      </div>

      {/* Large Purple Gradient Background Blob */}
      <motion.div 
        className="absolute"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(129, 74, 200, 0.4) 0%, rgba(129, 74, 200, 0.2) 30%, rgba(129, 74, 200, 0.1) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary Purple Gradient */}
      <motion.div 
        className="absolute"
        style={{
          top: '40%',
          right: '20%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.15) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero Badge */}
      <motion.div 
        className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-full"
        style={{
          backgroundColor: 'rgba(129, 74, 200, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(129, 74, 200, 0.3)',
        }}
        initial={{ 
          opacity: 0, 
          y: 20,
          scale: 0.9 
        }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: 1 
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1]
        }}
        whileHover={{ scale: 1.05 }}
      >
        <span 
          className="text-white font-medium text-sm"
          style={{
            background: 'linear-gradient(135deg, #ffffff, #e0e7ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Coders
        </span>
        <span className="text-white text-sm font-normal">
          Nexus SDIT
        </span>
      </motion.div>

      {/* Content Section */}
      <div 
        className="relative z-10"
        style={{
          width: '100%',
          maxWidth: '1000px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '25px',
          padding: '0',
        }}
      >
        {/* Heading and Subheading */}
        <div 
          className="relative"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            padding: '0',
            overflow: 'visible'
          }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-center font-bold text-white"
            style={{
              width: '100%',
              maxWidth: '900px',
              fontSize: 'clamp(48px, 8vw, 80px)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 50 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0 
            }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Code Quest
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-center"
            style={{
              width: '100%',
              maxWidth: '600px',
              fontSize: '18px',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.8)'
            }}
            initial={{ 
              opacity: 0, 
              y: 30 
            }}
            animate={{ 
              opacity: 1, 
              y: 0 
            }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Management of your events.
          </motion.p>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="relative flex items-center gap-4 mt-8"
          initial={{ 
            opacity: 0, 
            y: 20 
          }}
          animate={{ 
            opacity: 1, 
            y: 0 
          }}
          transition={{
            duration: 0.8,
            delay: 1.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* CTA Button 1 - Get in Touch */}
          <motion.button 
            className="relative flex items-center justify-center font-medium rounded-full transition-all duration-200"
            style={{
              padding: '12px 24px',
              backgroundColor: '#814AC8',
              color: 'white',
              fontSize: '14px',
              border: 'none',
              boxShadow: '0 4px 20px rgba(129, 74, 200, 0.3)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 8px 25px rgba(129, 74, 200, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-2">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
          
          {/* CTA Button 2 - View Services */}
          <motion.button 
            className="relative flex items-center justify-center font-medium rounded-full transition-all duration-200"
            style={{
              padding: '12px 24px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '14px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.15)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            View services
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;