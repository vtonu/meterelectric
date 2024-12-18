import Navbar from "../components/Navbar";
import churchprojectvideo from "../assets/videos/churchproject.mp4";
import Footer from "../components/Footer";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-20 min-h-[600px]">
      <Navbar />
      <h2 className="mt-6 text-2xl sm:text-5xl lg:text-6xl tracking-wide text-center">
        Energy Saving Projects
        <br></br> <br></br>
      </h2>

      <div className="flex flex-col items-center">
        <div className="flex justify-center pb-4">
          <video
            autoPlay
            loop
            className="w-1/2"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src={churchprojectvideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="button-container">
        <button
          onClick={() => navigate(-1)}
          className="flex px-4 py-2 font-normal border-blue-600 rounded-sm shadow-sm border-1 bg-gradient-to-r from-blue-500 to-blue-800 text-amber-50 hover:to-blue-600 shadow-sky-200"
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
