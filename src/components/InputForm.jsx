import { InputField } from "./InputField";
import "../css/input-form.css";

export const InputForm = () => {
  return (
    <div className="modal-overlay" id="js-form">
      <form action="#" className="js-form">
        <div className="close-button">X</div>
        <InputField label="first name" />
      </form>
    </div>
  );
};
