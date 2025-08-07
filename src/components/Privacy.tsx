import React from 'react';
import { Shield, Lock, Trash2, ExternalLink } from 'lucide-react';

const Privacy = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Your Privacy Matters
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're committed to protecting your data and maintaining your trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure Storage</h3>
            <p className="text-gray-400 text-sm">All data is encrypted and stored securely on your device</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No Data Sharing</h3>
            <p className="text-gray-400 text-sm">We never share your data with third parties</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Trash2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Data Control</h3>
            <p className="text-gray-400 text-sm">Delete your data anytime with full control</p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/privacy" 
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-lg font-medium"
          >
            Read our Privacy Policy
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Privacy;