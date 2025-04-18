import React, { useState } from "react";
import { Link } from "react-router-dom";
import { features } from "../constants";
import { ChevronDown, ChevronUp } from "lucide-react";

// List of services to display in the expandable section
const services = [
  "Emergency Generator Installation",
  "Panel Upgrades & Replacement",
  "Electrical Installation Services",
  "Electrical Safety Inspections",
  "EV Car Charger Installation",
  "Electrical Rewiring",
  "Electrical Repairs",
  "Surge Protection",
];

const FeatureSection = () => {
  // State to manage whether the services section is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggles the expanded state
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="relative mt-10 border-b border-blue-700 min-h-[600px]">
      {/* Section Title */}
      <h2 className="text-4xl tracking-wide text-center border-t border-blue-700 sm:text-5xl lg:text-6xl">
        <br></br>
        OUR{" "}
        <span className="text-transparent bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
      </h2>
      <br></br>

      {/* Background Grid for visual effect */}
      <div className="absolute h-full w-full bg-[radial-gradient(#3B82F6_2px,transparent_2px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)] z-10 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-20">
        {/* Expand/Collapse Button */}
        <div className="flex justify-center">
          <button
            onClick={toggleExpand}
            className={`flex items-center justify-center w-48 h-12 text-white ${
              isExpanded
                ? "bg-black rounded-none border-none shadow-none"
                : "border-neutral-900 border-1 bg-linear-to-r from-neutral-950 to-neutral-900 hover:to-neutral-600 shadow-neutral-500 rounded-b-xl"
            }`}
          >
            {/* Chevron icon and button label */}
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
            <span className="ml-2">{isExpanded ? "Close" : "See All"}</span>
          </button>
        </div>

        {/* Expandable Services Section */}
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div
            className={`max-w-lg p-6 mx-auto mt-0 text-lg text-white bg-black shadow-lg ${
              isExpanded ? "rounded-none" : "rounded-lg"
            }`}
          >
            {/* List of services */}
            <ul className="list-disc list-inside">
              {services.map((service, index) => (
                <li key={index} className="mb-4">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-wrap">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="">
                {/* Feature text */}
                <div>{feature.text}</div>
                {/* Feature icon */}
                <div className="flex items-center justify-center w-10 h-10 text-blue-700 rounded-xs">
                  {feature.icon}
                </div>
                {/* Feature description with link */}
                <p className="p-2 text-md text-amber-50">
                  <Link to={feature.link}>{feature.description}</Link>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for additional grid content */}
        <div className="grid grid-cols-2 gap-2 pb-20 md:grid-cols-3"></div>
      </div>
    </div>
  );
};

export default FeatureSection;
