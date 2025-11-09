import { Component, useState } from "react";

export const ClassControlledForm = ({ handleUserInformation }) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  const resetFormValues = () => {
    setFirstNameInput("");
    setLastNameInput("");
  };

  return (
    <>
      <div>{firstNameInput}</div>
      <div className="controlled-form">
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            handleUserInformation({
              firstName: firstNameInput,
              lastName: lastNameInput,
            });
            resetFormValues();
          }}
        >
          <div>
            <label htmlFor="first-name" value={firstNameInput}>
              First Name:
            </label>
            <input
              type="text"
              name="first-name"
              value={firstNameInput}
              onChange={({ target: { value } }) => {
                setFirstNameInput(value);
              }}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              name="last-name"
              value={lastNameInput}
              onChange={({ target: { value } }) => {
                setLastNameInput(value);
              }}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};
