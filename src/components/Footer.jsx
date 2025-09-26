import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  Heart,
  ExternalLink,
  Download
} from 'lucide-react';

const Footer = ({ activeSection, setActiveSection }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, url: '#', color: 'hover:text-gray-900' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-400' }
  ];

  const quickLinks = [
    { name: 'About', section: 'home' },
    { name: 'Skills', section: 'skills' },
    { name: 'Services', section: 'services' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-3">ConsultantPro</div>
            <p className="text-gray-300 mb-4 max-w-md">
              Quality Assurance consultant helping organizations improve their software testing processes 
              through manual testing, automation, and data analytics.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm">
                <Download size={16} className="mr-2" />
                Download Resume
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-colors text-sm"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => setActiveSection(link.section)}
                    className={`text-gray-300 hover:text-white transition-colors text-sm ${
                      activeSection === link.section ? 'text-blue-400 font-medium' : ''
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail size={16} className="mr-3 text-gray-400" />
                <a href="mailto:john.doe@email.com" className="hover:text-white transition-colors">
                  john.doe@email.com
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone size={16} className="mr-3 text-gray-400" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin size={16} className="mr-3 text-gray-400" />
                <span>Available Remote/Hybrid</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="flex items-center">
                © {currentYear} ConsultantPro. Made with 
                <Heart size={14} className="mx-1 text-red-500" fill="currentColor" />
                by John Doe
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow me:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`text-gray-400 ${social.color} transition-colors p-2 hover:bg-gray-800 rounded-lg`}
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Footer Links */}
        <div className="border-t border-gray-700 pt-4 mt-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-xs text-gray-500">
            <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
              <button 
                onClick={() => setActiveSection('admin')}
                className="hover:text-gray-300 transition-colors"
              >
                Admin
              </button>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Built with React & Tailwind CSS</span>
              <ExternalLink size={12} />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
