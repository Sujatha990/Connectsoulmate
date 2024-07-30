// Modal.js
import React from 'react';
import './modal.css'; // Import CSS if needed

const Modal = ({ show, onClose, onView }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Registration Success</h2>
        <button onClick={onView}>View Details</button>
      </div>
    </div>
  );
};

export default Modal;
