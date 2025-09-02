import React from "react";
import "../styles/portfolioModal.css";

export default function PortfolioModal({ image, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close" onClick={onClose}>×</div>
        <img src={image.src} alt="نمونه کار" />
        <p>{image.description}</p>
      </div>
    </div>
  );
}