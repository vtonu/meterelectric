import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { features } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  'Emergency Generator Installation',
  'Panel Upgrades & Replacement',
  'Electrical Installation Services',
  'Electrical Safety Inspections',
  'EV Car Charger Installation',
  'Electrical Rewiring',
  'Electrical Repairs',
  'Surge Protection',
];

const FeatureSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="relative mt-10 border-b border-blue-700 min-h-[600px]">
      <h2 className="text-4xl tracking-wide text-center border-t border-blue-700 sm:text-5xl lg:text-6xl">
        <br></br>
        OUR{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
      </h2>
      <br></br>
      <div className="flex justify-center">
        <button
          onClick={toggleExpand}
          className={`flex items-center justify-center w-48 h-12 text-white ${
            isExpanded
              ? 'bg-black rounded-none border-none shadow-none'
              : 'border-neutral-900 border-1 bg-gradient-to-r from-neutral-950 to-neutral-900 hover:to-neutral-600 shadow-neutral-500 rounded-b-xl'
          }`}>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
          <span className="ml-2">{isExpanded ? 'Close' : 'See All'}</span>
        </button>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-screen' : 'max-h-0'
        }`}>
        <div
          className={`max-w-lg p-6 mx-auto mt-0 text-lg text-white bg-black shadow-lg ${
            isExpanded ? 'rounded-none' : 'rounded-lg'
          }`}>
          <ul className="list-disc list-inside">
            {services.map((service, index) => (
              <li key={index} className="mb-4">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="">
              <div>{feature.text}</div>
              <div className="flex items-center justify-center w-10 h-10 text-blue-700 rounded-sm">
                {feature.icon}
              </div>
              <p className="p-2 text-md text-amber-50">
                <Link to={feature.link}>{feature.description}</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 pb-20 md:grid-cols-3"></div>
    </div>
  );
};

export default FeatureSection;
