import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1_yellow from "../assets/projects/project1_yellow.jpg";
import project3_yellowstickers from "../assets/projects/project3_yellowstickers.jpg";
import project4_housebackground from "../assets/projects/project4_housebackground.jpg";

import project6_panel from "../assets/projects/project6_panel.jpg";
import project7_panel from "../assets/projects/project7_panel.jpg";
import project9_generac from "../assets/projects/project9_generac.jpg";
import project10_carcharger from "../assets/projects/project10_carcharger.jpg";
import project11_panel from "../assets/projects/project11_panel.png";
import project12_teslaev from "../assets/projects/project12_teslaev.png";
import project13_whitelights from "../assets/projects/project13_whitelights.png";
import project14_teslaev2 from "../assets/projects/project14_teslaev2.png";
import project15_service from "../assets/projects/project15_service.png";
import project16_panels from "../assets/projects/project16_panels.png";
import project17_panels from "../assets/projects/project17_panels.png";
import project18_teslaev3 from "../assets/projects/project18_teslaev3.png";
import project19_teslaev4 from "../assets/projects/project19_teslaev4.png";
import project20_service from "../assets/projects/project20_service.png";
import project21_service from "../assets/projects/project21_service.png";
import project21_cables from "../assets/projects/project21_cables.png";
import project22_generacbene from "../assets/projects/project22_generacbene.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        backgroundColor: "#2563EB",
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
        backgroundColor: "#2563EB",
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

const Projects = () => {
  // Settings for the react-slick carousel
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    { src: project13_whitelights, alt: "Project 13" },

    { src: project9_generac, alt: "Project 8" },
    { src: project22_generacbene, alt: "Project 22" },
    { src: project4_housebackground, alt: "Project 4" },
    { src: project6_panel, alt: "Project 6" },

    { src: project18_teslaev3, alt: "Project 18" },
    { src: project19_teslaev4, alt: "Project 19" },
    { src: project12_teslaev, alt: "Project 12" },
    { src: project7_panel, alt: "Project 7" },
    { src: project3_yellowstickers, alt: "Project 3" },
    { src: project14_teslaev2, alt: "Project 14" },
    { src: project11_panel, alt: "Project 11" },

    { src: project1_yellow, alt: "Project 1" },
    { src: project15_service, alt: "Project 15" },
    { src: project16_panels, alt: "Project 16" },
    { src: project17_panels, alt: "Project 17" },
    { src: project10_carcharger, alt: "Project 9" },
    { src: project20_service, alt: "Project 20" },

    { src: project21_cables, alt: "Project 22" },
    { src: project21_service, alt: "Project 21" },
  ];

  return (
    <div
      className="mt-10 relative"
      onContextMenu={(e) => e.preventDefault()} // Disable right-click
    >
      <h2 className="mt-8 text-5xl tracking-wide text-center lg:text-6xl text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
        GALLERY
      </h2>
      <br></br>
      <div className="gallery-slider motion-preset-blur-down">
        <Slider {...settings} className="mx-auto">
          {images.map((image, index) => (
            <div key={index} className="focus:outline-none px-1">
              <img
                src={image.src}
                alt={image.alt}
                className="object-contain w-full h-96"
              />
            </div>
          ))}
        </Slider>
      </div>
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
  );
};

export default Projects;
