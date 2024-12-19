import React, { useState } from "react";
import Modal from "react-modal";
import Navbar from "../components/Navbar";
import project1_yellow from "../assets/projects/project1_yellow.jpg";
import ThumbnailWork from "../assets/services/industrial.jpg";
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
    content: {
      transform: "translate(0%, -100%)",
      maxWidth: "100vw",
      maxHeight: "80vh",
      overflow: "none",
    },
  };

  return (
    <div className="mt-20 min-h-[600px]">
      <Navbar />
      <h2 className="mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        INDUSTRIAL{" "}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
        <br></br> <br></br>
      </h2>

      <div className="grid grid-cols-2 ">
        <div className="w-1/2 mx-auto">
          <img
            src={project1_yellow}
            alt="Project 3"
            className="border border-blue-600 rounded-md"
            onClick={() => openModal(project1_yellow)}
          />
        </div>
        <div className="w-1/2 mx-auto">
          <img
            src={ThumbnailWork}
            alt="Thumbnail Work Industrial"
            className="border border-blue-600 rounded-md"
            onClick={() => openModal(ThumbnailWork)}
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
          <img src={selectedImage} alt="Selected" className="modal-image" />
        )}
      </Modal>
      <Footer />
    </div>
  );
};

export default Projects;
