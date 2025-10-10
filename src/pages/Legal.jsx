import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Legal = () => {
  const [activeSection, setActiveSection] = useState('privacy');
  
  // Section configurations with different colors
  const sections = {
    privacy: {
      id: 'privacy',
      title: 'Privacy Policy',
      color: 'purple',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    terms: {
      id: 'terms',
      title: 'Terms of Service',
      color: 'blue',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    data: {
      id: 'data',
      title: 'Data Collection',
      color: 'green',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
      {/* Back to Home Button - Top */}
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Information</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 mb-8 w-full">
            {Object.values(sections).map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? `bg-${section.color}-600 text-white shadow-md`
                    : `bg-${section.color}-100 text-${section.color}-700 hover:bg-${section.color}-200`
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.title}
              </button>
            ))}
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
            <div className="prose max-w-none">
              <p className="mb-4">
                RajConsulting ("us", "we", or "our") operates the {window.location.hostname} website (the "Service").
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Information Collection And Use</h3>
              <p className="mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-2">Types of Data Collected</h4>
              <h5 className="font-medium mt-3 mb-1">Personal Data</h5>
              <p className="mb-4">
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").
              </p>

              <h4 className="text-lg font-semibold mt-6 mb-4">Use of Data</h4>
              <p className="mb-2">RajConsulting uses the collected data for various purposes:</p>
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
            <div className="prose max-w-none">
              <p className="mb-4">
                Please read these Terms of Service ("Terms") carefully before using the {window.location.hostname} website.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h3>
              <p className="mb-4">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">2. Use License</h3>
              <p className="mb-4">
                Permission is granted to temporarily access the materials on RajConsulting's website for personal, non-commercial transitory viewing only.
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
                This Data Collection Policy explains how RajConsulting collects, uses, and protects your information.
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
        </div>

      </div>
    </div>
  );
};

export default Legal;
