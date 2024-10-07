import Navbar from '../components/Navbar';

import project1_yellow from '../assets/projects/project1_yellow.jpg';

import Footer from '../components/Footer';

import { MoveLeft } from 'lucide-react';

const Projects = () => {
  return (
    <div className="mt-20 min-h-[600px]">
      <Navbar />
      <h2 className="mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        INDUSTRIAL{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
        <br></br> <br></br>
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
        <div className="w-full p-2 ">
          <img
            src={project1_yellow}
            alt="Project 3"
            className="border border-blue-600 rounded-md"
          />
        </div>
      </div>
      <div className="button-container">
        <button className="flex px-2 py-2 mx-2 rounded-sm shadow-sm text-neutral-900 shadow-blue-300">
          <MoveLeft />
          Return Home
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
