import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  ExternalLink,
  Linkedin,
  Github,
  Twitter,
  Briefcase,
  UserPlus,
  Clock,
  FileText,
  PhoneCallIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const [activeContact, setActiveContact] = useState('Direct Hire');
  const [isVerified, setIsVerified] = useState(false);
  const [directContactEnabled, setDirectContactEnabled] = useState(false);


  const handleTabClick = (contactName) => {
    if (contactName === 'Direct Contact' && !directContactEnabled) {
      return; // Don't allow switching to Direct Contact if not enabled
    }
    if (activeContact === 'Direct Contact' && contactName !== 'Direct Contact') {
      setDirectContactEnabled(false);
    }

    setActiveContact(contactName);
  };
  const contactMethods = {
    'Direct Contact': {
      title: 'Get In Touch Directly',
      description: 'Prefer direct communication? Here are the best ways to reach me for immediate assistance.',
      icon: Phone,
      color: 'green',
      disabled: !directContactEnabled,
      content: (
        <div className="space-y-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-700">
              To engage my services for your upcoming project, please feel free to contact me using the details provided below. All professional services are rendered personally by me, Rajiv Giri, operating under my legal name and not under any company or corporate entity. This statement applies to all types of engagements, including full-time employment, contract assignments, freelance projects, part-time work, and consulting services. For further legal information, please refer to the Legal section. You may reach me via the email address, phone number, linkedin and github profiles listed below for any inquiries or additional information.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-green-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Me</h4>
              <p><strong>Direct Email:</strong> rajivgiri2025@gmail.com</p>


            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-green-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Call Me</h4>
              <p className="text-gray-600 mb-3">(513) 834-3371</p>

            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Find Me Online</h4>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/girirajiv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors flex flex-col items-center"
              >
                <div className="bg-blue-100 p-3 rounded-full mb-2 hover:bg-blue-200 transition-colors">
                  <Linkedin size={24} className="text-blue-600" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/rajg2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors flex flex-col items-center"
              >
                <div className="bg-gray-100 p-3 rounded-full mb-2 hover:bg-gray-200 transition-colors">
                  <Github size={24} className="text-gray-600" />
                </div>
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <CheckCircle className="text-green-600 mr-2" size={20} />
              <h4 className="font-semibold text-green-900">Response Time</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-green-700 font-medium">Email:</span>
                <span className="text-green-600 ml-2">I will try my best to response within 24 to 72 hours, depending on the urgency and availability.</span>
              </div>
              <div>
                <span className="text-green-700 font-medium">Phone:</span>
                <span className="text-green-600 ml-2">Available Mon-Fri, 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>
      ),
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },
    'Direct Hire': {
      title: 'Hiring Opportunities',
      description: 'Interested in having me join your team? Let\'s discuss full-time, part-time, or contract opportunities.',
      icon: Briefcase,
      color: 'indigo',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="bg-indigo-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="text-indigo-600" size={32} />
            </div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">Let's Discuss Working Together</h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm open to exploring new opportunities that align with my skills and experience. Let's schedule a call to discuss how I can contribute to your team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
              <div className="text-indigo-600 font-semibold mb-2">Part-time</div>
              <div className="text-gray-600 text-sm mb-3">Flexible Hours</div>
              <div className="text-gray-700">Perfect for ongoing projects with flexible time commitments</div>

            </div>
            <div className="text-center p-6 border-2 border-indigo-300 bg-indigo-50 rounded-lg cursor-pointer">
              <div className="text-indigo-600 font-semibold mb-2">Full-time</div>
              <div className="text-gray-600 text-sm mb-3">Permanent Positions</div>
              <div className="text-gray-700">Ideal for long-term roles with benefits and growth opportunities</div>
              <div className="text-indigo-600 text-sm font-medium mt-2">Available</div>
            </div>
            <div className="text-center p-6 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
              <div className="text-indigo-600 font-semibold mb-2">Contract</div>
              <div className="text-gray-600 text-sm mb-3">Project-based</div>
              <div className="text-gray-700">Great for specific projects or temporary needs</div>
            </div>
          </div>

          <div className="bg-green-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="font-semibold text-indigo-900 mb-3">What We'll Discuss:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center text-indigo-700">
                <CheckCircle size={16} className="mr-2 text-indigo-600" />
                The role and your company
              </div>
              <div className="flex items-center text-indigo-700">
                <CheckCircle size={16} className="mr-2 text-indigo-600" />
                How my skills match your needs
              </div>
              <div className="flex items-center text-indigo-700">
                <CheckCircle size={16} className="mr-2 text-indigo-600" />
                Compensation and benefits
              </div>
              <div className="flex items-center text-indigo-700">
                <CheckCircle size={16} className="mr-2 text-indigo-600" />
                Next steps in the process
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <input
                id="verifyCheckbox"
                type="checkbox"
                checked={isVerified}
                onChange={(e) => setIsVerified(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="verifyCheckbox" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <Link to="/legal/privacy" className="text-indigo-600 hover:underline">Privacy Policy and Terms of Service.</Link>
              </label>
            </div>

            <button
              onClick={() => {
                if (isVerified) {
                  setDirectContactEnabled(true);
                  setActiveContact('Direct Contact');
                  // Reset verification for next time
                  setIsVerified(false);
                }
              }}
              disabled={!isVerified}
              className={`px-8 py-3 rounded-lg flex items-center mx-auto font-medium ${isVerified
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } transition-colors`}
            >
              <Calendar size={20} className="mr-2" />
              Schedule a Call to Discuss
            </button>
            <p className="text-gray-500 text-sm mt-3">
              No commitment required • Please send the detailed job description via email or phone. I'll try my best to respond within 24-48 hours.
            </p>
          </div>
        </div>
      ),
      icon_bg: 'bg-indigo-50',
      icon_text: 'text-indigo-600',
      border: 'border-indigo-200'
    },
    'Consulting & Freelance': {
      title: 'Schedule a Consultation',
      description: 'Book a free consultation call to discuss your project requirements and how I can help.',
      icon: Calendar,
      color: 'purple',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="bg-purple-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-purple-600" size={32} />
            </div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">Let's Schedule a Call</h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer free 15 to 60 minutes consultation calls to understand your needs and discuss how I can contribute to your project success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-purple-600 font-semibold mb-2">Quick Chat</div>
              <div className="text-gray-600 text-sm mb-3">15 minutes</div>
              <div className="text-gray-700">Brief discussion about your needs</div>
            </div>
            <div className="text-center p-6 border-2 border-purple-300 bg-purple-50 rounded-lg cursor-pointer">
              <div className="text-purple-600 font-semibold mb-2">Consultation</div>
              <div className="text-gray-600 text-sm mb-3">30 minutes</div>
              <div className="text-gray-700">Detailed project discussion</div>
              <div className="text-purple-600 text-sm font-medium mt-2">Most Popular</div>
            </div>
            <div className="text-center p-6 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer">
              <div className="text-purple-600 font-semibold mb-2">Deep Dive</div>
              <div className="text-gray-600 text-sm mb-3">60 minutes</div>
              <div className="text-gray-700">Comprehensive planning session</div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 mb-3">What We'll Discuss:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center text-purple-700">
                <CheckCircle size={16} className="mr-2 text-purple-600" />
                Your project goals and requirements
              </div>
              <div className="flex items-center text-purple-700">
                <CheckCircle size={16} className="mr-2 text-purple-600" />
                Timeline and budget considerations
              </div>
              <div className="flex items-center text-purple-700">
                <CheckCircle size={16} className="mr-2 text-purple-600" />
                How I can contribute to your success
              </div>
              <div className="flex items-center text-purple-700">
                <CheckCircle size={16} className="mr-2 text-purple-600" />
                Next steps and recommendations
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <input
                id="verifyCheckbox"
                type="checkbox"
                checked={isVerified}
                onChange={(e) => setIsVerified(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="verifyCheckbox" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <Link to="/legal/privacy" className="text-indigo-600 hover:underline">Privacy Policy and Terms of Service.</Link>
              </label>
            </div>

            <button
              onClick={() => {
                if (isVerified) {
                  setDirectContactEnabled(true);
                  setActiveContact('Direct Contact');
                  // Reset verification for next time
                  setIsVerified(false);
                }
              }}
              disabled={!isVerified}
              className={`px-8 py-3 rounded-lg flex items-center mx-auto font-medium ${isVerified
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } transition-colors`}
            >
              <Calendar size={20} className="mr-2" />
              Schedule a Call to Discuss
            </button>
            <p className="text-gray-500 text-sm mt-3">
              No commitment required • First 30 minutes consultation is free. I'll try my best to respond within 24-48 hours.
            </p>
          </div>
        </div>
      ),
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200'
    },

    'General Inquries': {
      title: 'Have questions about website or general inquries',
      description: 'Please reach out to the me and let me knwo how I can help.',
      icon: PhoneCallIcon,
      color: 'orange',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="bg-orange-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <PhoneCallIcon className="text-orange-600" size={32} />
            </div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">Please Contact</h4>
          </div>


          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 mb-3">Please contact me if there is:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center text-purple-700">
                <CheckCircle size={16} className="mr-2 text-purple-600" />
                Website feedback or suggestions
              </div>
              <div className="flex items-center text-purple-700">
                <CheckCircle size={16} className="mr-2 text-purple-600" />
                Technical issues, bugs or new requirements
              </div>
              <div className="flex items-center text-purple-700">
                <CheckCircle size={16} className="mr-2 text-purple-600" />
                Accessibility concerns
              </div>
              <div className="flex items-center text-purple-700">
                <CheckCircle size={16} className="mr-2 text-purple-600" />
                Content inaccuracies
              </div>
              <div className="flex items-center text-purple-700">
                <CheckCircle size={16} className="mr-2 text-purple-600" />
                Partnership or collaboration opportunities
              </div>
              <div className="flex items-center text-purple-700">
                <CheckCircle size={16} className="mr-2 text-purple-600" />
                Any other inquiries not covered in specific sections
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <input
                id="verifyCheckbox"
                type="checkbox"
                checked={isVerified}
                onChange={(e) => setIsVerified(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="verifyCheckbox" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <Link to="/legal/privacy" className="text-indigo-600 hover:underline">Privacy Policy and Terms of Service.</Link>
              </label>
            </div>

            <button
              onClick={() => {
                if (isVerified) {
                  setDirectContactEnabled(true);
                  setActiveContact('Direct Contact');
                  // Reset verification for next time
                  setIsVerified(false);
                }
              }}
              disabled={!isVerified}
              className={`px-8 py-3 rounded-lg flex items-center mx-auto font-medium ${isVerified
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } transition-colors`}
            >
              <Calendar size={20} className="mr-2" />
              Contact Me
            </button>
            <p className="text-gray-500 text-sm mt-3">
              I'll try my best to respond within 24-48 hours.
            </p>
          </div>
        </div>
      ),
      icon_bg: 'bg-orange-50',
      icon_text: 'text-orange-600',
      border: 'border-orange-200'
    }
  };



  const contactNames = Object.keys(contactMethods);
  const currentContact = contactMethods[activeContact];
  const IconComponent = currentContact.icon;

  const getColorClasses = (color, active) => {
    const colorMap = {
      blue: active ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100',
      green: active ? 'bg-green-500 text-white shadow-lg' : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100',
      purple: active ? 'bg-purple-500 text-white shadow-lg' : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100',
      indigo: active ? 'bg-indigo-500 text-white shadow-lg' : 'bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-100',
      orange: active ? 'bg-orange-500 text-white shadow-lg' : 'bg-orange-50 text-orange-600 border border-orange-200 hover:bg-orange-100'
    };
    return colorMap[color];
  };

  return (
    <section className="min-h-screen flex items-center py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Contact Method Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contactNames.map((contactName) => {
            const contact = contactMethods[contactName];
            const ContactIconComponent = contact.icon;
            const isActive = activeContact === contactName;
            const isDisabled = contactName === 'Direct Contact' && !directContactEnabled;

            return (
              <button
                key={contactName}
                onClick={() => handleTabClick(contactName)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${isActive
                  ? getColorClasses(contact.color, true)
                  : isDisabled
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : getColorClasses(contact.color, false)
                  }`}
                disabled={isDisabled}
              >
                <ContactIconComponent size={18} />
                <span>{contactName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Contact Method */}
        <div className={`bg-white rounded-2xl shadow-lg border-2 ${currentContact.border} overflow-hidden`}>

          {/* Contact Header */}
          <div className={`${currentContact.icon_bg} px-8 py-6 border-b border-gray-200`}>
            <div className="flex items-center">
              <div className={`p-4 rounded-xl ${currentContact.icon_bg} ${currentContact.icon_text} mr-6`}>
                <IconComponent size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentContact.title}</h3>
                <p className="text-gray-600 text-lg">{currentContact.description}</p>
              </div>
            </div>
          </div>

          {/* Contact Content */}
          <div className="p-8">
            {currentContact.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
