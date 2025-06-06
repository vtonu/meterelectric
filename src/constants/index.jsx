import generac from "../assets/profile-pictures/generac.webp";
import commercial from "../assets/services/commercial.webp";
import residential from "../assets/services/residential.webp";
import industrial from "../assets/services/industrial.webp";
import generacgenerator from "../assets/profile-pictures/generacgenerator.jpeg"; // Generac Generator

export const navItems = [
  { label: "HOME", scrollTo: "homeRef" },
  { label: "SERVICES", scrollTo: "servicesRef" },
  { label: "GALLERY", scrollTo: "projectsRef" },
  { label: "CONTACT", scrollTo: "contactRef" },
];

export const partners = [
  {
    company: "GENERAC COMPANY",
    image: generacgenerator,
  },
];

export const features = [
  {
    description: (
      <div className="p-4 font-normal text-center  rounded-xs shadow-xs border-neutral-950  font-sm  bg-linear-to-r from-neutral-900 to-zinc-950 cursor-default shadow-neutral-300 ">
        <span className="text-2xl text-red-600">RESIDENTIAL</span>
        <p className="p-2 text-left">
          Top-quality residential services, from EV car chargers, emergency
          generators, meter service upgrades, panel replacements & more.
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
      <div className="p-4 font-normal text-center  rounded-xs shadow-xs border-neutral-950  font-sm  bg-linear-to-r from-neutral-900 to-zinc-950 cursor-default shadow-neutral-300">
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
      <div className="p-4 font-normal text-center  rounded-xs shadow-xs border-neutral-950  font-sm  bg-linear-to-r from-neutral-900 to-zinc-950 cursor-default shadow-neutral-300 ">
        <span className="text-2xl text-gray-400 ">INDUSTRIAL</span>
        <p className="p-2 text-left">
          From control systems troubleshooting to automations & controls, we are
          ready to work in any industry.
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
