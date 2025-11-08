import { Component } from "react";

export class ClassControlledForm extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  render() {
    const { firstName, lastName } = this.state;

    const resetFormValues = () => {
      this.setState({ firstName: "" });
      this.setState({ lastName: "" });
    };
    return (
      <>
        <div className="controlled-form">
          <form
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(firstName, lastName);
              resetFormValues();
            }}
          >
            <div>
              <label htmlFor="first-name" value={firstName}>
                First Name:
              </label>
              <input
                type="text"
                name="first-name"
                value={firstName}
                onChange={({ target: { value } }) => {
                  this.setState({ firstName: value });
                }}
              />
            </div>
            <div>
              <label htmlFor="last-name">Last Name:</label>
              <input
                type="text"
                name="last-name"
                value={lastName}
                onChange={({ target: { value } }) => {
                  this.setState({ lastName: value });
                }}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}
