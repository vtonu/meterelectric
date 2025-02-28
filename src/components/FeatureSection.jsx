import { Link } from 'react-router-dom';
import { features } from '../constants';
import { ArrowDownToLine } from 'lucide-react';

const FeatureSection = () => {
  return (
    <div className="relative mt-10 border-b border-blue-700 min-h-[600px]">
      <h2 className="text-5xl tracking-wide text-center border-t border-blue-700 sm:text-5xl lg:text-6xl">
        <br></br>
        OUR{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
        <br></br> <br></br>
        <div className="flex justify-center gap-4">
          <span className="px-4 py-2 text-sm font-medium tracking-wide text-blue-700 uppercase rounded-sm bg-neutral-100">
            Residential
          </span>
          <span className="px-4 py-2 text-sm font-medium tracking-wide text-blue-700 uppercase rounded-sm bg-neutral-100">
            Commercial
          </span>

          <span className="px-4 py-2 text-sm font-medium tracking-wide text-blue-700 uppercase rounded-sm bg-neutral-100">
            Industrial
          </span>
        </div>
      </h2>
      <div className="flex flex-wrap">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="grid gap-4 justify-items-center">
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
              <button className="flex items-center p-2 text-white border-red-600 rounded-sm shadow-sm font-sm border-1 bg-gradient-to-r from-red-400 to-red-800 hover:to-red-600 shadow-red-200">
                <ArrowDownToLine />
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
