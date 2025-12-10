import React, { useState } from 'react';
import {
  CheckCircle,
  Code,
  ClipboardCheck,
  Headphones,
  Terminal,
  BarChart3,
  Brain,
} from 'lucide-react';

import QualityAssuranceEngineer from './QualityAssuranceEngineer';
import SDET from './SDET';
import BusinessSystemsAnalyst from './BusinessSystemsAnalyst';
import ApplicationSupportEngineer from './ApplicationSupportEngineer';
import TechnicalConsultant from './TechnicalConsultant';
import DataAnalyst from './DataAnalyst';
import AIConsultant from './AIConsultant';




const ServicesSection = () => {
  const [activeService, setActiveService] = useState('QA Engineer');

  // Service metadata for tab rendering
  const services = {
    'QA Engineer': {
      icon: CheckCircle,
      color: 'blue',
      component: QualityAssuranceEngineer,
      
    },
    SDET: {
      icon: Code,
      color: 'green',
      component: SDET,
      
    },
    'Business Systems Analyst': {
      icon: ClipboardCheck,
      color: 'amber',
      component: BusinessSystemsAnalyst,
      isNew: true,  // Mark as new service
    },
    'Application Analyst': {
      icon: Headphones,
      color: 'purple',
      component: ApplicationSupportEngineer,
    },
    'Technical Consultant': {
      icon: Terminal,
      color: 'red',
      component: TechnicalConsultant,
    },
    'Data Analyst': {
      icon: BarChart3,
      color: 'cyan',
      component: DataAnalyst,
    },
    'AI Consultant': {
      icon: Brain,
      color: 'indigo',
      component: AIConsultant,
      isNew: true,  // Mark as new service
    },
  };

  const serviceNames = Object.keys(services);
  const currentService = services[activeService];
  const CurrentComponent = currentService.component;

  // Color utility
  const colorMap = (color, active) => {
    const c = {
      blue: ['bg-blue-50 text-blue-700 border-blue-200', 'bg-blue-600 text-white'],
      green: ['bg-green-50 text-green-700 border-green-200', 'bg-green-600 text-white'],
      amber: ['bg-amber-50 text-amber-700 border-amber-200', 'bg-amber-600 text-white'],
      purple: ['bg-purple-50 text-purple-700 border-purple-200', 'bg-purple-600 text-white'],
      red: ['bg-red-50 text-red-700 border-red-200', 'bg-red-600 text-white'],
      cyan: ['bg-cyan-50 text-cyan-700 border-cyan-200', 'bg-cyan-600 text-white'],
      indigo: ['bg-indigo-50 text-indigo-700 border-indigo-200', 'bg-indigo-600 text-white'],
    };
    return active
      ? `${c[color][1]} shadow-md transform scale-105`
      : `${c[color][0]} border hover:bg-opacity-80 hover:shadow-sm`;
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 flex flex-col">
      <div className="flex-1 w-full px-6 lg:px-20 py-16">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {serviceNames.map((name) => {
              const s = services[name];
              const Icon = s.icon;
              const active = activeService === name;
              return (
                <div key={name} className="relative">
                  <button
                    onClick={() => setActiveService(name)}
                    className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${colorMap(
                      s.color,
                      active
                    )} ${active ? 'shadow-lg' : 'shadow-sm'}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{name}</span>
                  </button>
                  {s.isNew && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Service Section */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-12">
            {CurrentComponent && <CurrentComponent />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
