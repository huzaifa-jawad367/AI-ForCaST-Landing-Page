import React from 'react';
import { ArrowLeft, Shield, Eye, Trash2, FileText, Mail, Github } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-emerald-400" />
              <h1 className="text-2xl font-bold">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Last Updated */}
        <div className="bg-gray-800 rounded-lg p-4 mb-8 border border-gray-700">
          <p className="text-gray-400">
            <strong>Last updated:</strong> June 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to <strong className="text-emerald-400">AI-ForCaST</strong> (the "App"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our app for AR-based height measurement and biomass estimation.
          </p>
        </section>

        {/* Section 1: Information We Collect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400 flex items-center gap-3">
            <Eye className="w-8 h-8" />
            1. Information We Collect
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">1.1 Data You Provide</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Camera and Sensor Data:</strong> To perform height measurements, the App uses your device's camera and motion sensors. No images or raw sensor data are stored or transmitted off your device.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Optional Feedback:</strong> If you choose to send feedback or crash reports, you may provide text descriptions or allow the App to include basic device diagnostics (e.g., device model, OS version).
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">1.2 Automatically Collected Data</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Usage Analytics:</strong> We may collect anonymized usage statistics (such as feature usage counts and session duration) to improve the App's performance. This data does not identify you personally.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400 flex items-center gap-3">
            <FileText className="w-8 h-8" />
            2. How We Use Your Information
          </h2>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Core Functionality:</strong> Camera and sensor input is used in real-time on-device to calculate measurements; no measurement data leaves your device unless you explicitly export or share results.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>App Improvement:</strong> Anonymized analytics help us understand usage patterns and fix bugs.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Support:</strong> Feedback data is used to troubleshoot issues and improve user experience.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Data Sharing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">3. Data Sharing and Disclosure</h2>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Third Parties:</strong> We do not sell, trade, or otherwise transfer your personal information to outside parties.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Data Security */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400 flex items-center gap-3">
            <Shield className="w-8 h-8" />
            4. Data Security
          </h2>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 leading-relaxed">
              We implement reasonable security measures to protect data processed by the App. However, no method of electronic storage or transmission is completely secure.
            </p>
          </div>
        </section>

        {/* Section 5: Children's Privacy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">5. Children's Privacy</h2>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 leading-relaxed">
              The App is intended for users aged 13 and above. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us to request deletion.
            </p>
          </div>
        </section>

        {/* User Privacy Choices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400 flex items-center gap-3">
            <Trash2 className="w-8 h-8" />
            User Privacy Choices
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Opting Out of Usage Analytics</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>In-App Setting:</strong> Navigate to Settings → Privacy within the App and toggle "Share Usage Analytics" off.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Email Request:</strong> Email us with the subject line "Analytics Opt-Out" to request that we cease all analytics collection on your device.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Disabling Crash Reporting & Feedback Diagnostics</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>In-App Setting:</strong> Under Settings → Privacy → Crash Reports, toggle "Send Diagnostic Data" off.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Manual Feedback:</strong> Use the "Report Issue" button in the App's Help screen and deselect "Include Device Details".
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Data Deletion Requests</h3>
              <p className="text-gray-300 mb-4">
                If you would like all feedback, analytics, or diagnostic records associated with your usage removed:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>Email us with the subject "Data Deletion Request"</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>Provide your Apple ID email and approximate date of join</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>We will confirm completion of your request within 30 days</div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Accessing & Correcting Your Data</h3>
              <p className="text-gray-300 mb-4">
                You may request a summary of any anonymized analytics or feedback you have submitted:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>Email us with "Data Access Request"</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>We will compile any records and send you a report within 30 days</div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Changes to Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">6. Changes to This Policy</h2>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last updated" date.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400 flex items-center gap-3">
            <Mail className="w-8 h-8" />
            7. Contact Us
          </h2>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 mb-6 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a 
                  href="mailto:huzaifajawad01@gmail.com" 
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                >
                  huzaifajawad01@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <Github className="w-5 h-5 text-emerald-400" />
                <a 
                  href="https://github.com/huzaifa-jawad367/AI_FORECAST_App" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You Note */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-lg p-8 border border-emerald-500/30">
            <p className="text-lg text-gray-300 leading-relaxed">
              Thank you for choosing <strong className="text-emerald-400">AI-ForCaST</strong>. We respect your privacy and strive to give you control over your data.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPage;