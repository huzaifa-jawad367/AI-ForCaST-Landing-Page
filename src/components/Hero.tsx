import React from 'react';
import { Download, Smartphone } from 'lucide-react';
import ForestryCarousel from './ForestryCarousel';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Forestry Image Carousel Background */}
      <ForestryCarousel />
      
      {/* Additional Animated Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            AI-ForCaST
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Your AI-powered Tree Biomass & Carbon Estimator
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Measure height, estimate biomass, and calculate carbon credits — directly from your iPhone
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Smartphone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Coming Soon on the App Store
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;