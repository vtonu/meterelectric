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
          <div className="flex items-center shrink-0 m-4">
            <button onClick={handleLogoClick}>
              <img className="h-20 cursor-pointer" src={logo} alt="Logo" />
            </button>
          </div>

          {/* Phone number for desktop */}
          <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <a
              href="tel:425-561-9562"
              className="flex items-center gap-2 text-xl font-semibold text-blue-600"
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
                  className="p-1 text-blue-700 hover:underline hover:bg-blue-100 cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle button */}
          <div className="flex-col justify-end lg:hidden md:flex">
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
                    className="text-blue-700 hover:underline"
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
          className="flex items-center justify-center gap-2 text-xl font-semibold text-blue-600 pb-2 lg:hidden"
        >
          <PhoneCall />
          <p>425-561-9562</p>
        </a>
      </div>

      <div className="relative p-2 mx-auto bg-blue-600 lg:text-sm"></div>
    </nav>
  );
};

export default Navbar;
