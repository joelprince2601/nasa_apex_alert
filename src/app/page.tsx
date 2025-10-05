
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FuturisticButton from '@/components/ui/futuristic-button';

export default function Home() {

  return (
    <motion.div 
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >


      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/images/bg.mp4"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[0px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
        <h1 
          className="font-headline text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl animate-glow flex flex-col sm:flex-row flex-wrap justify-center overflow-hidden"
        >
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">APEX</span>
          <span className="sm:ml-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            ALERT
          </span>
        </h1>
        <p className="mt-4 px-4 text-xs text-slate-300 sm:text-sm md:text-base font-nav">
          Predictive Shark Conservation
        </p>
        <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:space-x-12 font-nav text-base text-white sm:text-lg">
          <FuturisticButton text="Learn" href="/info" />
          <FuturisticButton text="Map" href="/map" />
          <FuturisticButton text="Model" href="/brain" />
          <FuturisticButton text="Hardware" href="/sharktag" />
        </div>
      </div>
      


    </motion.div>
  );
}
