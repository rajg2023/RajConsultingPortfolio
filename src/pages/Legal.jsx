import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Legal = () => {
  const [activeSection, setActiveSection] = useState('privacy');
  
  // Section configurations with different colors
  const sections = {
    privacy: {
      id: 'privacy',
      title: 'Privacy Policy',
      color: 'purple',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    terms: {
      id: 'terms',
      title: 'Terms of Service',
      color: 'blue',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    data: {
      id: 'data',
      title: 'Data Collection',
      color: 'green',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    ai: {
      id: 'ai',
      title: 'AI Disclosure',
      color: 'indigo',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Legal Page Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
              Rajiv Giri - Independent Technology Consulting
            </Link>
            <nav className="flex items-center space-x-1 sm:space-x-4">
              {Object.values(sections).map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(section.id);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                  style={{
                    backgroundColor: activeSection === section.id 
                      ? ({
                          purple: '#f3e8ff',
                          blue: '#dbeafe',
                          green: '#dcfce7',
                          indigo: '#e0e7ff'
                        }[section.color] || '#f3f4f6')
                      : ({
                          purple: '#f5f3ff',
                          blue: '#eff6ff',
                          green: '#f0fdf4',
                          indigo: '#eef2ff'
                        }[section.color] || '#f9fafb'),
                    color: activeSection === section.id 
                      ? ({
                          purple: '#6b21a8',
                          blue: '#1d4ed8',
                          green: '#166534',
                          indigo: '#4338ca'
                        }[section.color] || '#111827')
                      : ({
                          purple: '#7c3aed',
                          blue: '#3b82f6',
                          green: '#10b981',
                          indigo: '#6366f1'
                        }[section.color] || '#4b5563')
                  }}
                >
                  <span className="w-5 h-5">{section.icon}</span>
                  {section.title}
                </a>
              ))}
              <Link 
                to="/" 
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors flex items-center gap-2"
                style={{
                  backgroundColor: '#f9fafb',
                  color: '#4b5563'
                }}
              >
                Back to Home
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 px-4 pt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Legal Information</h1>
          <p className="text-lg text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          {/* Update Notice Banner */}
          <div className="max-w-2x2 mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  This legal page is currently being updated and may not be fully accurate. For the most current information, please <a href="mailto:contact@example.com" className="font-medium text-yellow-700 underline hover:text-yellow-600">contact us</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 w-full">
          {/* Active Section Content */}
          {activeSection === 'privacy' && (
            <div className={`border-t-4 border-${sections.privacy.color}-500`}>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 bg-${sections.privacy.color}-50 text-${sections.privacy.color}-600`}>
                    {sections.privacy.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                </div>
            <div id="privacy" className="prose max-w-none">
              <p className="mb-4">
                I, Rajiv Giri, operate the this website as a personal "Service" and not as "Company".
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Information Collection And Use</h3>
              <p className="mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-2">Types of Data Collected</h4>
              <h5 className="font-medium mt-3 mb-1">Personal Data</h5>
              <p className="mb-4">
                While using my Service, I may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").
              </p>

              <h4 className="text-lg font-semibold mt-6 mb-4">Use of Data</h4>
              <p className="mb-2">This website uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support</li>
                <li>To gather analysis for improving our Service</li>
              </ul>
            </div>
              </div>
            </div>
          )}

          {activeSection === 'terms' && (
            <div className={`border-t-4 border-${sections.terms.color}-500`}>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 bg-${sections.terms.color}-50 text-${sections.terms.color}-600`}>
                    {sections.terms.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
                </div>
                <div id="terms" className="prose max-w-none">
                  <h3 className="text-xl font-semibold mt-6 mb-4">AI & Open-Source Compliance</h3>
                  <p className="mb-4">
                    I, <strong>Rajiv Giri</strong> use a <strong>VibeCoding</strong> approach — combining human creativity with ethical AI assistance — to efficiently develop digital projects. All generated code, assets, and written content are original works or adapted under valid licenses, ensuring full compliance with applicable third-party terms and intellectual property laws.
                  </p>

                  <h3 className="text-xl font-semibold mt-8 mb-4">General Information & Project Terms</h3>
                  <ul className="list-disc pl-6 space-y-4 mb-6">
                    <li>
                      I utilize artificial intelligence technologies, internet search engines, open-source tools, and frameworks for project completion. By engaging with me, you acknowledge and agree to the privacy, usage, and licensing terms of such third-party and open-source solutions.
                    </li>
                    <li>
                      Use of any proprietary, commercial, or non-open-source software must be arranged and paid for by the client. I am not responsible or liable for licensing or costs of such tools unless agreed otherwise in writing.
                    </li>
                    <li>
                      Project development is generally carried out on test data and non-production environments. Deployment on client production infrastructure is not included unless explicitly contracted. Clients are responsible for ensuring production-readiness and deployment requirements.
                    </li>
                    <li>
                      Clients must review and approve delivered project samples or prototypes. Payment is generally contingent upon client satisfaction with the sample work. If a client does not approve or wish to continue with a sample, payment is not required unless prior written communication establishes other terms.
                    </li>
                    <li>
                      Project work samples not approved by the client do not entitle me to payment, unless explicitly communicated and agreed to in advance.
                    </li>
                    <li>
                      Clients typically initiate contact via email or phone, as this Site does not provide a contact form. Any personal data collected through emails or phone calls will be processed only with the client's consent and for the purpose of responding to inquiries or providing services.
                    </li>
                    <li>
                      I am not responsible or liable for data collection by third-party services associated with this Site (such as web hosting, analytics, email providers, voice/text services) which may use cookies or collect personal data. Clients and visitors should review relevant third-party privacy policies.
                    </li>
                  </ul>
                  <p className="mb-4">
                    For further clarification or to discuss specific project terms, please reach out via email or phone.
                  </p>

                  <h3 className="text-xl font-semibold mt-8 mb-4">Terms of Service</h3>
                  <p className="mb-4">
                    Please read these Terms of Service ("Terms") carefully before using the {window.location.hostname} website.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h3>
              <p className="mb-4">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">2. Use License</h3>
              <p className="mb-4">
                Permission is granted to temporarily access the materials on this website for personal, non-commercial transitory viewing only.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">3. User Responsibilities</h3>
              <p className="mb-2">As a user of the Service, you agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not engage in any activity that disrupts the Service</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>
              </div>
            </div>
          )}

          {activeSection === 'data' && (
            <div className={`border-t-4 border-${sections.data.color}-500`}>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 bg-${sections.data.color}-50 text-${sections.data.color}-600`}>
                    {sections.data.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Collection Policy</h2>
                </div>
            <div className="prose max-w-none">
              <p className="mb-4">
                This Data Collection Policy explains how this website collects, uses, and protects your information.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">1. Information We Collect</h3>
              <p className="mb-2">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Personal identification information</li>
                <li>Browser and device information</li>
                <li>Usage data and analytics</li>
                <li>Cookies and tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">2. How We Use Your Data</h3>
              <p className="mb-2">We use the collected data for various purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes</li>
                <li>To provide customer support</li>
                <li>To gather analysis for improvements</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">3. Your Data Protection Rights</h3>
              <p className="mb-2">You may have the following rights regarding your data:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The right to access, update, or delete your information</li>
                <li>The right of rectification</li>
                <li>The right to object</li>
                <li>The right to data portability</li>
              </ul>
            </div>
              </div>
            </div>
          )}

          {/* AI Disclosure Section */}
          {activeSection === 'ai' && (
            <div className={`border-t-4 border-${sections.ai.color}-500`}>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 bg-${sections.ai.color}-50 text-${sections.ai.color}-600`}>
                    {sections.ai.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Portfolio AI Disclosure</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    <strong>Technology and AI Usage Disclosure</strong>
                  </p>
                  <p className="mb-4">
                    This website and all showcased client projects were <strong>VibeCoded</strong> using Windsurf and Visual Studio Code, 
                    refined with AI-assisted tools such as Perplexity AI, OpenAI models (ChatGPT), Google Gemini, 
                    Anthropic Claude, Meta LLaMA, GitHub Copilot, Hugging Face models, and other open-source frameworks.
                  </p>
                  <p className="mb-4">
                    All integrations comply with the respective open-source and commercial platform terms of service. 
                    Each project represents original customization, design, and technical problem-solving by me. 
                    AI tools are used to accelerate ideation, code drafting, and testing but all outputs are reviewed, 
                    modified, and deployed with human oversight.
                  </p>
                  <p className="mb-4">
                    This website acts exclusively as a personal portfolio and independent consulting showcase for me. 
                    The displayed projects represent consulting capabilities and do not imply endorsement or ongoing client partnerships.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Legal;
