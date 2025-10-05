
'use client';

import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5, ease: 'easeInOut' }}
    >
      <div className="text-center text-white">
        <div className="font-headline text-2xl sm:text-4xl md:text-5xl animate-pulse">
          Loading...
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
