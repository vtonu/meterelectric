import useReducedMotion from "../hooks/useReducedMotion";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project14_meterBank from "../assets/projects/project14_meterBank.jpg";
import project9_dualPanels from "../assets/projects/project9_dualPanels.jpg";
import project12_breakerPanel from "../assets/projects/project12_breakerPanel.jpg";
import project15_carCharger from "../assets/projects/project15_carCharger.jpg";
import project11_teslaCharger from "../assets/projects/project11_teslaCharger.png";
import project7_parkingLotLights from "../assets/projects/project7_parkingLotLights.jpeg";
import project3_generatorInletInstall from "../assets/projects/project3_generatorInletInstall.jpeg";
import project2_portableGenerator from "../assets/projects/project2_portableGenerator.jpg";
import project16_apartmentsPete from "../assets/projects/project16_apartmentsPete.jpg";
import project17_apartmentsRoom from "../assets/projects/project17_apartmentsRoom.jpg";
import project18_apartmentsWall from "../assets/projects/project18_apartmentsWall.jpg";
import project19_blueLadder from "../assets/projects/project19_blueLadder.jpg";
import project20_brightDay from "../assets/projects/project20_brightDay.jpg";
import project21_chandelierLight from "../assets/projects/project21_chandelierLight.jpg";
import project22_epsonGadget from "../assets/projects/project22_epsonGadget.jpg";
import project23_firMan from "../assets/projects/project23_firMan.jpg";
import project24_foamIsolation from "../assets/projects/project24_foamIsolation.jpg";
import project25_generacBeautifulBrick from "../assets/projects/project25_generacBeautifulBrick.jpg";
import project26_generacBeautifulGreen from "../assets/projects/project26_generacBeautifulGreen.jpg";
import project27_greenCamera from "../assets/projects/project27_greenCamera.jpg";
import project28_housePanelUpgrade from "../assets/projects/project28_housePanelUpgrade.jpg";
import project29_kitchenMarble from "../assets/projects/project29_kitchenMarble.jpg";
import project30_luxuryChandelier from "../assets/projects/project30_luxuryChandelier.jpg";
import project31_outsideLight from "../assets/projects/project31_outsideLight.jpg";
import project32_outsidePanelPete from "../assets/projects/project32_outsidePanelPete.jpg";
import project33_parkinglotBlack from "../assets/projects/project33_parkinglotBlack.jpg";
import project34_peteNewGenerator from "../assets/projects/project34_peteNewGenerator.jpg";
import project35_pineTrees from "../assets/projects/project35_pineTrees.jpg";
import project36_redBlueWires from "../assets/projects/project36_redBlueWires.jpg";
import project37_redWiretubes from "../assets/projects/project37_redWiretubes.jpg";
import project38_redYellowWall from "../assets/projects/project38_redYellowWall.jpg";
import project39_roofAluminium from "../assets/projects/project39_roofAluminium.jpg";
import project40_tallParkinglot from "../assets/projects/project40_tallParkinglot.jpg";
import project41_westingHouse from "../assets/projects/project41_westingHouse.jpg";
import project42_whiteKitchen from "../assets/projects/project42_whiteKitchen.jpg";
import project43_wideFence from "../assets/projects/project43_wideFence.jpg";
import project44_wireModule from "../assets/projects/project44_wireModule.jpg";
import project45_yellowHousewall from "../assets/projects/project45_yellowHousewall.jpg";
import project46_yellowKitchen from "../assets/projects/project46_yellowKitchen.jpg";
import project47_yellowMeter from "../assets/projects/project47_yellowMeter.jpg";
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
    <button
      type="button"
      aria-label="Next photo"
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
      <ChevronRight size={24} color="white" aria-hidden="true" />
    </button>
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
    <button
      type="button"
      aria-label="Previous photo"
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
      <ChevronLeft size={24} color="white" aria-hidden="true" />
    </button>
  );
};

const Projects = () => {
  const reducedMotion = useReducedMotion();
  // Settings for the react-slick carousel
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    infinite: true,
    speed: reducedMotion ? 0 : 500,
    slidesToShow: 5,
    arrows: true,
    autoplay: !reducedMotion,
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
    { src: project2_portableGenerator, alt: "Portable generator" },
    { src: project3_generatorInletInstall, alt: "Generator inlet installation" },
    { src: project7_parkingLotLights, alt: "Parking lot lights" },
    { src: project9_dualPanels, alt: "Dual panels" },
    { src: project11_teslaCharger, alt: "Tesla charger" },
    { src: project12_breakerPanel, alt: "Breaker panel" },
    { src: project14_meterBank, alt: "Meter bank" },
    { src: project15_carCharger, alt: "Car charger" },
    { src: project16_apartmentsPete, alt: "apartments Pete" },
    { src: project17_apartmentsRoom, alt: "apartments Room" },
    { src: project18_apartmentsWall, alt: "apartments Wall" },
    { src: project19_blueLadder, alt: "blue Ladder" },
    { src: project20_brightDay, alt: "bright Day" },
    { src: project21_chandelierLight, alt: "chandelier Light" },
    { src: project22_epsonGadget, alt: "epson Gadget" },
    { src: project23_firMan, alt: "fir Man" },
    { src: project24_foamIsolation, alt: "foam Isolation" },
    { src: project25_generacBeautifulBrick, alt: "generac Beautiful Brick" },
    { src: project26_generacBeautifulGreen, alt: "generac Beautiful Green" },
    { src: project27_greenCamera, alt: "green Camera" },
    { src: project28_housePanelUpgrade, alt: "house Panel Upgrade" },
    { src: project29_kitchenMarble, alt: "kitchen Marble" },
    { src: project30_luxuryChandelier, alt: "luxury Chandelier" },
    { src: project31_outsideLight, alt: "outside Light" },
    { src: project32_outsidePanelPete, alt: "outside Panel Pete" },
    { src: project33_parkinglotBlack, alt: "parkinglot Black" },
    { src: project34_peteNewGenerator, alt: "pete New Generator" },
    { src: project35_pineTrees, alt: "pine Trees" },
    { src: project36_redBlueWires, alt: "red Blue Wires" },
    { src: project37_redWiretubes, alt: "red Wiretubes" },
    { src: project38_redYellowWall, alt: "red Yellow Wall" },
    { src: project39_roofAluminium, alt: "roof Aluminium" },
    { src: project40_tallParkinglot, alt: "tall Parkinglot" },
    { src: project41_westingHouse, alt: "westing House" },
    { src: project42_whiteKitchen, alt: "white Kitchen" },
    { src: project43_wideFence, alt: "wide Fence" },
    { src: project44_wireModule, alt: "wire Module" },
    { src: project45_yellowHousewall, alt: "yellow Housewall" },
    { src: project46_yellowKitchen, alt: "yellow Kitchen" },
    { src: project47_yellowMeter, alt: "yellow Meter" },
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
