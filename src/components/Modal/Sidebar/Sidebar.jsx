import React from "react";
import "./Sidebar.scss"
function ModalRight({ active, setActive, children }) {
  if (active) {
    document.body.classList.add("no-scroll");
  }
  const handleCloseModal = () => {
    setActive(false);
    document.body.classList.remove("no-scroll");
  };
  return (
    <div
      className={active ? "sidebar active" : "sidebar"}
      onClick={() => handleCloseModal()}
    >
      <div
        className={active ? "sidebar__content scale" : "sidebar__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sidebar__wrapper">{children}</div>
      </div>
    </div>
  );
}

export default ModalRight;
