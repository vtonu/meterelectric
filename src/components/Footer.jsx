import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 mt-20 text-center border-t border-blue-700">
      <h6 className="flex items-center justify-center gap-2 text-sm font-medium text-blue-700">
        LIC#: METEREL772R7
        <br></br> UBI#: 605-383-312
      </h6>
      <h3 className="flex flex-col items-center gap-2 mb-4 text-xs font-light text-neutral-700">
        <Link to="/">
          <img className="h-20 m-2 cursor-pointer" src={logo} alt="Logo" />
        </Link>
        Copyright © 2025 METER ELECTRIC LLC.
      </h3>
    </footer>
  );
};

export default Footer;
