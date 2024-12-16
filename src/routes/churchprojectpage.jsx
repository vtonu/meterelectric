import Navbar from '../components/Navbar';

import churchprojectvideo from '../assets/videos/churchproject.mp4';

import Footer from '../components/Footer';

import { MoveLeft } from 'lucide-react';

const Projects = () => {
  return (
    <div className="mt-20 min-h-[600px]">
      <Navbar />
      <h2 className="mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        CHURCH{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          PROJECT
        </span>
        <br></br> <br></br>
      </h2>

      <div className="flex justify-center p-2">
      <video controls className='w-1/2'>
          <source src={churchprojectvideo} type="video/mp4" />
        </video>
      </div>
      {/* <div className="button-container">
        <button
          onClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="flex px-2 py-2 mx-2 rounded-sm shadow-sm text-neutral-900 shadow-blue-300 bg-gradient-to-br from-blue-500 to-blue-100 group-hover:from-sky-500 group-hover:to-blue-100 hover:text-blue-100 dark:text-white focus:outline-none focus:ring-blue-300 dark:focus:ring-sky-800">
          <MoveLeft />
          Return Home
        </button>
      </div> */}
      <Footer />
    </div>
  );
};

export default Projects;
