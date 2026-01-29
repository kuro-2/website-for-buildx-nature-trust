import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const heroImages = [
  '/assets/images/hero1.jpg',
  '/assets/images/hero2.jpg',
  '/assets/images/hero3.jpg',
  '/assets/images/hero4.jpg',
];

const animatedPhrases = [
  'our origin',
  'our responsibility',
  'our source',
  'our future',
  'our silent healer',
  'our shared home',
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % animatedPhrases.length);
    }, 3500); // Original faster timing

    return () => clearInterval(phraseInterval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#103713] hero">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentImageIndex]}
            alt="Nature"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center text-[#FFFDF5] max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
              Mother Earth is{' '}
              <span className="inline-block text-[#628B35] whitespace-nowrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentPhraseIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    {animatedPhrases[currentPhraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-[#FFFDF5]/90 tracking-wide"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            The future grows from what we nurture now.
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div> */}
    </div>
  );
}