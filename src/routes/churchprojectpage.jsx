import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import churchprojectvideo from "../assets/videos/churchproject.mp4";
import Footer from "../components/Footer";
import { MoveLeft } from "lucide-react";
import {
  useNavigate,
  useNavigationType,
  NavigationType,
} from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleReturnHome = () => {
    if (navigationType === NavigationType.POP) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="mt-20 min-h-[600px]">
      <Navbar />
      <h2 className="mt-6 text-2xl sm:text-5xl lg:text-6xl tracking-wide text-center">
        Energy Saving Project
        <br></br> <br></br>
      </h2>

      <div className="flex flex-col items-center">
        <div className="flex justify-center pb-4">
          <video
            ref={videoRef}
            autoPlay
            loop
            className="w-1/2"
            onContextMenu={(e) => e.preventDefault()}
            controls
          >
            <source src={churchprojectvideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="button-container">
        <button
          onClick={handleReturnHome}
          className="flex px-4 py-2 font-normal border-blue-600 rounded-xs shadow-xs border-1 bg-linear-to-r from-blue-500 to-blue-800 text-amber-50 hover:to-blue-600 shadow-sky-200"
        >
          <MoveLeft />
          Return Home
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
