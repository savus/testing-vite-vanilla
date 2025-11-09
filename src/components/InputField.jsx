export const InputField = ({ label }) => {
  return (
    <div className="input-field">
      <label htmlFor={label} name={label}>
        {label.toUpperCase()}:
      </label>
      <input type="text" placeholder={`Type ${label} here.`} id={label} />
    </div>
  );
};
