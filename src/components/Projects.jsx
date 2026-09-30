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
    { src: photo1, alt: "Project photo 1" },
    { src: photo2, alt: "Project photo 2" },
    { src: photo3, alt: "Project photo 3" },
    { src: photo4, alt: "Project photo 4" },
    { src: photo5, alt: "Project photo 5" },
    { src: photo6, alt: "Project photo 6" },
    { src: photo7, alt: "Project photo 7" },
    { src: photo8, alt: "Project photo 8" },
    { src: photo9, alt: "Project photo 9" },
    { src: photo10, alt: "Project photo 10" },
    { src: photo11, alt: "Project photo 11" },
    { src: photo12, alt: "Project photo 12" },
    { src: photo13, alt: "Project photo 13" },
    { src: photo14, alt: "Project photo 14" },
    { src: photo15, alt: "Project photo 15" },
    { src: photo16, alt: "Project photo 16" },
    { src: photo17, alt: "Project photo 17" },
    { src: photo18, alt: "Project photo 18" },
    { src: photo20, alt: "Project photo 20" },
    { src: photo21, alt: "Project photo 21" },
    { src: photo22, alt: "Project photo 22" },
    { src: photo23, alt: "Project photo 23" },
    { src: photo24, alt: "Project photo 24" },
    { src: photo25, alt: "Project photo 25" },
    { src: photo26, alt: "Project photo 26" },
    { src: photo27, alt: "Project photo 27" },
    { src: photo28, alt: "Project photo 28" },
    { src: photo29, alt: "Project photo 29" },
    { src: photo30, alt: "Project photo 30" },
    { src: photo19, alt: "Project photo 19" },
    { src: photo31, alt: "Project photo 31" },
    { src: photo32, alt: "Project photo 32" },
    { src: photo33, alt: "Project photo 33" },
    { src: photo34, alt: "Project photo 34" },
    { src: photo35, alt: "Project photo 35" },
    { src: photo36, alt: "Project photo 36" },
    { src: photo37, alt: "Project photo 37" },
    { src: photo38, alt: "Project photo 38" },
    { src: photo39, alt: "Project photo 39" },
    { src: photo40, alt: "Project photo 40" },
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
