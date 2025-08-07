import React from 'react';

const AppPreview = () => {
  const mockups = [
    { 
      title: 'Sign In View', 
      description: 'Secure authentication',
      image: '/Assets/signin.png'
    },
    { 
      title: 'Dashboard', 
      description: 'Overview of your projects',
      image: '/Assets/dashboard.png'
    },
    { 
      title: 'Scan Result View', 
      description: 'Real-time measurements',
      image: '/Assets/scan-result-view.png'
    },
    { 
      title: 'Survey Projects', 
      description: 'Manage your surveys',
      image: '/Assets/survey-projects.png'
    },
    { 
      title: 'Settings', 
      description: 'Customize your experience',
      image: '/Assets/settings.png'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            App Preview
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the intuitive interface designed for forestry professionals and researchers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {mockups.map((mockup, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative bg-gray-900 rounded-3xl p-4 shadow-2xl group-hover:shadow-emerald-500/20 transition-all duration-300 transform group-hover:-translate-y-2">
                {/* iPhone Frame */}
                <div className="bg-gray-700 rounded-2xl p-1">
                  <div className="bg-gray-900 rounded-xl aspect-[9/19] flex items-center justify-center relative overflow-hidden">
                    {/* Screen Content with Actual Image */}
                    <div className="absolute inset-2 rounded-lg overflow-hidden">
                      <img 
                        src={mockup.image} 
                        alt={mockup.title}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-lg text-white mb-2">{mockup.title}</h3>
                  <p className="text-gray-400 text-sm">{mockup.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreview;