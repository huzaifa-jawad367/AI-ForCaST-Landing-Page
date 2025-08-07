import React from 'react';
import { Radar, Settings, FolderTree, Calculator, Wifi, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Radar,
      title: 'Height Estimation using LiDAR and ARKit',
      description: 'Advanced sensor fusion technology for precise tree height measurements'
    },
    {
      icon: Settings,
      title: 'Manual species and diameter input',
      description: 'Comprehensive database of tree species with customizable parameters'
    },
    {
      icon: FolderTree,
      title: 'Project-based data management',
      description: 'Organize surveys into projects for efficient data collection and analysis'
    },
    {
      icon: Calculator,
      title: 'Real-time biomass & carbon content output',
      description: 'Instant calculations based on scientific algorithms and species data'
    },
    {
      icon: Wifi,
      title: 'Offline functionality',
      description: 'Work in remote locations without internet connectivity'
    },
    {
      icon: Shield,
      title: 'User privacy and secure storage',
      description: 'Your data is encrypted and stored securely on your device'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed for accurate forest measurement and carbon assessment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;