import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1_yellow from "../assets/projects/project1_yellow.jpg";
import project2_redbluewires from "../assets/projects/project2_redbluewires.jpg";
import project3_yellowstickers from "../assets/projects/project3_yellowstickers.jpg";
import project4_housebackground from "../assets/projects/project4_housebackground.jpg";
import project5_industrialwires from "../assets/projects/project5_industrialdustwires.jpg";
import project6_panel from "../assets/projects/project6_panel.jpg";
import project7_panel from "../assets/projects/project7_panel.jpg";
import project9_generac from "../assets/projects/project9_generac.jpg";
import project10_carcharger from "../assets/projects/project10_carcharger.jpg";

// Custom Next Arrow Component
const NextArrow = (props) => {
  // Removed style prop usage to avoid conflicts with default slick styles
  const { className, onClick } = props;
  return (
    <div
      className={`${className} opacity-95`} // Keep base slick classes if needed
      onClick={onClick}
      style={{
        // Override default absolute positioning
        position: "absolute",
        bottom: "-60px", // Position below the slider/dots. Adjust this value as needed.
        left: "50%", // Start positioning from the horizontal center of the container.
        transform: "translateX(10px)", // Shift right from the center by 10px (adjust gap as needed).
        zIndex: 1, // Ensure arrows are above other elements if necessary.
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "30px",
        backgroundColor: "#1447e6", // Arrow background color.
        // Reset potentially conflicting default styles
        top: "auto",
        right: "auto",
      }}
    ></div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = (props) => {
  // Removed style prop usage
  const { className, onClick } = props;
  return (
    <div
      className={`${className} opacity-95`}
      onClick={onClick}
      style={{
        position: "absolute",
        bottom: "-60px", // Match the NextArrow's bottom position.
        left: "50%", // Start positioning from the horizontal center.
        // Shift left from the center: 100% of its own width plus a 10px gap. Adjust gap as needed.
        transform: "translateX(calc(-100% - 10px))",
        zIndex: 1,
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "30px",
        backgroundColor: "#1447e6", // Arrow background color.
        // Reset potentially conflicting default styles
        top: "auto",
        right: "auto", // Explicitly reset right positioning
      }}
    ></div>
  );
};

const Projects = () => {
  // Settings for the react-slick carousel
  const settings = {
    dots: true, // Show pagination dots
    infinite: true, // Loop slides
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    arrows: true, // Show next/prev arrows
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 5000, // Delay between slides in ms
    nextArrow: <NextArrow />, // Use custom next arrow component
    prevArrow: <PrevArrow />, // Use custom prev arrow component
  };

  // Array of image objects for the slider
  const images = [
    { src: project1_yellow, alt: "Project 1" },
    { src: project2_redbluewires, alt: "Project 2" },
    { src: project3_yellowstickers, alt: "Project 3" },
    { src: project4_housebackground, alt: "Project 4" },
    { src: project5_industrialwires, alt: "Project 5" },
    { src: project6_panel, alt: "Project 6" },
    { src: project7_panel, alt: "Project 7" },
    { src: project9_generac, alt: "Project 8" },
    { src: project10_carcharger, alt: "Project 9" },
  ];

  return (
    // Main container for the gallery section
    // Added 'relative' positioning context for the absolute positioned arrows
    <div className="mt-20 relative">
      <h2 className="mt-8 text-5xl tracking-wide text-center lg:text-6xl text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
        GALLERY
      </h2>

      {/* Slider component container */}
      {/* 'w-sm' might need adjustment based on desired slider width and Tailwind config */}
      {/* 'mx-auto' centers the slider */}
      <Slider {...settings} className="w-sm mx-auto ">
        {/* Map through the images array to create slides */}
        {images.map((image, index) => (
          <div
            key={index} // Unique key for each slide
            className="focus:outline-none motion-preset-fade motion-preset-blur-down" // Styling for the slide container
          >
            <img
              src={image.src} // Image source
              alt={image.alt} // Image alt text
              className="object-contain w-full p-2 h-96" // Image styling: contain within bounds, full width, padding, fixed height
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
