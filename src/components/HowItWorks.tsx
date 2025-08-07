import React from 'react';
import { MapPin, Move, Target, Calculator } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MapPin,
      title: 'Mark the trunk',
      description: 'Position your device and mark the base of the tree trunk'
    },
    {
      icon: Move,
      title: 'Walk back, mark bottom',
      description: 'Step back to get optimal distance and mark the bottom reference point'
    },
    {
      icon: Target,
      title: 'Mark the top',
      description: 'Aim your device at the tree top and mark the highest point'
    },
    {
      icon: Calculator,
      title: 'Get biomass estimate',
      description: 'Enter species and diameter to receive accurate biomass calculations'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            How Height Measurement Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our advanced LiDAR technology makes tree measurement simple and accurate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto group-hover:bg-emerald-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-transparent"></div>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;