import { useState } from "react";

export default function CustomCheckbox () {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span className="checkmark"></span>
      Keep me logged in
    </label>
  );
};


