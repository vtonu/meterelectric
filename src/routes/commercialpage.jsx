import React, { useState } from "react";
import Modal from "react-modal";
import Navbar from "../components/Navbar";
import Work1 from "../assets/services/commercialwork/1.jpg";
import Work2 from "../assets/services/commercialwork/2.jpg";
import ThumbnailWork from "../assets/services/commercial.jpg";
import Footer from "../components/Footer";
import { MoveLeft } from "lucide-react";
import { Minimize2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const customStyles = {
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.75)", // Dim background
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 1000, // Ensures it's above everything
    },
    content: {
      position: "relative",
      inset: "auto",
      padding: 0,
      border: "none",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "90vw",
      maxHeight: "90vh",
      overflow: "hidden",
    },
  };

  return (
    <div className=" min-h-[600px] motion-preset-blur">
      <Navbar />
      <h2 className="mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        COMMERCIAL{" "}
        <span className="text-transparent bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
        <br></br> <br></br>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
        <div className=" ">
          <img
            src={Work1}
            alt="Work 1"
            className="border border-blue-600 rounded-md "
            onClick={() => openModal(Work1)}
          />
        </div>

        <div className="">
          <img
            src={Work2}
            alt="Work 2"
            className="border border-blue-600 rounded-md"
            onClick={() => openModal(Work2)}
          />
        </div>
        <div className="">
          <img
            src={ThumbnailWork}
            alt="Thumbnail Work Commercial"
            className="border border-blue-600 rounded-md"
            onClick={() => openModal(ThumbnailWork)}
          />
        </div>
      </div>

      {/* Return Home Button */}
      <div className="flex items-center justify-center mt-8 mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex px-4 py-3 mx-2 font-medium border-blue-600 rounded-xs shadow-xs border-1 bg-linear-to-r from-blue-400 to-blue-800 text-amber-50 hover:to-blue-600 shadow-sky-200 md:mb-4 lg:mb-4 md:px-6 md:py-4 md:text-lg cursor-pointer"
        >
          <MoveLeft />
          Return Back
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
        className="modal px-16 motion-preset-focus motion-preset-expand"
        overlayClassName="overlay"
      >
        <button
          onClick={closeModal}
          style={{ position: "absolute", top: "20px", right: "20px" }}
          className="close-button bg-linear-to-r from-blue-500 to-blue-800 px-1 py-1 text-amber-50 hover:to-blue-500"
        >
          <Minimize2 />
        </button>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] object-contain"
          />
        )}
      </Modal>
      <Footer />
    </div>
  );
};

export default Projects;
