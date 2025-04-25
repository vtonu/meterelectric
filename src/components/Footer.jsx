import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10  text-center border-t border-blue-700 bg-gradient-to-b from-blue-100 to-transparent">
      <h3 className="flex flex-col items-center">
        <img
          className="h-20 m-2"
          src={logo}
          alt="Logo"
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
          style={{ cursor: "default" }} // Set default cursor
        />
      </h3>
      <h6 className="flex items-center justify-center gap-2 text-sm font-medium text-blue-700">
        LIC#: METEREL772R7
        <br></br> UBI#: 605-383-312
      </h6>

      <h6 className="text-xs font-extralight text-neutral-700 ">
        Copyright © 2025 METER ELECTRIC LLC.
      </h6>
    </footer>
  );
};

export default Footer;
