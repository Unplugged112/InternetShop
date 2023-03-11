import React from "react";
import styles from "./Modal.scss";
function Modal({ active, setActive, children }) {
  if (active) {
    document.body.classList.add("no-scroll");
  }
  const handleCloseModal = () => {
    setActive(false);
    document.body.classList.remove("no-scroll");
  }
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => handleCloseModal()}
    >
      <div
        className={active ? "modal__content scale" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__wrapper">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
