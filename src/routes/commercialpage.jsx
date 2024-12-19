import Navbar from "../components/Navbar";
import Work1 from "../assets/services/commercialwork/1.jpg";
import Work2 from "../assets/services/commercialwork/2.jpg";
import ThumbnailWork from "../assets/services/commercial.jpg";
import Footer from "../components/Footer";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-20 min-h-[600px]">
      <Navbar />
      <h2 className="mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        COMMERCIAL{" "}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
        <br></br> <br></br>
      </h2>

      <div className="grid grid-cols-2 w-1/2 mx-auto gap-4">
        <div className="w-full mx-auto">
          <img
            src={Work1}
            alt="Work 1"
            className="border border-blue-600 rounded-md"
          />
        </div>
        <div className="w-full mx-auto">
          <img
            src={Work2}
            alt="Work 2"
            className="border border-blue-600 rounded-md"
          />
        </div>
        <div className="w-full mx-auto">
          <img
            src={ThumbnailWork}
            alt="Thumbnail Work Commercial"
            className="border border-blue-600 rounded-md"
          />
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
