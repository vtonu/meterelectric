import generac from "../assets/profile-pictures/generac.jpg";
import commercial from "../assets/services/commercial.jpg";
import residential from "../assets/services/residential.jpg";
import industrial from "../assets/services/industrial.jpg";
import project1_church from "../assets/projects/church.jpg";

export const navItems = [
  { label: "HOME", scrollTo: "homeRef" },
  { label: "SERVICES", scrollTo: "servicesRef" },
  { label: "PROJECTS", scrollTo: "projectsRef" },
  { label: "CONTACT", scrollTo: "contactRef" },
];

export const partners = [
  {
    company: "GENERAC COMPANY",
    image: generac,
  },
];

export const features = [
  {
    description: (
      <div className="p-4 font-normal text-center  rounded-xs shadow-xs border-neutral-900  font-sm  bg-linear-to-r from-neutral-900 to-neutral-900 cursor-default shadow-neutral-500">
        <span className="text-2xl text-red-600">RESIDENTIAL</span>
        <p className="p-2 text-left">
          Top-quality residential services, from EV charger installations to
          emergency generators, meter service upgrades, panel replacements &
          more.
        </p>
        <img
          src={residential}
          alt="Industrial Image"
          className="object-cover w-full h-48 "
        />
      </div>
    ),
  },
  {
    description: (
      <div className="p-4 font-normal text-center  rounded-xs shadow-xs border-neutral-900 font-sm  bg-linear-to-r from-neutral-900 to-neutral-900 cursor-default shadow-neutral-500">
        <span className="text-2xl text-blue-500">COMMERCIAL</span>
        <p className="p-2 text-left">
          From logic systems to automations & controls, Meter Electric provides
          tailored solutions for every project.
        </p>
        <br></br>
        <img
          src={commercial}
          alt="Commercial Image"
          className="object-cover w-full h-48 "
        />
      </div>
    ),
  },

  {
    description: (
      <div className="p-4 font-normal text-center  rounded-xs shadow-xs border-neutral-900  font-sm  bg-linear-to-r from-neutral-900 to-neutral-900 cursor-default shadow-neutral-500">
        <span className="text-2xl text-gray-400 ">INDUSTRIAL</span>
        <p className="p-2 text-left">
          From control systems troubleshooting to automations & controls, Meter
          Electric provides tailored solutions for every industry.
        </p>
        <br></br>
        <img
          src={industrial}
          alt="Industrial Image"
          className="object-cover w-full h-48 "
        />
      </div>
    ),
  },
];

export const projectList = [
  {
    link: "/projects",
    description: (
      <div className="flex flex-col items-center">
        <div className="sm:w-1/3 sm:px-2">
          <img
            src={project1_church}
            alt="Three Hierarchs Church"
            className="border border-blue-100 rounded-sm"
          />
          <div className="p-2 mt-2 font-normal text-center border-blue-600 rounded-xs shadow-xs border-1 bg-linear-to-r from-blue-500 to-blue-800 text-amber-50 hover:to-blue-600 shadow-sky-200">
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
