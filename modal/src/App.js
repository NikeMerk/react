import React from "react";
import "./css/style.css";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  let [open, setOpen] = useState(false);
  return (
    <div className="container">
      <button className="open-modal" onClick={() => setOpen(true)}>
        open-modal
      </button>
      {/* <div className={`modal ${open ? "show-modal" : console.log("fuuuck")}`}>
        <div className="modal-content">
          <h3 className="modal__title">Some title</h3>
          <p className="modal__text">Some text</p>
          <div className="modal__block-button">
            <button className="btn modal__button-done">done</button>
            <button
              className="btn modal__button-exit"
              onClick={() => setOpen(false)}
            >
              exit
            </button>
          </div>
        </div>
      </div> */}
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}
export default App;
