import { Menu, X, PhoneCall } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ homeRef, servicesRef, projectsRef, contactRef }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = (ref) => {
    if (ref === null) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileDrawerOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 font-light backdrop-blur-lg border-blue-700/80 ">
      <div className="container relative px-4 mx-auto lg:text-sm">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <button onClick={handleLogoClick} className="mx-auto lg:mx-0">
            <img className="h-28 cursor-pointer pl-8" src={logo} alt="Logo" />
          </button>

          {/* Phone number for desktop */}
          <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <a
              href="tel:425-561-9562"
              className="flex items-center gap-2 text-4xl font-semibold text-red-600 hover:text-red-500 hover:scale-102 transition-transform duration-300 ease-in-out"
            >
              <PhoneCall />
              <span>425-561-9562</span>
            </a>
          </div>

          {/* Desktop navigation menu */}
          <ul className="hidden space-x-12 lg:flex ml-14">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    if (item.scrollTo === "homeRef") handleScroll(null);
                    if (item.scrollTo === "servicesRef")
                      handleScroll(servicesRef);
                    if (item.scrollTo === "projectsRef")
                      handleScroll(projectsRef);
                    if (item.scrollTo === "contactRef")
                      handleScroll(contactRef);
                  }}
                  className="p-1 text-blue-700 relative bg-[linear-gradient(transparent,transparent),linear-gradient(#3b82f6,#3b82f6)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat transition-[background-size,color] duration-300 hover:bg-[0_2px,100%_2px] hover:text-blue-500 cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile drawer menu */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 bg-neutral-200 lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button
                    onClick={() => {
                      if (item.scrollTo === "homeRef") handleScroll(null);
                      if (item.scrollTo === "servicesRef")
                        handleScroll(servicesRef);
                      if (item.scrollTo === "projectsRef")
                        handleScroll(projectsRef);
                      if (item.scrollTo === "contactRef")
                        handleScroll(contactRef);
                    }}
                    className="text-blue-700 relative bg-[linear-gradient(transparent,transparent),linear-gradient(#3b82f6,#3b82f6)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px] cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Phone number for mobile */}
        <a
          href="tel:425-561-9562"
          className="flex items-center justify-center gap-2 text-xl font-semibold text-red-600 pb-2 lg:hidden"
        >
          <PhoneCall />
          <p>425-561-9562</p>
        </a>
      </div>

      <div className="relative p-1 mx-auto bg-blue-600 lg:text-sm"></div>
    </nav>
  );
};

export default Navbar;
