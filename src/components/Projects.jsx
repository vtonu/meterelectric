import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1_yellow from '../assets/projects/project1_yellow.jpg';
import project2_redbluewires from '../assets/projects/project2_redbluewires.jpg';
import project3_yellowstickers from '../assets/projects/project3_yellowstickers.jpg';
import project4_housebackground from '../assets/projects/project4_housebackground.jpg';
import { Link } from 'react-router-dom';
import { projectList } from '../constants';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
  };

  const images = [
    { src: project1_yellow, alt: 'Project 3' },
    { src: project2_redbluewires, alt: 'Project 4' },
    { src: project3_yellowstickers, alt: 'Project 2' },
    { src: project4_housebackground, alt: 'Project 2' },
  ];

  return (
    <div className="mt-20 min-h-[600px]">
      <h2 className="mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        OUR{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          PROJECTS
        </span>
        <br></br> <br></br>
      </h2>
      <div>
        {projectList.map((project, index) => (
          <div key={index}>
            <Link to={project.link}>{project.description}</Link>
          </div>
        ))}
      </div>

      <Slider {...settings} className="pt-8">
        {images.map((image, index) => (
          <div key={index} className="w-full p-2">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-96 border border-blue-600 rounded-md lg:h-96 xl:h-[50rem]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
