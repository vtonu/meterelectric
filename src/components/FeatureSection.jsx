import { Link } from 'react-router-dom';
import { features } from '../constants';
import { ArrowDownToLine } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const FeatureSection = () => {
  return (
    <div className="relative mt-10 border-b border-blue-700 min-h-[600px]">
      <h2 className="text-4xl tracking-wide text-center border-t border-blue-700 sm:text-5xl lg:text-6xl">
        <br></br>
        OUR{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
      </h2>
      <div className="flex flex-wrap">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="">
              <div>{feature.text}</div>
              <div className="flex items-center justify-center w-10 h-10 text-blue-700 rounded-sm">
                {feature.icon}
              </div>
              <p className="p-2 text-md text-amber-50">
                {/* Wrap the image with the Link component */}
                <Link to={feature.link}>{feature.description}</Link>
              </p>
            </div>
            <div className="flex justify-center">
              <button className="flex items-center px-4 py-2  text-white border-neutral-900 shadow-sm rounded-b-xl  border-1 bg-gradient-to-r from-neutral-900 to-neutral-800 hover:to-neutral-600 shadow-neutral-500 mt-[-10px]">
                <ChevronDown />
                See Full List
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 pb-20 md:grid-cols-3"></div>
    </div>
  );
};

export default FeatureSection;
