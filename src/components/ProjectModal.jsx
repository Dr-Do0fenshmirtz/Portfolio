import { useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // match transition duration
  };

  return (
    <div
      style={{
        ...overlayStyle,
        opacity: isClosing ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}
      onClick={handleClose}
    >
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeBtn} onClick={handleClose}>
          ✕
        </button>

        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <iframe
          src={project.link}
          title={project.title}
          onLoad={() => setIsLoaded(true)}
          style={{
            width: "100%",
            height: "400px",
            border: "1px solid #ccc",
            marginTop: "20px",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  width: "80%",
  maxWidth: "900px",
  position: "relative",
};

const closeBtn = {
  background: "red",
  position: "absolute",
  top: "10px",
  right: "15px",
  fontSize: "18px",
  cursor: "pointer",
};
