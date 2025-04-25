import React, { useState } from "react";
import { Link } from "react-router-dom";
import { features } from "../constants";
import { ChevronDown, ChevronUp } from "lucide-react";
import backgroundImage from "../assets/backgroundwires2.png";

// List of services to display in the expandable section
const services = [
  "Emergency Generator Installation",
  "Electrical Safety Inspections",
  "Panel Upgrades & Replacement",
  "EV Car Charger Installation",
  "Electrical Installation Services",
  "Switches & Outlets Installation",
  "Lighting Installation / Repair",
  "Fan & Chandelier Installation",
  "Smart Switches / Devices",
  "200 & 400 Amp Service Panel",
  "Whole House Rewiring",
  "Panel Breaker Replacing",
  "Electrical Troubleshooting",
  "Electrical Rewiring",
  "Electrical Repairs",
  "GFCI / AFCI Installation",
  "Surge Protection",
];

const FeatureSection = () => {
  // State to manage whether the services section is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggles the expanded state
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className="relative mt-10 border-blue-700 min-h-[600px]  bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background Grid for visual effect */}
      {/* <div className="absolute h-full w-full bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(clip_50%_50%_at_50%_50%,#000_100%,transparent_100%)] z-10 pointer-events-none"></div> */}

      {/* Section Title */}
      <h2 className="text-4xl tracking-wide text-center border-t-1  border-red-700 sm:text-5xl lg:text-6xl  bg-gradient-to-b from-red-100 to-transparent">
        <br></br>
        OUR{" "}
        <span className="text-transparent bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
      </h2>
      <br></br>

      {/* Main Content */}
      <div className="relative z-20  max-w-screen-xl mx-auto px-2">
        {/* Expand/Collapse Button */}
        <div className="flex justify-center ">
          <button
            onClick={toggleExpand}
            className={`flex items-center justify-center cursor-pointer w-48 h-12 text-white ${
              isExpanded
                ? "bg-black rounded-none border-none shadow-none"
                : "border-neutral-900 border-1 bg-linear-to-r from-neutral-950 to-neutral-900 hover:to-neutral-800 shadow-neutral-500 rounded-b-xl motion-preset-fade  motion-preset-blur-down"
            }`}
          >
            {/* Chevron icon and button label */}
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
            <span className="ml-2  ">{isExpanded ? "Close" : "See All"}</span>
          </button>
        </div>

        {/* Expandable Services Section */}
        <div
          className={`motion-preset-focus motion-preset-blur-down transition-max-height duration-400 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div
            className={`lg:max-w-2xl motion-preset-focus flex justify-center items-center motion-preset-blur-right max-w-lg p-6 mx-auto mt-0 text-lg text-white bg-black shadow-lg ${
              isExpanded
                ? "rounded-none"
                : "motion-preset-fade motion-preset-blur-down"
            }`}
          >
            {/* List of services */}
            <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-disc list-outside text-sm ">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div
          className="flex flex-wrap motion-preset-fade"
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
        >
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 ">
              <div>
                {/* Feature text */}
                <div>{feature.text}</div>
                {/* Feature icon */}
                <div>{feature.icon}</div>
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
      {/* Separate div for the border at the bottom */}
      <div className="border-b border-red-700 max-w-4xl mx-auto"></div>
    </div>
  );
};

export default FeatureSection;
