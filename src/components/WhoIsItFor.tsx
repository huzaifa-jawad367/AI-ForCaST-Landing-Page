import React from 'react';
import { TreePine, Building, Users, Leaf, GraduationCap } from 'lucide-react';

const WhoIsItFor = () => {
  const audiences = [
    {
      icon: TreePine,
      title: 'Forestry departments',
      description: 'Government agencies managing forest resources'
    },
    {
      icon: Leaf,
      title: 'Environmental NGOs',
      description: 'Organizations focused on conservation and sustainability'
    },
    {
      icon: Building,
      title: 'Urban planners',
      description: 'City planners managing urban forest canopy'
    },
    {
      icon: Users,
      title: 'Carbon offset and climate scientists',
      description: 'Researchers studying carbon sequestration'
    },
    {
      icon: GraduationCap,
      title: 'Students and researchers',
      description: 'Academic institutions and research organizations'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Who Is It For
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Designed for professionals and researchers in environmental and forestry sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div key={index} className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 border border-gray-700 hover:border-emerald-500/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {audience.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;