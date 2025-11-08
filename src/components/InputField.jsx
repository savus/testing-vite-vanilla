export const InputField = ({ label }) => {
  return (
    <div className="input-field">
      <label htmlFor={label} name={label}>
        {label.toUpperCase()}:
      </label>
      <input
        type="text"
        value=""
        placeholder={`Type ${label} here.`}
        id={label}
      />
    </div>
  );
};
