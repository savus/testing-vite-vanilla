export const InputField = ({ label, id, placeholder }) => {
  return (
    <div className="input-field" id={id}>
      <label htmlFor={label} name={label}>
        {label.toUpperCase()}:
        <span className={`${label.replaceAll(" ", "-")}-input`}></span>
      </label>
      <input type="text" placeholder={placeholder} id={label} />
    </div>
  );
};
