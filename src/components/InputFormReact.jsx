import { InputField } from "./InputField";
import "../css/input-form.css";
import { useState } from "react";

export const InputFormReact = ({ activeModal, setActiveModal }) => {
  const checkIfVisible = (modal) => (activeModal === modal ? "is-visible" : "");
  return (
    <div className={`modal-overlay ${checkIfVisible("form")}`} id="js-form">
      <form action="#" className="js-form">
        <div
          className="close-button"
          onClick={() => {
            setActiveModal("none");
          }}
        >
          X
        </div>
        <InputField
          label="first-name"
          id="first-name"
          placeholder={"Type your first name here"}
        />
      </form>
    </div>
  );
};
