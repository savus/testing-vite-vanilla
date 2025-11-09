export const InputField = ({ label }) => {
  return (
    <div className="input-field" id="username">
      <label htmlFor={label} name={label}>
        {label.toUpperCase()}:{" "}
        <span className={`${label.replaceAll(" ", "-")}-input`}></span>
      </label>
      <input type="text" placeholder={`Type ${label} here.`} id={label} />
    </div>
  );
};
