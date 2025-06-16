import React, { useState } from "react";
import { Link } from "react-router-dom";
import { features } from "../constants";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import backgroundImage from "../assets/backgroundwires_featured.jpg"; // Hero Background Image
import serviceAreaImage from "../assets/herosection/citymap.webp"; // City Map Image
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import adkins_review from "../assets/projects/reviews/adkins_review.png";
import amy_review from "../assets/projects/reviews/amy_review.png";
import justinr_eview from "../assets/projects/reviews/justinr_review.png";
import karthik_review from "../assets/projects/reviews/karthik_review.png";
import lindsay_review from "../assets/projects/reviews/lindsay_review.png";
import lorraine_review from "../assets/projects/reviews/lorraine_review.png";
import marilyn_review from "../assets/projects/reviews/marilyn_review.png";
import michael_review from "../assets/projects/reviews/michael_review.png";
import robin_review from "../assets/projects/reviews/robin_review.png";
import sarah_review from "../assets/projects/reviews/sarah_review.png";
import spence_review from "../assets/projects/reviews/spence_review.png";

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { className, onClick } = props;
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    setIsAnimating(true);
    onClick(e);

    // Reset animation after it completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div
      className={`custom-arrow next-arrow ${
        isAnimating ? "motion-preset-fade" : ""
      }`}
      onClick={handleClick}
      style={{
        position: "absolute",
        bottom: "-65px",
        left: "50%",
        transform: "translateX(50px)",
        zIndex: 1,
        top: "auto",
        right: "auto",
        cursor: "pointer",
        backgroundColor: "#18181B",
        borderRadius: "5px",
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0px",
        lineHeight: "0",
        color: "transparent",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <ChevronRight size={24} color="white" />
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = (props) => {
  const { className, onClick } = props;
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    setIsAnimating(true);
    onClick(e);

    // Reset animation after it completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div
      className={`custom-arrow prev-arrow ${
        isAnimating ? "motion-preset-fade" : ""
      }`}
      onClick={handleClick}
      style={{
        position: "absolute",
        bottom: "-65px",
        left: "50%",
        transform: "translateX(calc(-100% - 50px))",
        zIndex: 1,
        top: "auto",
        right: "auto",
        cursor: "pointer",
        backgroundColor: "#18181B",
        borderRadius: "5px",
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0px",
        lineHeight: "0",
        color: "transparent",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <ChevronLeft size={24} color="white" />
    </div>
  );
};

// Settings for the react-slick carousel
const settings = {
  className: "center",
  centerMode: true,
  centerPadding: "0px",
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  /* nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />, */
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "10px",
      },
    },
  ],
};

const images = [
  { src: amy_review, alt: "Amy Review" },
  { src: justinr_eview, alt: "Justin R Review" },
  { src: karthik_review, alt: "Karthik Review" },
  { src: lindsay_review, alt: "Lindsay Review" },
  { src: lorraine_review, alt: "Lorraine Review" },
  { src: marilyn_review, alt: "Marilyn Review" },
  { src: michael_review, alt: "Michael Review" },
  { src: robin_review, alt: "Robin Review" },
  { src: adkins_review, alt: "Adkins Review" },
  { src: sarah_review, alt: "Sarah Review" },
  { src: spence_review, alt: "Spence Review" },
];

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
      className="relative   min-h-[600px] bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Section Title */}
      <h2 className="text-4xl tracking-wide text-center border-t-1  border-blue-600 sm:text-5xl lg:text-6xl  bg-gradient-to-b from-blue-50 to-transparent ">
        <div
          className="relative "
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
        >
          {/* <h2 className="mt-8 text-5xl tracking-wide text-center lg:text-6xl text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          REVIEWS
        </h2> */}

          <Slider {...settings} className="mx-auto ">
            {images.map((image, index) => (
              <div key={index} className="focus:outline-none px-1">
                <a
                  href="https://www.google.com/search?q=meter+electric+llc&sca_esv=05c894fd792d1e12&source=hp&ei=zjBPaMHWEbyAm9cPzvvU2Qw&iflsig=AOw8s4IAAAAAaE8-3loUOjTJwIJr9IOvhEt9VMuFltXN&ved=0ahUKEwjB9d7TpfSNAxU8wOYEHc49NcsQ4dUDCCE&uact=5&oq=meter+electric+llc&gs_lp=Egdnd3Mtd2l6IhJtZXRlciBlbGVjdHJpYyBsbGMyBhAAGBYYHjICECYyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEjmFFAAWABwAXgAkAEAmAFOoAFOqgEBMbgBA8gBAPgBAvgBAZgCAqACVJgDAJIHATKgB7wGsgcBMbgHU8IHBTAuMS4xyAcE&sclient=gws-wiz&sei=0TBPaOXfLcuc0PEP3fH66AY#lrd=0x2bcc8ea2f59d233:0x32b08f37e9e406a5,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-contain w-full h-44"
                  />
                </a>
              </div>
            ))}
          </Slider>
          <style jsx>{`
            .gallery-slider :global(.slick-slide:not(.slick-center)) {
              opacity: 0.5;
              transition: opacity 0.3s ease;
            }

            .gallery-slider :global(.slick-slide) {
              transition: all 0.3s ease;
            }

            /* Hide default slick arrows */
            .gallery-slider :global(.slick-prev),
            .gallery-slider :global(.slick-next) {
              display: none !important;
            }

            /* Only show our custom arrows */
            .gallery-slider :global(.custom-arrow) {
              display: flex !important;
            }

            /* Hover effect for arrows - more white */
            .gallery-slider :global(.custom-arrow:hover) {
              background-color: #4f85f0 !important;
            }
          `}</style>
        </div>
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
            aria-label={
              isExpanded ? "Collapse services list" : "Expand services list"
            }
            className={`flex items-center justify-center cursor-pointer w-48 h-12 text-white ${
              isExpanded
                ? "bg-zinc-950 rounded-none border-none shadow-none"
                : "border-zinc-950 border-1 bg-linear-to-r from-neutral-950 to-zinc-900 hover:to-zinc-600 shadow-zinc-600 rounded-b-md motion-preset-focus "
            }`}
          >
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
            <span className="ml-2">
              {isExpanded ? "Close" : "Click to See More"}
            </span>
          </button>
        </div>
        {/* Expandable Services Section */}
        <div
          className={` transition-max-height duration-200 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-screen px-2" : "max-h-0 "
          }`}
        >
          <div
            className={`lg:max-w-2xl lg:flex lg:justify-center lg:items-center  max-w-lg p-6 mx-auto mt-0 text-lg text-white bg-zinc-950 shadow-lg ${
              isExpanded ? "rounded-md  " : " rounded-md"
            }`}
          >
            {/* List of services */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 list-disc list-outside text-sm pl-4"
              role="list"
            >
              {services.map((service, index) => (
                <li key={index} className="pr-4 mr-2" role="listitem">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Features Section */}
        <div
          className="flex flex-wrap motion-preset-fade pt-4"
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
                  <Link
                    to={feature.link}
                    aria-label={`Learn more about ${feature.text}`}
                  >
                    {feature.description}
                  </Link>
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
        <div
          className="flex flex-col md:flex-row gap-0 items-center justify-center my-8 px-4"
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
        >
          {/* Service area map/image */}
          <div className="relative group flex flex-wrap justify-center hover:scale-102 transition-transform duration-300 ease-in-out">
            {/* Gradient blur effect on hover */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-400 to-blue-700 opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 ease-in-out -z-10"
            ></div>
            <div className="w-full px-4 py-2 sm:w-1/2 lg:w-1/1">
              {/* Image container */}
              <div>
                <img
                  className="w-full object-contain h-56"
                  src={serviceAreaImage}
                  alt="Map showing the areas we serve, including Bothell, Kirkland, and more."
                />
              </div>
            </div>
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
                    "Redmond",
                    "Shoreline",
                    "Issaquah",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-base xs:text-lg text-zinc-950"
                    >
                      <MapPinIcon className="mr-2 text-red-600" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="flex flex-col space-y-2">
                  {["Everett", "Bellevue", "Seattle", "Renton", "& More!"].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-base xs:text-lg text-zinc-950"
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
              <p className="text-lg font-semibold text-zinc-950">
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
