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

const NextArrow = (props) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={`${className} opacity-95 motion-preset-fade  motion-preset-blur-down`}
      onClick={onClick}
      style={{
        ...style,
        right: "-20px",
        zIndex: 1,
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "30px",
        backgroundColor: "#1447e6",
      }}
    ></div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={`${className} opacity-95 motion-preset-fade  motion-preset-blur-down`}
      onClick={onClick}
      style={{
        ...style,
        left: "-20px",
        zIndex: 1,
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "30px",
        backgroundColor: "#1447e6",
      }}
    ></div>
  );
};

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

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
    <div className="mt-20 ">
      <h2 className="mt-8 text-5xl tracking-wide text-center lg:text-6xl text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
        GALLERY
      </h2>

      <Slider {...settings} className="w-sm mx-auto ">
        {images.map((image, index) => (
          <div
            key={index}
            className="focus:outline-none motion-preset-fade motion-preset-blur-down"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-contain w-full p-2 h-96"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
