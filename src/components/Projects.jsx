import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project14_meterBank from "../assets/projects/project14_meterBank.jpg";
import project8_dualDisconnect from "../assets/projects/project8_dualDisconnect.jpg";
import project9_dualPanels from "../assets/projects/project9_dualPanels.jpg";
import project12_breakerPanel from "../assets/projects/project12_breakerPanel.jpg";
import project15_carCharger from "../assets/projects/project15_carCharger.jpg";
import project13_panelWiring from "../assets/projects/project13_panelWiring.png";
import project11_teslaCharger from "../assets/projects/project11_teslaCharger.png";
import project17_servicePanel from "../assets/projects/project17_servicePanel.png";
import project16_serviceCables from "../assets/projects/project16_serviceCables.png";
import project1_generacGenerator from "../assets/projects/project1_generacGenerator.png";
import project10_churchPanels from "../assets/projects/project10_churchPanels.jpeg";
import project4_pendantLights from "../assets/projects/project4_pendantLights.jpeg";
import project7_parkingLotLights from "../assets/projects/project7_parkingLotLights.jpeg";
import project5_generac26kw from "../assets/projects/project5_generac26kw.jpeg";
import project6_generacDisconnect from "../assets/projects/project6_generacDisconnect.jpeg";
import project3_generatorInletInstall from "../assets/projects/project3_generatorInletInstall.jpeg";
import project2_portableGenerator from "../assets/projects/project2_portableGenerator.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
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
  const { onClick } = props;
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
    autoplaySpeed: 4000,
    lazyLoad: "ondemand",
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
          /* infinite: false, */
        },
      },
    ],
  };

  const images = [
    { src: project1_generacGenerator, alt: "Generac generator" },
    { src: project2_portableGenerator, alt: "Portable generator" },
    { src: project3_generatorInletInstall, alt: "Generator inlet installation" },
    { src: project4_pendantLights, alt: "Pendant lights" },
    { src: project5_generac26kw, alt: "Generac 26 kW generator" },
    { src: project6_generacDisconnect, alt: "Generac disconnect" },
    { src: project7_parkingLotLights, alt: "Parking lot lights" },
    { src: project8_dualDisconnect, alt: "Dual disconnect" },
    { src: project9_dualPanels, alt: "Dual panels" },
    { src: project10_churchPanels, alt: "Church panels" },
    { src: project11_teslaCharger, alt: "Tesla charger" },
    { src: project12_breakerPanel, alt: "Breaker panel" },
    { src: project13_panelWiring, alt: "Panel wiring" },
    { src: project14_meterBank, alt: "Meter bank" },
    { src: project15_carCharger, alt: "Car charger" },
    { src: project16_serviceCables, alt: "Service cables" },
    { src: project17_servicePanel, alt: "Service panel" },
  ];

  return (
    <div className="mt-10 relative">
      <h2 className="mt-8 text-5xl tracking-wide text-center lg:text-6xl text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
        GALLERY
      </h2>
      <br></br>
      <div className="gallery-slider ">
        <Slider {...settings} className="mx-auto">
          {images.map((image, index) => (
            <div key={index} className="focus:outline-none px-1 ">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="object-contain w-full h-96 "
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
