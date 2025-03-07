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
    link: '/residential',
    description: (
      <div className="p-6 font-normal text-center border rounded-md shadow-sm border-neutral-900 rounded-b-xl font-sm border-1 bg-gradient-to-r from-neutral-900 to-neutral-800 hover:to-neutral-600 shadow-neutral-500">
        <span className="text-2xl text-red-600">RESIDENTIAL</span>
        <p className="p-3 text-left">
          Top-quality residential services, from EV charger installations to emergency generators,
          meter service upgrades, panel replacements & more.
        </p>
        <img src={residential} alt="Industrial Image" className="object-cover w-full h-48 " />
      </div>
    ),
  },
  {
    link: '/commercial',
    description: (
      <div className="p-6 font-normal text-center border rounded-md shadow-sm border-neutral-900 rounded-b-xl font-sm border-1 bg-gradient-to-r from-neutral-900 to-neutral-800 hover:to-neutral-600 shadow-neutral-500">
        <span className="text-2xl text-blue-500">COMMERCIAL</span>
        <p className="p-3 text-left">
          From logic systems to automations & controls, Meter Electric provides tailored solutions
          for every project. <br></br>
          <br></br>
        </p>
        <img src={commercial} alt="Commercial Image" className="object-cover w-full h-48 " />
      </div>
    ),
  },

  {
    link: '/industrial',
    description: (
      <div className="p-6 font-normal text-center border rounded-md shadow-sm border-neutral-900 rounded-b-xl font-sm border-1 bg-gradient-to-r from-neutral-900 to-neutral-800 hover:to-neutral-600 shadow-neutral-500">
        <span className="text-2xl text-gray-400 ">INDUSTRIAL</span>

        <p className="p-3 text-left">
          From control systems troubleshooting to automations & controls, Meter Electric provides
          tailored solutions for every industry.
        </p>
        <img src={industrial} alt="Industrial Image" className="object-cover w-full h-48 " />
      </div>
    ),
  },
];

export const projectList = [
  {
    link: '/projects',
    description: (
      <div className="flex flex-col items-center">
        <div className="w-full px-4 pb-2 sm:w-1/3 sm:px-0">
          <img
            src={project1_church}
            alt="Three Hierarchs Church"
            className="border border-blue-100 rounded-md"
          />
        </div>
        <div className="w-full px-4 sm:w-1/3 sm:px-0">
          <div className="px-2 py-1 font-normal text-center border-blue-600 rounded-sm shadow-sm border-1 bg-gradient-to-r from-blue-500 to-blue-800 text-amber-50 hover:to-blue-600 shadow-sky-200">
            <span className="text-xs font-semibold sm:text-sm md:text-base lg:text-md">
              Three Holy Hierarchs Romanian Orthodox Church
            </span>
            <p className="text-xs font-thin sm:text-sm md:text-base lg:text-md">
              6402 226th St SW Mountlake Terrace, WA 98043
            </p>
          </div>
        </div>
      </div>
    ),
  },
];
