import useReducedMotion from "../hooks/useReducedMotion";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../assets/projects/1.webp";
import photo2 from "../assets/projects/2.webp";
import photo3 from "../assets/projects/3.webp";
import photo4 from "../assets/projects/4.webp";
import photo5 from "../assets/projects/5.webp";
import photo6 from "../assets/projects/6.webp";
import photo7 from "../assets/projects/7.webp";
import photo8 from "../assets/projects/8.webp";
import photo9 from "../assets/projects/9.webp";
import photo10 from "../assets/projects/10.webp";
import photo11 from "../assets/projects/11.webp";
import photo12 from "../assets/projects/12.webp";
import photo13 from "../assets/projects/13.webp";
import photo14 from "../assets/projects/14.webp";
import photo15 from "../assets/projects/15.webp";
import photo16 from "../assets/projects/16.webp";
import photo17 from "../assets/projects/17.webp";
import photo18 from "../assets/projects/18.webp";
import photo19 from "../assets/projects/19.webp";
import photo20 from "../assets/projects/20.webp";
import photo21 from "../assets/projects/21.webp";
import photo22 from "../assets/projects/22.webp";
import photo23 from "../assets/projects/23.webp";
import photo24 from "../assets/projects/24.webp";
import photo25 from "../assets/projects/25.webp";
import photo26 from "../assets/projects/26.webp";
import photo27 from "../assets/projects/27.webp";
import photo28 from "../assets/projects/28.webp";
import photo29 from "../assets/projects/29.webp";
import photo30 from "../assets/projects/30.webp";
import photo31 from "../assets/projects/31.webp";
import photo32 from "../assets/projects/32.webp";
import photo33 from "../assets/projects/33.webp";
import photo34 from "../assets/projects/34.webp";
import photo35 from "../assets/projects/35.webp";
import photo36 from "../assets/projects/36.webp";
import photo37 from "../assets/projects/37.webp";
import photo38 from "../assets/projects/38.webp";
import photo39 from "../assets/projects/39.webp";
import photo40 from "../assets/projects/40.webp";
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
    speed: reducedMotion ? 0 : 350,
    slidesToShow: 1,
    variableWidth: true,
    arrows: true,
    autoplay: !reducedMotion,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          speed: reducedMotion ? 0 : 500,
          lazyLoad: "ondemand",
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          speed: reducedMotion ? 0 : 500,
          lazyLoad: "ondemand",
          centerPadding: "0px",
          /* infinite: false, */
        },
      },
    ],
  };

  const images = [
    { src: photo1, alt: "Project photo 1", width: 810, height: 1080 },
    { src: photo2, alt: "Project photo 2", width: 3220, height: 4293 },
    { src: photo3, alt: "Project photo 3", width: 3464, height: 3464 },
    { src: photo4, alt: "Project photo 4", width: 3024, height: 4032 },
    { src: photo5, alt: "Project photo 5", width: 613, height: 793 },
    { src: photo6, alt: "Project photo 6", width: 707, height: 955 },
    { src: photo7, alt: "Project photo 7", width: 3371, height: 2740 },
    { src: photo8, alt: "Project photo 8", width: 1382, height: 2547 },
    { src: photo9, alt: "Project photo 9", width: 3024, height: 4032 },
    { src: photo10, alt: "Project photo 10", width: 4032, height: 3024 },
    { src: photo11, alt: "Project photo 11", width: 2385, height: 1487 },
    { src: photo12, alt: "Project photo 12", width: 4032, height: 3024 },
    { src: photo13, alt: "Project photo 13", width: 3024, height: 4032 },
    { src: photo14, alt: "Project photo 14", width: 2753, height: 3451 },
    { src: photo15, alt: "Project photo 15", width: 3024, height: 3441 },
    { src: photo16, alt: "Project photo 16", width: 3024, height: 4032 },
    { src: photo17, alt: "Project photo 17", width: 4090, height: 5453 },
    { src: photo18, alt: "Project photo 18", width: 4032, height: 3024 },
    { src: photo20, alt: "Project photo 20", width: 2529, height: 3007 },
    { src: photo21, alt: "Project photo 21", width: 2864, height: 1272 },
    { src: photo22, alt: "Project photo 22", width: 4032, height: 3024 },
    { src: photo23, alt: "Project photo 23", width: 2824, height: 3705 },
    { src: photo24, alt: "Project photo 24", width: 2525, height: 3464 },
    { src: photo25, alt: "Project photo 25", width: 2914, height: 3429 },
    { src: photo26, alt: "Project photo 26", width: 2837, height: 3782 },
    { src: photo27, alt: "Project photo 27", width: 3024, height: 3734 },
    { src: photo28, alt: "Project photo 28", width: 3024, height: 4032 },
    { src: photo29, alt: "Project photo 29", width: 2728, height: 3637 },
    { src: photo30, alt: "Project photo 30", width: 2014, height: 3440 },
    { src: photo19, alt: "Project photo 19", width: 4032, height: 2294 },
    { src: photo31, alt: "Project photo 31", width: 3035, height: 1903 },
    { src: photo32, alt: "Project photo 32", width: 3024, height: 4032 },
    { src: photo33, alt: "Project photo 33", width: 2084, height: 4032 },
    { src: photo34, alt: "Project photo 34", width: 3024, height: 3608 },
    { src: photo35, alt: "Project photo 35", width: 3024, height: 3347 },
    { src: photo36, alt: "Project photo 36", width: 3710, height: 1412 },
    { src: photo37, alt: "Project photo 37", width: 3024, height: 4032 },
    { src: photo38, alt: "Project photo 38", width: 2701, height: 1768 },
    { src: photo39, alt: "Project photo 39", width: 3024, height: 3504 },
    { src: photo40, alt: "Project photo 40", width: 3024, height: 4032 },
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
            <div
              key={index}
              className="focus:outline-none px-1 lg:px-4 "
              style={{
                width: Math.round((image.width / image.height) * 384) + 32,
              }}
            >
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
