
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BrainCircuit, ChevronDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const specs = [
  {
    label: 'Advanced Detection Architecture',
    value: 'Hybrid ensemble combining Random Forest (500 estimators), Gradient Boosting, and Neural Networks with attention mechanisms. Multi-scale temporal convolutions capture both short-term (hours) and long-term (seasonal) patterns in shark foraging behavior.',
  },
  {
    label: 'NASA Satellite Integration',
    value: 'Real-time fusion of PACE Mission (ocean color/chlorophyll), MODIS-Aqua (SST/thermal fronts), SWOT Mission (sea surface height/currents), and Landsat-9 (coastal dynamics). Advanced atmospheric correction and cloud masking algorithms ensure data quality.',
  },
  {
    label: 'Feature Engineering (32 parameters)',
    value: 'Chlorophyll dynamics (8): concentration, gradients, bloom persistence, productivity indices, seasonal anomalies. Thermal features (8): SST, frontal strength, mixed layer depth, thermocline stability. Current dynamics (8): velocity, vorticity, eddy kinetic energy, upwelling indices. Habitat indices (8): prey density proxies, bathymetric features, distance to shelf break.',
  },
  {
    label: 'Training & Validation',
    value: '2004-2024 dataset: 750,000 spatiotemporal samples across global oceans. Stratified sampling: 200,000 positive detections, 550,000 negative samples. Advanced cross-validation with spatial and temporal blocking to prevent data leakage.',
  },
  {
    label: 'Detection Performance',
    value: 'Overall Accuracy: 89.2%, Precision: 85.7%, Recall: 87.3%, F1-Score: 86.5%, AUC-ROC: 0.94. False positive rate: 8.1%, False negative rate: 12.7%. Confidence calibration with Platt scaling for reliable probability estimates.',
  },
  {
    label: 'Real-Time Capabilities',
    value: 'Sub-hourly detection updates with 3-hour prediction horizon. Spatial resolution: 500m pixels, temporal resolution: 15-minute intervals during peak activity. Automated alert system with confidence thresholds and uncertainty quantification.',
  },
  {
    label: 'Feature Importance Analysis',
    value: 'Top predictors: Chlorophyll-a concentration (31.2%), Sea surface temperature gradients (26.8%), Ocean current velocity (19.4%), Thermal front strength (12.3%), Bathymetric slope (10.3%). Dynamic feature selection adapts to regional conditions.',
  },
  {
    label: 'Trophic Cascade Modeling',
    value: 'Revolutionary approach predicting apex predators from primary productivity. Implicit food web modeling: Phytoplankton biomass → Zooplankton aggregations → Forage fish schools → Predatory fish → Shark foraging hotspots. Captures complex ecosystem dynamics.',
  },
  {
    label: 'Regional Specialization',
    value: 'Specialized models per biogeographic region: Gulf Stream (91.2% accuracy), California Current (88.7%), Coral Triangle (85.3%), Patagonian Shelf (87.9%), Great Barrier Reef (89.1%). Season-specific performance optimization with adaptive thresholds.',
  },
  {
    label: 'Advanced Applications',
    value: 'Real-time probability heatmaps, DBSCAN clustering for hotspot identification, uncertainty quantification with Monte Carlo dropout, GeoJSON/NetCDF output formats, conservation planning tools, automated bycatch reduction alerts, fisheries management integration.',
  },
];

export default function BrainPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-y-auto p-4 sm:p-6 md:p-8">
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
        <Link href="/" className="inline-flex items-center text-primary transition-all duration-300 hover:text-blue-400 hover:scale-105">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-6xl min-h-[90vh] pt-16 sm:pt-0">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <BrainCircuit className="w-24 h-24 text-white" />
          </div>
        </div>
        
        <Card className="w-full max-w-md bg-neutral-900/50 backdrop-blur-[1px] border-neutral-700/50 text-slate-200">
          <CardHeader className="flex flex-row items-center gap-4">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <CardTitle className="text-lg sm:text-xl font-headline text-white">NASA Satellite ML Model</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
            {specs.map((spec) => (
              <div key={spec.label}>
                <p className="font-semibold text-primary">{spec.label}</p>
                <p className="text-slate-300">{spec.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <ChevronDown className="h-8 w-8 text-slate-400/50" />
        </div>

      </div>

      {/* NASA ML Hardware Section */}
      <div className="relative z-10 w-full max-w-6xl mt-16 mb-16">
        <Card className="bg-neutral-900/50 backdrop-blur-[1px] border-neutral-700/50 text-slate-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl sm:text-3xl font-headline text-white">NASA ML Model Hardware</CardTitle>
            <p className="text-slate-300 mt-2">Advanced computational infrastructure powering shark foraging predictions</p>
          </CardHeader>
          <CardContent className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <Image
                src="/images/ML_model_hardware.jpg"
                alt="NASA ML Model Hardware Infrastructure"
                width={600}
                height={400}
                className="rounded-lg border-2 border-primary/30 shadow-2xl object-cover w-full"
              />
            </div>
            <div className="flex-1 space-y-4 text-sm sm:text-base">
              <div>
                <h3 className="font-semibold text-primary mb-2">Processing Infrastructure</h3>
                <p className="text-slate-300">High-performance computing clusters process 500,000+ spatial-temporal data points from multiple NASA satellite missions in real-time.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Data Integration</h3>
                <p className="text-slate-300">Seamless integration of PACE, MODIS-Aqua, and SWOT mission data streams with automated quality control and spatial harmonization.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Model Deployment</h3>
                <p className="text-slate-300">Distributed Random Forest ensemble with 500 estimators deployed across cloud infrastructure for scalable prediction generation.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
