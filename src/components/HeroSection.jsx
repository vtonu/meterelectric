import load from '../assets/herosection/load.jpg';
import tester1 from '../assets/herosection/tester1.jpg';

const HeroSection = ({ servicesRef, projectsRef }) => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-5xl tracking-wide text-center sm:text-7xl">
        <span className="font-bold text-blue-600">METER</span>
        <span className="font-bold text-red-600"> ELECTRIC</span>
      </h1>
      <br />
      <span className="font-semibold text-neutral-900">LEADER IN QUALITY ELECTRICAL SOLUTIONS</span>
      <br />
      <p className="max-w-4xl mt-10 text-center text-balance text-md text-neutral-600">
        Welcome to METER ELECTRIC, your go-to destination for quality electrical solutions. As
        specialists in the industry, we provide comprehensive commercial, residential, and
        industrial services tailored to your needs. Choose METER ELECTRIC for reliable service that
        illuminates your world with safety & efficiency.
      </p>
      <div className="flex justify-center my-10">
        <button
          onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="px-4 py-3 mx-2 font-medium border-blue-600 rounded-sm shadow-sm border-1 bg-gradient-to-r from-blue-400 to-blue-800 text-amber-50 hover:to-blue-600 shadow-sky-200">
          SERVICES
        </button>
        <button
          onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="px-4 py-3 mx-3 font-medium border-red-600 rounded-sm shadow-sm border-1 bg-gradient-to-r from-red-400 to-red-800 text-amber-50 hover:to-red-600 shadow-sky-200">
          PROJECTS
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <img
          src={tester1}
          className="w-1/3 mx-1 my-2 border border-blue-700 rounded-lg shadow-sm shadow-sky-400"
        />
        <img
          src={load}
          className="w-1/3 mx-1 my-2 border border-blue-700 rounded-lg shadow-sm shadow-sky-400"
        />
      </div>
    </div>
  );
};

export default HeroSection;
