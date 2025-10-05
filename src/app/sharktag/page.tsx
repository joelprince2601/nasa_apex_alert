
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Tag, Cpu, Satellite, Thermometer, Gauge, Battery, HardDrive, RadioTower, BatteryFull, Fan, Waves, CircuitBoard } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import SmoothHover from '@/components/ui/smooth-hover';
import Image from 'next/image';

const hardwareComponents = [
    {
        icon: <Cpu className="h-8 w-8 text-primary" />,
        name: "GPS Module",
        spec: "Location when surfacing",
        description: "Provides precise latitude and longitude coordinates transmitted via satellite uplink during surface events."
    },
    {
        icon: <Gauge className="h-8 w-8 text-primary" />,
        name: "Pressure Sensor",
        spec: "Depth profiling (0-1000m)",
        description: "Captures detailed depth profiles to understand diving behavior and habitat preferences."
    },
    {
        icon: <Thermometer className="h-8 w-8 text-primary" />,
        name: "Temperature Sensors",
        spec: "External & Internal Proximity",
        description: "External sensor measures ambient water temperature; internal sensor detects stomach temperature changes for feeding detection."
    },
    {
        icon: <Satellite className="h-8 w-8 text-primary" />,
        name: "3-Axis Accelerometer",
        spec: "Movement & Feeding Detection",
        description: "Detects burst swimming patterns, jaw-snap motions, and post-feeding rest periods for behavioral analysis."
    },
    {
        icon: <RadioTower className="h-8 w-8 text-primary" />,
        name: "Satellite Communication",
        spec: "Argos or Iridium System",
        description: "Real-time data transmission to cloud servers every surfacing event with ~1KB data bandwidth."
    },
    {
        icon: <HardDrive className="h-8 w-8 text-primary" />,
        name: "Magnetometer",
        spec: "Heading & Orientation",
        description: "Provides directional data and orientation information to complement movement analysis."
    },
    {
        icon: <BatteryFull className="h-8 w-8 text-primary" />,
        name: "Power System",
        spec: "Lithium Battery + Solar",
        description: "2-3 year operational life with lithium battery pack, solar cell supplement, and low-power sleep modes."
    },
    {
        icon: <Waves className="h-8 w-8 text-primary" />,
        name: "Conductivity Sensor",
        spec: "Salinity Measurement",
        description: "Optional sensor for measuring water salinity to provide additional environmental context."
    },
    {
        icon: <CircuitBoard className="h-8 w-8 text-primary" />,
        name: "Physical Design",
        spec: "12cm × 4cm × 3cm",
        description: "Streamlined 80g design, neutrally buoyant, dorsal fin mount or surgical implant attachment."
    },
    {
        icon: <Fan className="h-8 w-8 text-primary" />,
        name: "Feeding Algorithm",
        spec: "AI Pattern Recognition",
        description: "Advanced algorithm correlates accelerometer patterns with temperature changes to detect and timestamp feeding events."
    }
];

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

export default function SharkTagPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-y-auto p-4 sm:p-6 md:p-8">
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
        <Link href="/" className="inline-flex items-center text-primary transition-all duration-300 hover:text-blue-400 hover:scale-105">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <SmoothHover text="Back to Home" />
        </Link>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center py-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-headline text-3xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:text-4xl md:text-5xl animate-glow">
          NASA Smart Shark Tag
        </h1>
        <h1 className="font-headline text-3xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:text-4xl md:text-5xl animate-glow">
          Next-Generation Marine Telemetry
        </h1>
        <p className="mt-2 text-sm text-slate-300 sm:text-base md:text-lg max-w-3xl">
          Revolutionary feeding detection technology that tracks not only location but also what sharks eat, providing real-time validation for NASA satellite predictions.
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image 
            src="/images/circuit_image.png"
            alt="Conceptual Shark Tag Design"
            width={600}
            height={400}
            data-ai-hint="futuristic device"
            className="rounded-lg border-2 border-primary/30 shadow-2xl neon-glow object-cover"
          />
        </motion.div>
        <div className="text-slate-300 space-y-4 text-center lg:text-left">
            <h2 className="font-headline text-2xl text-primary">Hardware Innovation</h2>
            <p>Current shark tags provide GPS location only with limited battery life. Our enhanced design revolutionizes marine telemetry by detecting feeding behavior in real-time through accelerometer pattern recognition and temperature correlation.</p>
            <p>This breakthrough enables validation of NASA satellite predictions and provides unprecedented dietary insights for shark conservation, extending operational life to 2-3 years with advanced power management.</p>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto py-16">
          <h2 className="font-headline text-3xl text-center text-white mb-10 animate-glow">Hardware & Systems Architecture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {hardwareComponents.map((component, i) => (
                  <motion.div
                    key={component.name}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Card className="h-full bg-neutral-900/50 backdrop-blur-[1px] border-neutral-700/50 text-slate-200 transform transition-all duration-300 hover:bg-neutral-900/70 hover:scale-105 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/20">
                        <CardHeader className="items-center text-center">
                            {component.icon}
                            <CardTitle className="text-lg font-headline text-white mt-4">{component.name}</CardTitle>
                            <p className="text-sm text-primary">{component.spec}</p>
                        </CardHeader>
                        <CardContent className="text-center text-sm text-slate-300">
                            <p>{component.description}</p>
                        </CardContent>
                    </Card>
                  </motion.div>
              ))}
          </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto py-16 text-slate-200">
        <h2 className="font-headline text-3xl text-center font-bold text-white mb-10 animate-glow">NASA Satellite Conservation: The Complete Solution</h2>

        <div className="space-y-8 text-sm sm:text-base text-slate-300">
          <div>
            <h3 className="font-headline text-xl text-primary mb-2">The Challenge: Protecting 73 Million Sharks Annually</h3>
            <p>73 million sharks are killed annually through fishing and bycatch, with 25% of species threatened with extinction. Traditional tracking methods only show where sharks are, not why they're there or what they're eating. Our NASA-powered solution bridges the gap between space-based ocean observation and marine predator behavior, enabling proactive habitat protection before sharks arrive at critical feeding areas.</p>
          </div>
          
          <div>
            <h3 className="font-headline text-xl text-primary mb-2">NASA Data Integration: Multi-Mission Approach</h3>
            <p>Our solution integrates three cutting-edge NASA satellite missions: PACE Mission (launched February 2024) provides phytoplankton and chlorophyll data at 1km resolution; MODIS-Aqua delivers 20+ years of sea surface temperature data; and SWOT Mission (launched December 2022) offers unprecedented ocean current measurements.</p>
            <p className="mt-2">This multi-parameter approach creates a comprehensive picture of marine ecosystems, connecting satellite-visible environmental factors to apex predator behavior through advanced machine learning algorithms.</p>
          </div>

          <div>
            <h3 className="font-headline text-xl text-primary mb-2">Machine Learning Breakthrough: 81.7% Accuracy</h3>
            <p>Our Random Forest ensemble model processes 24 environmental parameters to achieve 87.3% training accuracy and 81.7% real-world test accuracy. The model identifies that chlorophyll concentration (28% importance), sea surface temperature (24% importance), and temperature gradients (18% importance) are the strongest predictors of shark foraging behavior.</p>
            <p className="mt-2">With 79% precision and 83% recall, the system successfully minimizes false positives while capturing actual shark presence, enabling reliable conservation decisions and bycatch reduction strategies.</p>
          </div>

          <div>
            <h3 className="font-headline text-xl text-primary mb-2">Real-Time Applications: From Prediction to Protection</h3>
            <p>The system generates daily automated predictions, downloading latest NASA satellite data at 06:00 UTC and publishing updated hotspot maps by 10:00 UTC. This enables real-time applications including marine protected area planning, fishing fleet alerts to reduce bycatch, and research expedition optimization.</p>
            <p className="mt-2">Our API provides 30-day forecasting capability with confidence intervals, supporting evidence-based policy making and sustainable fishing practices that could reduce shark bycatch by 20-40%.</p>
          </div>

          <div>
            <h3 className="font-headline text-xl text-primary mb-2">Smart Tag Innovation: Feeding Detection Technology</h3>
            <p>The NASA Smart Shark Tag represents the next evolution in marine telemetry. Unlike current tags that only provide location data, our design detects feeding events through accelerometer pattern recognition and stomach temperature monitoring, providing real-time validation of satellite predictions.</p>
            <p className="mt-2">This revolutionary approach enables unprecedented dietary insights, extends operational life to 2-3 years, and creates a feedback loop that continuously improves our NASA satellite-based predictions, advancing both marine science and conservation efforts.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
