import { ChevronDownSquare } from 'lucide-react';

const HeroSection = ({ contactRef }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
      <p className="text-4xl font-bold text-center text-balance text-neutral-600 mt-[-60px] md:text-5xl lg:text-6xl">
        METER ELECTRIC
      </p>
      <p className="max-w-4xl mx-auto mb-4 text-center text-md text-balance text-neutral-600 md:mb-8 lg:mb-8 md:text-2xl">
        Your go-to destination for quality electrical solutions, offering residential, commercial
        and industrial services.{' '}
      </p>

      <button
        onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
        className="px-4 py-3 mx-2 font-medium border-blue-600 rounded-sm shadow-sm border-1 bg-gradient-to-r from-blue-400 to-blue-800 text-amber-50 hover:to-blue-600 shadow-sky-200 md:mb-4 lg:mb-4 md:px-6 md:py-4 md:text-lg">
        CONTACT US
      </button>
    </div>
  );
};

export default HeroSection;
