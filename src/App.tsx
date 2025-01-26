import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  const maskVariants = {
    hidden: { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    visible: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  return (
    <div className="bg-dark-primary text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Hero3D />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-primary" />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500 rounded-full blur-lg opacity-50"></div>
              <img
                src="/peace-wings.png"
                alt="RCOP Logo"
                className="relative w-48 h-48 mx-auto mb-8 animate-float"
                style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={maskVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-cinzel font-bold mb-6 text-gradient">
              RCOP Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Fostering innovation, cultural exchange, and global connectivity through technology-driven solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-golden-primary text-dark-primary rounded-full font-cinzel font-semibold hover:bg-golden-secondary transition-all duration-300"
              onClick={() => window.open("https://culturalxchange.jimdosite.com/", "_blank")}
            >
              Join Our Mission
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border border-golden-primary/30 rounded-full font-cinzel font-semibold hover:bg-golden-primary/10 transition-all duration-300"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-golden-primary animate-bounce" />
        </motion.div>
      </section>

      <Features />
      <Timeline />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;