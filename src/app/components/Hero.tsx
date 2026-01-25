import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const heroImages = [
  'https://images.unsplash.com/photo-1656783208368-a7d176736535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBuYXR1cmUlMjB0cmVlc3xlbnwxfHx8fDE3Njg2NTU2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1642265466368-2a491569308a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxhbmRzY2FwZSUyMGVhcnRofGVufDF8fHx8MTc2ODY1NTYzNHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1650793889985-2090d35deb66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZW52aXJvbm1lbnQlMjB3YXRlcnxlbnwxfHx8fDE3Njg2NTU2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
    }, 3500);

    return () => clearInterval(phraseInterval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1C1C1C]">
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
        <div className="text-center text-white max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
              Mother Earth is{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentPhraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="inline-block text-[#90D5B0]"
                >
                  {animatedPhrases[currentPhraseIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-white/90 tracking-wide"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            The future grows from what we nurture now.
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
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
      </motion.div>
    </div>
  );
}