import React, { useState } from "react";
import { Link } from "react-router-dom";
import { features } from "../constants";
import { ChevronDown, ChevronUp } from "lucide-react";
import backgroundImage from "../assets/backgroundwires2.png";
import { MapPinIcon } from "lucide-react";
import serviceAreaImage from "../assets/herosection/citymap.jpg"; // Import the service area image

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
      className="relative   min-h-[600px] bg-cover "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Section Title */}
      <h2 className="text-4xl tracking-wide text-center border-t-1  border-blue-600 sm:text-5xl lg:text-6xl  bg-gradient-to-b from-blue-50 to-transparent ">
        <br></br>
        OUR{" "}
        <span className="text-transparent bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
      </h2>
      <br></br>

      {/* Main Content */}
      <div className="relative z-20 max-w-screen-xl mx-auto ">
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
            <span className="ml-2">{isExpanded ? "Close" : "See All"}</span>
          </button>
        </div>
        {/* Expandable Services Section */}
        <div
          className={`motion-preset-focus motion-preset-blur-down transition-max-height duration-200 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-screen px-2" : "max-h-0 "
          }`}
        >
          <div
            className={`lg:max-w-2xl motion-preset-focus lg:flex lg:justify-center lg:items-center motion-preset-blur-right max-w-lg p-6 mx-auto mt-0 text-lg text-white bg-black shadow-lg ${
              isExpanded
                ? "rounded-md"
                : "motion-preset-fade motion-preset-blur-down"
            }`}
          >
            {/* List of services */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 list-disc list-outside text-sm pl-4">
              {services.map((service, index) => (
                <li key={index} className="pr-4 mr-2">
                  {service}
                </li>
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

        <h2 className="text-4xl tracking-wide text-center sm:text-5xl lg:text-4xl  ">
          <br></br>

          <span className="text-transparent bg-linear-to-r from-red-500 to-blue-700 bg-clip-text">
            AREAS WE SERVE
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-0 items-center justify-center my-8 px-4">
          {/* Service area map/image */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <img
              src={serviceAreaImage}
              alt="Our Service Areas"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* City list */}
          <div className="w-full md:w-1/2 lg:w-3/5 bg-white/10  ">
            {/* Two-column city list - keep container centered */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 justify-center">
              <div>
                <ul className="flex flex-col space-y-2">
                  {[
                    "Bothell",
                    "Kirkland",
                    "Bellevue",
                    "Shoreline",
                    "Issaquah",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-base xs:text-lg text-black"
                    >
                      <MapPinIcon className="mr-2 text-red-600" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="flex flex-col space-y-2">
                  {["Everett", "Sammamish", "Seattle", "Renton", "& More!"].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-base xs:text-lg text-black"
                      >
                        <MapPinIcon className="mr-2 text-red-600" size={18} />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Slogan text */}
            <div className="mt-6 ">
              <p className="text-xl font-semibold text-black">
                Covering all projects across Snohomish, King, and Pierce County.
              </p>
            </div>
          </div>
        </div>
        {/* Placeholder for additional grid content */}
        <div className="grid grid-cols-2 gap-2 pb-5 md:grid-cols-3"></div>
      </div>
      {/* Separate div for the border at the bottom */}
      <div className="border-b border-red-600 max-w-4xl mx-auto"></div>
    </div>
  );
};

export default FeatureSection;
