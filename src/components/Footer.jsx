import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-10 mt-20 text-center border-t border-blue-700">
      <h3 className="flex flex-col items-center gap-2 mb-4 text-xs font-light text-neutral-700">
        <Link to="/">
          <img className="h-20 m-2 cursor-pointer" src={logo} alt="Logo" />
        </Link>
        {/* Copyright © 2024 METER ELECTRIC LLC. */}
      </h3>
    </footer>
  );
};

export default Footer;
