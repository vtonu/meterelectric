import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="py-10 mt-20 text-center border-t border-blue-700">
      <h3 className="flex flex-col items-center mb-4 text-xs font-light text-neutral-700">
        <img className="h-16 m-2 cursor-pointer" src={logo} alt="Logo" />
        Copyright © 2024 METER ELECTRIC LLC.
      </h3>
    </footer>
  );
};

export default Footer;
