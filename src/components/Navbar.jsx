import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { Link } from 'react-router-dom';

const Navbar = ({ homeRef, servicesRef, projectsRef, contactRef }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = (ref) => {
    if (ref === null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileDrawerOpen(false); // Close the mobile drawer when a link is clicked
  };

  return (
    <nav className="sticky top-0 z-50 py-2 font-light border-b backdrop-blur-lg border-blue-700/80">
      <div className="container relative px-4 mx-auto lg:text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            {/* Wrap the logo with the Link component */}
            <Link to="/">
              <img className="h-20 m-2 cursor-pointer" src={logo} alt="Logo" />
            </Link>
            {/* <span className="text-xl tracking-tight">METER ELECTRIC LLC</span> */}
          </div>
          <ul className="hidden space-x-12 lg:flex ml-14">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    if (item.scrollTo === 'homeRef') handleScroll(null); // Scroll to top
                    if (item.scrollTo === 'servicesRef') handleScroll(servicesRef);
                    if (item.scrollTo === 'projectsRef') handleScroll(projectsRef);
                    if (item.scrollTo === 'contactRef') handleScroll(contactRef);
                  }}
                  className="p-1 text-blue-700 hover:underline hover:bg-slate-50">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex-col justify-end lg:hidden md:flex">
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 bg-neutral-200 lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button
                    onClick={() => {
                      if (item.scrollTo === 'homeRef') handleScroll(null); // Scroll to top
                      if (item.scrollTo === 'servicesRef') handleScroll(servicesRef);
                      if (item.scrollTo === 'projectsRef') handleScroll(projectsRef);
                      if (item.scrollTo === 'contactRef') handleScroll(contactRef);
                    }}
                    className="text-blue-700 hover:underline">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
