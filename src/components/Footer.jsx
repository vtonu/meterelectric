import logo from "../assets/logo.png";
import google from "../assets/googlelogo.png";
import facebook from "../assets/facebooklogo.png";

const Footer = () => {
  return (
    <footer
      className="py-10  text-center border-t border-blue-600 bg-gradient-to-b from-blue-100 to-transparent"
      onContextMenu={(e) => e.preventDefault()} // Disable right-click
    >
      <h3 className="flex justify-center">
        <a
          href="https://g.co/kgs/7HcDMAj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-10 mr-2"
            src={google}
            alt="Google Logo"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
          />
        </a>
        <a
          href="https://www.facebook.com/people/Meter-Electric-LLC/61577419228409/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-10 ml-2"
            src={facebook}
            alt="Facebook Logo"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
          />
        </a>
      </h3>
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
      <br></br>
      <h6 className="text-xs font-light text-neutral-700 ">
        Copyright © 2025 METER ELECTRIC LLC.
      </h6>
    </footer>
  );
};

export default Footer;
