import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1_yellow from "../assets/projects/project1_yellow.jpg";
import project4_housebackground from "../assets/projects/project4_housebackground.jpg";
import project6_panel from "../assets/projects/project6_panel.jpg";
import project7_panel from "../assets/projects/project7_panel.jpg";
import project10_carcharger from "../assets/projects/project10_carcharger.jpg";
import project11_panel from "../assets/projects/project11_panel.png";
import project19_teslaev4 from "../assets/projects/project19_teslaev4.png";
import project21_service from "../assets/projects/project21_service.png";
import project21_cables from "../assets/projects/project21_cables.png";
import project23_generac3 from "../assets/projects/project23_generac3.png";
import project25_church from "../assets/projects/project25_church.jpeg";
import project26_pendant from "../assets/projects/project26_pendant.jpeg";
import project27_parkinglot from "../assets/projects/project27_parkinglot.jpeg";
import project28_generac from "../assets/projects/project28_generac.jpeg";
import project29_wall from "../assets/projects/project29_wall.jpeg";
import project30_pete from "../assets/projects/project30_pete.jpeg";
import project31_generator from "../assets/projects/project31_generator.jpg";
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
    { src: project23_generac3, alt: "Project 25" },
    { src: project31_generator, alt: "Project 31 Gen 3" },
    { src: project30_pete, alt: "Project 30 pete" },
    { src: project26_pendant, alt: "Project 26" },
    { src: project28_generac, alt: "Project 28" },
    { src: project29_wall, alt: "Project 29" },
    { src: project27_parkinglot, alt: "Project 27" },
    { src: project4_housebackground, alt: "Project 4" },
    { src: project6_panel, alt: "Project 6" },
    { src: project25_church, alt: "Project 25" },
    { src: project19_teslaev4, alt: "Project 19" },
    { src: project7_panel, alt: "Project 7" },
    { src: project11_panel, alt: "Project 11" },
    { src: project1_yellow, alt: "Project 1" },
    { src: project10_carcharger, alt: "Project 9" },
    { src: project21_cables, alt: "Project 22" },
    { src: project21_service, alt: "Project 21" },
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
