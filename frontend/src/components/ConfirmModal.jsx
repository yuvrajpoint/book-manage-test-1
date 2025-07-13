import React from "react";

const ConfirmModal = ({ visible, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <div className="modal">
      <p>Are you sure you want to delete this book?</p>
      <button onClick={onConfirm}>Yes, Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ConfirmModal;
