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
  Twitter
} from 'lucide-react';

const ContactSection = () => {
  const [activeContact, setActiveContact] = useState('Direct Contact');

  const contactMethods = {
    'Direct Contact': {
      title: 'Get In Touch Directly',
      description: 'Prefer direct communication? Here are the best ways to reach me for immediate assistance.',
      icon: Phone,
      color: 'green',
      content: (
        <div className="space-y-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-700">
              To hire me for your next project, please contact me using the contact information provided in the "Direct Contact" section. All services are provided by Rajiv Giri as an independent consultant and not as "Company". Please refer to Legal section for more information. I can be reached at below provided email and phone number for more inquiries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-green-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Me</h4>
              <p><strong>Direct Email:</strong> rajivgiri2025@gmail.com</p>
              <p><strong>Admin Email:</strong> admin@rajtechconsulting.com</p>
              <p><strong>Consulting Email:</strong> consulting@rajtechconsulting.com</p>
              
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
                <span className="text-green-600 ml-2">Within 24 to 72 hours, depending on the urgency and availability.</span>
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
    'Schedule Meeting': {
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
              I offer free 15 to60 minutes consultation calls to understand your needs and discuss how I can contribute to your project success.
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
            <button 
              onClick={() => setActiveContact('Direct Contact')}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center mx-auto font-medium"
            >
              <Calendar size={20} className="mr-2" />
              Call or Email to Schedule Free Consultation
            </button>
            <p className="text-gray-500 text-sm mt-3">No commitment required • First 16 to 60 minutes consultation completely free. I'll respond within 24 - 72 hours, depending on the urgency and availability.</p>
          </div>
        </div>
      ),
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200'
    }
  };

  const contactNames = Object.keys(contactMethods);
  const currentContact = contactMethods[activeContact];
  const IconComponent = currentContact.icon;

  const getColorClasses = (color, active) => {
    const colorMap = {
      blue: active ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100',
      green: active ? 'bg-green-500 text-white shadow-lg' : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100',
      purple: active ? 'bg-purple-500 text-white shadow-lg' : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100'
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

            return (
              <button
                key={contactName}
                onClick={() => setActiveContact(contactName)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${getColorClasses(contact.color, isActive)}`}
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
