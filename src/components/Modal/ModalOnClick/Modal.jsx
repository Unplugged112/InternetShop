import React from "react";
import "./Modal.scss";
function Modal({ active, setActive, children, classList }) {
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
        <div className="modal__close" onClick={() => handleCloseModal()}>
          <div className="modal__close-element">&times;</div>
        </div>
        <div className={`modal__wrapper ${classList}`}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
