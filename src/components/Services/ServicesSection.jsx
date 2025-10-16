import React, { useState } from 'react';
import {
  CheckCircle,
  Code,
  ClipboardCheck,
  Headphones,
  Terminal,
  BarChart3,
} from 'lucide-react';

import QualityAssuranceEngineer from './QualityAssuranceEngineer';
import SDET from './SDET';
import BusinessSystemsAnalyst from './BusinessSystemsAnalyst';
import ApplicationSupportEngineer from './ApplicationSupportEngineer';
import TechnicalConsultant from './TechnicalConsultant';
import DataAnalyst from './DataAnalyst';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('Quality Assurance Engineer');

  // Service metadata for tab rendering
  const services = {
    'Quality Assurance Engineer': {
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
    },
    'Application Support Engineer': {
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
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              My{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Professional Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore what I offer — comprehensive, evolving technical and analytical solutions 
              designed with reliability, curiosity, and the drive to master new challenges.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {serviceNames.map((name) => {
              const s = services[name];
              const Icon = s.icon;
              const active = activeService === name;
              return (
                <button
                  key={name}
                  onClick={() => setActiveService(name)}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${colorMap(
                    s.color,
                    active
                  )}`}
                >
                  <Icon size={22} />
                  <span>{name}</span>
                </button>
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
