import { BatteryCharging } from 'lucide-react';
import { Cable } from 'lucide-react';
import { KeyboardMusic } from 'lucide-react';
import generac from '../assets/profile-pictures/generac.jpg';
import commercial from '../assets/services/commercial.jpg';
import residential from '../assets/services/residential.jpg';
import industrial from '../assets/services/industrial.jpg';
import project1_church from '../assets/projects/church.jpg';

export const navItems = [
  { label: 'HOME', scrollTo: 'homeRef' },
  { label: 'SERVICES', scrollTo: 'servicesRef' },
  { label: 'PROJECTS', scrollTo: 'projectsRef' },
  { label: 'CONTACT', scrollTo: 'contactRef' },
];

export const partners = [
  {
    company: 'GENERAC COMPANY',
    image: generac,
  },
];

export const features = [
  {
    icon: <KeyboardMusic />,
    text: (
      <span className="px-4 py-2 font-medium tracking-wide text-blue-700 uppercase rounded-sm text-md bg-neutral-100">
        Commercial
      </span>
    ),
    link: '/commercial',
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-600">
        <p className="text-center">
          From logic systems to automations & controls, Meter Electric provides tailored solutions
          for every project. <br></br>
          <br></br>
        </p>
        <div className="w-full p-2">
          <img
            src={commercial}
            alt="Commercial Image"
            className="object-cover h-48 border border-blue-600 rounded-md w-96"
          />
        </div>
      </div>
    ),
  },
  {
    icon: <BatteryCharging />,
    text: (
      <span className="px-4 py-2 font-medium tracking-wide text-blue-700 uppercase rounded-sm text-md bg-neutral-100">
        Residential
      </span>
    ),
    link: '/residential',
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-600">
        <p className="text-center ">
          Top-quality residential services, from EV charger installations to emergency generators,
          meter service upgrades, panel replacements & more.
        </p>
        <div className="w-full p-2">
          <img
            src={residential}
            alt="Residential Image"
            className="object-cover h-48 border border-blue-600 rounded-md w-96"
          />
        </div>
      </div>
    ),
  },
  {
    icon: <Cable />,
    text: (
      <span className="px-4 py-2 font-medium tracking-wide text-blue-700 uppercase rounded-sm text-md bg-neutral-100">
        Industrial
      </span>
    ),
    link: '/industrial',
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-600">
        <p className="text-center ">
          From control systems troubleshooting to automations & controls, Meter Electric provides
          tailored solutions for every industry.
        </p>
        <div className="w-full p-2">
          <img
            src={industrial}
            alt="Industrial Image"
            className="object-cover h-48 border border-blue-600 rounded-md w-96"
          />
        </div>
      </div>
    ),
  },
];

export const projectList = [
  {
    link: '/projects',
    description: (
      <div>
            <div className="w-1/3 pb-2">
                <img
                  src={project1_church}
                  alt="Three Hierarchs Church"
                  className="border border-blue-100 rounded-md"
                />
              </div>
              <button
                className="px-4 py-2 font-normal border-blue-600 rounded-sm shadow-sm border-1 bg-gradient-to-r from-blue-500 to-blue-800 text-amber-50 hover:to-blue-600 shadow-sky-200">
               Three Holy Hierarchs Romanian Orthodox Church
               
               <p className='font-thin'>
               6402 226th St SW Mountlake Terrace, WA 98043
               </p>
              </button>
            </div>
    ),
  },
];
