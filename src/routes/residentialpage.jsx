import React, { useState } from "react";
import Modal from "react-modal";
import Navbar from "../components/Navbar";
import Work2 from "../assets/services/residentialwork/2.jpg";
import Work3 from "../assets/services/residentialwork/3.jpg";
import Work4 from "../assets/services/residentialwork/4.jpg";
import Work5 from "../assets/services/residentialwork/5.jpg";
import Work6 from "../assets/services/residentialwork/6.jpg";
import ThumbnailWork from "../assets/services/residential.jpg";
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
    <div className="mt-20 min-h-[600px]">
      <Navbar />
      <h2 className="mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        RESIDENTIAL{" "}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
        <br></br> <br></br>
      </h2>

      <div className="grid grid-cols-3 gap-4 w-1/2 mx-auto">
        <div className="w-full mx-auto">
          <img
            src={ThumbnailWork}
            alt="Thumbnail Work Residential"
            className="border border-blue-600 rounded-md"
            onClick={() => openModal(ThumbnailWork)}
          />
        </div>
        <div className="w-full mx-auto">
          <img
            src={Work2}
            alt="Work 2"
            className="border border-blue-600 rounded-md"
            onClick={() => openModal(Work2)}
          />
        </div>
        <div className="w-full mx-auto">
          <img
            src={Work3}
            alt="Work 3"
            className="border border-blue-600 rounded-md"
            onClick={() => openModal(Work3)}
          />
        </div>
        <div className="w-full mx-auto">
          <img
            src={Work4}
            alt="Work 4"
            className="border border-blue-600 rounded-md"
            onClick={() => openModal(Work4)}
          />
        </div>
        <div className="w-full mx-auto">
          <img
            src={Work5}
            alt="Work 5"
            className="border border-blue-600 rounded-md"
            onClick={() => openModal(Work5)}
          />
        </div>
        <div className="w-full mx-auto">
          <img
            src={Work6}
            alt="Work 5"
            className="border border-blue-600 rounded-md"
            onClick={() => openModal(Work6)}
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
        className="modal px-2"
        overlayClassName="overlay"
      >
        <button
          onClick={closeModal}
          style={{ position: "absolute", top: "20px", right: "20px" }}
          className="close-button bg-gradient-to-r from-blue-500 to-blue-800 px-1 py-1 text-amber-50 hover:to-blue-500"
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
