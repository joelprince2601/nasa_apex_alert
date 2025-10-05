
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Target, ClipboardList, Database, BrainCircuit, Cpu, AreaChart, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import SmoothHover from '@/components/ui/smooth-hover';

const MotionCard = motion(Card);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const sections = [
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: 'Project Mission',
    content: `This project addresses the critical need for shark habitat protection by developing a predictive mathematical framework that identifies shark foraging hotspots using NASA satellite data. By correlating oceanographic parameters visible from space with shark movement patterns, we enable data-driven conservation strategies and improved coastal management.`,
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: 'NASA Data Sources',
    content: `We integrate multiple NASA satellite missions: PACE Mission for phytoplankton and chlorophyll data, MODIS-Aqua for sea surface temperature (20+ years of data), and SWOT Mission for ocean current velocity and direction. This multi-parameter approach provides unprecedented insight into marine ecosystems.`,
  },
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    title: 'Machine Learning Framework',
    content: `Our Random Forest ensemble model achieved 87.3% training accuracy and 81.7% test accuracy. The model analyzes 24 environmental parameters including chlorophyll concentration, temperature gradients, and current patterns to predict shark foraging behavior with 79% precision and 83% recall.`,
  },
  {
    icon: <ClipboardList className="h-6 w-6 text-primary" />,
    title: 'Conservation Impact',
    content: `73 million sharks are killed annually through fishing and bycatch, with 25% of species threatened with extinction. Our solution enables proactive habitat protection by identifying critical areas before sharks arrive, supporting marine protected areas, and reducing bycatch through real-time hotspot alerts.`,
  },
  {
    icon: <AreaChart className="h-6 w-6 text-primary" />,
    title: 'Key Innovations',
    content: `Mathematical predictive model linking satellite-observed environmental factors to shark foraging behavior. Multi-parameter correlation analysis combining chlorophyll concentration, sea surface temperature, and ocean currents. Next-generation smart tag concept for real-time feeding behavior tracking.`,
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: 'Technology Stack',
    content: 'Python 3.x, NumPy, Pandas, SciPy, Scikit-learn, TensorFlow/PyTorch, XGBoost, GDAL, Rasterio, GeoPandas, Matplotlib, Plotly/Folium, D3.js, NASA Earthdata Cloud',
  },
];

export default function InfoPage() {
  return (
    <motion.div
      className="relative min-h-screen w-full overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-slate-200 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8 inline-flex items-center text-primary transition-all duration-300 hover:text-blue-400 hover:scale-105">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <SmoothHover text="Back to Home" />
        </Link>
        
        <h1 className="font-headline text-3xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:text-4xl md:text-5xl animate-glow">
          NASA Shark Conservation
        </h1>
        <h2 className="mt-2 font-headline text-xl text-primary sm:text-2xl">
          Using Satellite Data to Protect Marine Ecosystems
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sections.map((section, i) => (
            <MotionCard
              key={section.title}
              className="bg-neutral-900/50 backdrop-blur-[1px] border-neutral-700/50 transform transition-all duration-300 hover:bg-neutral-900/70 hover:scale-105 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/20"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                {section.icon}
                <CardTitle className="text-xl font-headline text-white">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-slate-300">
                <p>{section.content}</p>
              </CardContent>
            </MotionCard>
          ))}
        </div>

        {/* Marine Food Chain Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Card className="bg-neutral-900/50 backdrop-blur-[1px] border-neutral-700/50 transform transition-all duration-300 hover:bg-neutral-900/70 hover:scale-105 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl font-headline text-white">Marine Food Chain Dynamics</CardTitle>
              <p className="text-slate-300 mt-2">Understanding the multi-trophic relationships that drive our predictive model</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <Image
                  src="/images/learn_cycle.jpg"
                  alt="Marine Food Chain - From Phytoplankton to Sharks"
                  width={800}
                  height={500}
                  className="rounded-lg border-2 border-primary/30 shadow-2xl object-cover"
                />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-primary">Multi-Trophic Prediction Challenge</h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-4xl mx-auto">
                  Our NASA ML model tackles the complex challenge of predicting apex predator locations (sharks) from base-level observations (phytoplankton).
                  The model learns implicit relationships through the marine food web: <span className="text-primary font-semibold">Phytoplankton → Zooplankton → Small Fish → Large Fish → Sharks</span>.
                  By analyzing satellite-visible phytoplankton blooms, sea surface temperatures, and ocean currents, we can predict where sharks are most likely to forage,
                  even though they're several trophic levels removed from what satellites can directly observe.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-2">Primary Producers</h4>
                    <p className="text-xs sm:text-sm text-slate-300">Phytoplankton visible from NASA satellites form the base of the marine food web</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-2">Trophic Transfer</h4>
                    <p className="text-xs sm:text-sm text-slate-300">Energy flows through multiple levels: zooplankton, small fish, and large fish</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-2">Apex Predators</h4>
                    <p className="text-xs sm:text-sm text-slate-300">Sharks concentrate where the entire food web converges in optimal conditions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
