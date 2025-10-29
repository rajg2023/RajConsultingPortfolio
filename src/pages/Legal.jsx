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
    },
    security: {
      id: 'security',
      title: 'Data Security',
      color: 'teal',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    thirdParty: {
      id: 'thirdParty',
      title: 'Third-Party Services',
      color: 'pink',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
              Rajiv Giri - Independent Technology Consulting
            </Link>
            <Link 
              to="/" 
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto w-full">
        {/* Page Title and Update Notice */}
        <div className="text-center mb-8 px-4 pt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Legal Information</h1>
          <p className="text-lg text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          {/* Update Notice Banner */}
          <div className="max-w-2x2 mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  This legal page is currently being updated and may not be fully accurate. For the most current information, please contact me.
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <nav className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.values(sections).map((section) => {
              const isActive = activeSection === section.id;
              const colorMap = {
                purple: { bg: '#f5f3ff', text: '#7c3aed', hover: '#ede9fe', activeBg: '#f3e8ff', activeText: '#6b21a8' },
                blue: { bg: '#eff6ff', text: '#3b82f6', hover: '#dbeafe', activeBg: '#dbeafe', activeText: '#1d4ed8' },
                green: { bg: '#f0fdf4', text: '#10b981', hover: '#dcfce7', activeBg: '#dcfce7', activeText: '#166534' },
                indigo: { bg: '#eef2ff', text: '#6366f1', hover: '#e0e7ff', activeBg: '#e0e7ff', activeText: '#4338ca' },
                teal: { bg: '#f0fdfa', text: '#0d9488', hover: '#ccfbf1', activeBg: '#ccfbf1', activeText: '#0f766e' },
                pink: { bg: '#fdf2f8', text: '#ec4899', hover: '#fce7f3', activeBg: '#fbcfe8', activeText: '#9d174d' }
              };
              const colors = colorMap[section.color] || { bg: '#f9fafb', text: '#4b5563', hover: '#f3f4f6', activeBg: '#e5e7eb', activeText: '#111827' };
              
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                  style={{
                    backgroundColor: isActive ? colors.activeBg : colors.bg,
                    color: isActive ? colors.activeText : colors.text,
                    border: '1px solid',
                    borderColor: isActive ? colors.activeText : 'transparent',
                    ':hover': {
                      backgroundColor: isActive ? colors.activeBg : colors.hover,
                    }
                  }}
                >
                  <span className="w-5 h-5" style={{ color: isActive ? colors.activeText : colors.text }}>
                    {section.icon}
                  </span>
                  {section.title}
                </button>
              );
            })}
          </nav>
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
                I, Rajiv Giri, operate the this website as a personal "Service" and not as "Company". I am new to managing website legal compliance and am continually 
                learning to improve my policies and practices. As such, I reserve the right to correct, update, or modify this Privacy Policy and other legal pages 
                whenever necessary. Updates may be made based on new knowledge, government regulations, client or employer feedback, or legal requirements.
                I am committed to complying with applicable federal, state, and local privacy and data protection laws. 
              </p>
              <p>
              <strong>However,</strong> please understand that despite reasonable security measures, no website or online service can be completely immune to data breaches,
                 hacking attempts, or other malicious attacks that may result in unauthorized access or theft of data.Therefore, I cannot be held responsible 
                 for any loss, damage, or unauthorized disclosure of data resulting from such attacks or breaches beyond my control. Users of this website are
                  encouraged to exercise caution and follow best practices when sharing sensitive information online.</p>
                  

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
                    I use a <strong>VibeCoding</strong> and <strong>AI assistance</strong> approach — combining human creativity with ethical AI assistance — to efficiently develop digital projects. All generated code, assets, and written content are original works or adapted under valid licenses, ensuring full compliance with applicable third-party terms and intellectual property laws.
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
                Currently, our website does not collect any personal information through forms,
                cookies, or analytics tools. Your browsing experience is private, and no data is stored or tracked during your visit.
              </p>
              <p className="mb-4">
                <strong>However,</strong> when you communicate with us via email (such as Gmail) or phone, 
                the information you share—like your contact details—may be collected and processed by the respective service providers.
                Also, please be aware that third-party applications and services integrated with our website might collect certain data through their own mechanisms.
                This could include browser and device information, usage data, or other technical details.
                Please refer to the privacy policies of these third-party services for more information on how they handle your data.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">1. Information We Collect</h3>
              <p className="mb-2">I may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Personal identification information</li>
                <li>Browser and device information</li>
                <li>Usage data and analytics</li>
                <li>Cookies and tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">2. How We Use Your Data</h3>
              <p className="mb-2">I use the collected data for various purposes:</p>
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

          {/* Employer and Freelance Data Security and Liability Section */}
          {activeSection === 'security' && (
            <div className={`border-t-4 border-${sections.security.color}-500`}>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 bg-${sections.security.color}-50 text-${sections.security.color}-600`}>
                    {sections.security.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Employer and Freelance Data Security and Liability</h2>
                </div>
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mt-6 mb-4">1. Employer Engagements</h3>
                  <p className="mb-4">
                    While working with an employer (full-time, part-time, or contract), I comply fully with their:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Rules and regulations</li>
                    <li>Device usage policies</li>
                    <li>Security protocols</li>
                    <li>Data protection requirements</li>
                  </ul>
                  <p className="mb-4">
                    Any liability related to security incidents or data breaches arising from my work on employer-controlled systems or devices shall be governed and covered under the employer's policies and liability frameworks.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-4">2. Freelance Client Projects</h3>
                  <p className="mb-4">
                    When working on freelance client projects, I implement reasonable technical and organizational security measures to protect client information, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Secure data storage on protected devices</li>
                    <li>Use of encryption for sensitive information</li>
                    <li>Regular software updates and security patches</li>
                    <li>Secure authentication practices</li>
                  </ul>
                  <p className="mb-4">
                    I encourage clients to provide remote access via secure VPN or remote access services such as Cisco AnyConnect or similar solutions. These tools offer encrypted, authenticated connections that reduce the risk of data interception and minimize the need to store sensitive information on local devices.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-4">3. Security Limitations and Liability</h3>
                  <p className="mb-4">
                    While I take all reasonable precautions, please be aware that:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>No security system is completely impenetrable</li>
                    <li>There is always a residual risk of unauthorized access, hacking, malware attacks, or physical theft of devices</li>
                    <li>I cannot be held liable for damages, losses, or unauthorized disclosures resulting from cyberattacks or physical theft that occur despite reasonable security measures</li>
                    <li>Clients are responsible for implementing their own security measures and risk management strategies</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-4">4. Breach Notification</h3>
                  <p className="mb-4">
                    In the event of a security breach involving client data on my devices—whether caused by hacking, theft, or malicious acts—I commit to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Promptly notifying affected clients</li>
                    <li>Complying with all applicable legal and ethical obligations</li>
                    <li>Cooperating fully to mitigate harm</li>
                    <li>Taking immediate steps to prevent further unauthorized access</li>
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
                    This website is the primary example I have created using a VibeCoding approach combined with AI assistance, employing tools like Windsurf and Visual Studio Code, enhanced with AI-assisted tools including Perplexity AI, OpenAI models (ChatGPT), Google Gemini, Anthropic Claude, Meta LLaMA, GitHub Copilot, Hugging Face models, and various open-source frameworks.
                  </p>
                  <p className="mb-4">
                    These example illustrate the types of AI models and tools I use to accelerate ideation, coding, testing, and refinement. Every project reflects my original customization, design, and technical problem-solving, all completed with thorough human review and oversight.
                  </p>
                  <p className="mb-4">
                    Regardless of the tools used, I ensure that all AI-generated code, assets, and content are thoroughly reviewed and validated through careful human evaluation. This review process involves collaboration with clients to make sure the final output meets quality standards and project requirements before submission.In other words, AI is an enabling tool that accelerates development and ideation, but human expertise and client feedback remain central to the project’s success.
                  </p>
                  <p className="mb-4">
                    <strong>Please note:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>For future client projects, I may utilize other AI models, APIs, and tools not specifically listed here, based on project needs and client discussions.</li>
                    <li>Some AI services may collect data during use, subject to their own privacy policies and legal terms.</li>
                    <li>The AI models and tools showcased on this website serve as examples of my technical approach and are not endorsements or advertisements for any specific provider.</li>
                    <li>Taking immediate steps to prevent further unauthorized access</li>
                  </ul>
                  <p>This disclosure reflects my commitment to ethical and responsible AI use while delivering high-quality, compliant digital solutions.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {activeSection === 'thirdParty' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
              <div className="border-t-4 border-pink-500">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg mr-4 bg-pink-50 text-pink-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Third-Party Services and Development Tools</h2>
                  </div>
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold mb-4">Use of Third-Party Services and Tools</h3>
                    <p className="mb-4">
                      To operate, maintain, and improve this website, I rely on various trusted third-party service providers and development tools. These include (but are not limited to):
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li><strong>Web Hosting Providers</strong> that keep the website accessible online</li>
                      <li><strong>Email and Communication Platforms</strong> (such as Gmail) used to interact with you</li>
                      <li><strong>Domain Registrars</strong> that manage the website's domain name</li>
                      <li><strong>Analytics Services</strong> that help understand website usage and performance</li>
                      <li><strong>Content Delivery Networks (CDNs)</strong> for faster content delivery</li>
                      <li><strong>Payment Processors</strong> when handling transactions</li>
                      <li><strong>Development Tools</strong> like APIs, version control platforms (GitHub), continuous integration/continuous deployment (CI/CD) tools, and databases</li>
                    </ul>
                    
                    <p className="mb-4">
                      These third-party providers may collect and process certain technical information during their normal operations, including:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Your IP address</li>
                      <li>Browser type and version</li>
                      <li>Device type and operating system</li>
                      <li>Usage statistics, logs, or communications data</li>
                    </ul>
                    
                    <p className="mb-4">
                      Because these data collection activities are performed by third parties, I do <strong>not</strong> have direct control over them. However, these providers are required to comply with their own privacy policies and data protection regulations.
                    </p>
                    
                    <h4 className="text-lg font-semibold mt-6 mb-3">What This Means for You:</h4>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Your information may be collected or processed by these third parties according to their terms.</li>
                      <li>I encourage you to review their privacy policies to understand how your data is managed and protected.</li>
                      <li>Reviewing these policies will help you make informed decisions about your privacy and data security when interacting with this website.</li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mt-6 mb-3">My Commitment to Transparency:</h4>
                    <p className="mb-4">
                      I believe in open communication about how data is collected and used. This disclosure is part of my ongoing effort to ensure you have a clear understanding of third-party data practices associated with this site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="max-w-x1 mx-auto px-4 sm:px-6 lg:px-8 my-8 mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-blue-800">Legal Information Inquiries</h4>
                <div className="mt-2 text-sm text-blue-700">
                  <p>For any questions or concerns regarding legal information, please consult a qualified legal professional or refer to official government websites for accurate guidance.</p>
                  <p className="mt-2">If you believe any legal information on this page requires updating, please contact me.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Legal;
