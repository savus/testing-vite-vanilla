import { useState } from "react";

export const ControlledForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const resetFormValues = () => {
    setFirstName("");
    setLastName("");
  };
  return (
    <>
      <div className="controlled-form">
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(`Hello ${firstName}, ${lastName}`);
            resetFormValues();
          }}
        >
          <div>
            <label htmlFor="first-name">First Name: </label>
            <input
              type="text"
              name="first-name"
              value={firstName}
              onChange={({ target: { value } }) => {
                setFirstName(value);
              }}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name: </label>
            <input
              type="text"
              name="last-name"
              value={lastName}
              onChange={({ target: { value } }) => {
                setLastName(value);
              }}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};
