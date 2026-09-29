import logo from "../assets/logo.png";
import google from "../assets/googlelogo.png";
import facebook from "../assets/facebooklogo.png";

const Footer = () => {
  return (
    <footer className="py-10  text-center border-t border-blue-600 bg-gradient-to-b from-blue-100 to-transparent">
      <div className="flex justify-center">
        <a
          href="https://g.co/kgs/7HcDMAj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-10 mr-2"
            src={google}
            alt="Google Logo"
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
          />
        </a>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="h-20 m-2"
          src={logo}
          alt="Meter Electric LLC"
          style={{ cursor: "default" }} // Set default cursor
        />
      </div>
      <p className="flex items-center justify-center gap-2 text-sm font-medium text-blue-700">
        LIC#: METEREL772R7
        <br></br> UBI#: 605-383-312
      </p>
      <br></br>
      <p className="text-xs font-light text-neutral-700 ">
        Copyright © 2026 METER ELECTRIC LLC.
      </p>
    </footer>
  );
};

export default Footer;
