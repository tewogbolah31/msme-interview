export default function Input({ id, label, placeholder, onChange }) {
  let min = 0;
  if (id === "password") {
    min = 5;
  }

  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        minLength={min}
        className="input"
        placeholder={placeholder}
        type={id}
        onChange={onChange}
        required={true}
      ></input>
    </>
  );
}
