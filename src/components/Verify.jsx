import { Link, useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import { useRef, useState } from "react";

import { MdOutlineMailOutline } from "react-icons/md";

const inputArr = [0, 1, 2, 3];
export default function Verify({ title, user, button, email }) {
  const [code, setCode] = useState([]);
  const [error, setError] = useState(false);
  const inputsRef = useRef([]);

  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      if (index < 3) {
        inputsRef.current[index + 1].focus();
      }
    } else {
      e.target.value = "";
    }
    setError(false);
    setCode((prev) => [...prev, value]);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  function handleVerifyEmail() {
    if (code.length < 4) {
      setCode(() => []);
      setError(true); //Throw error......
      return;
    }
    // send email verify code to the backend......
    navigate("/dashboard");
  }

  function handleResetPassword() {
    if (code.length < 4) {
      setCode(() => []);
      setError(true); //Throw error......
      return;
    }
    // send password verify code to the backend......
    navigate("/dashboard");
  }

  return (
    <div className="signupBox">
      <div className="signupBox1 verify">
        <h2>{title}</h2>
        <p className="verifyP">
          Please enter the 4-digit code that was sent to{" "}
          <span className="userSpan">{user}</span>
        </p>
        {error && <p className="errorText">Invalid input</p>}
        <div className="code-input-container">
          {inputArr.map((i) => (
            <input
              key={i}
              type="password"
              placeholder="*"
              maxLength={1}
              ref={(el) => (inputsRef.current[i] = el)}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`code-input ${error ? "error" : ""}`}
              required
            />
          ))}
        </div>
        <Button onClick={email ? handleVerifyEmail : handleResetPassword}>
          {button}
        </Button>
        <div className="ctr">
          <p className="ash">
            Didn&apos;t get the code? <Link to="/">send a new code</Link>
          </p>
        </div>
      </div>
      <div className="signupBox2">
        <div className="verifyBox">
          <div className="margin">
            <MdOutlineMailOutline className="email" />
            <h5>Email Sent!</h5>
            <p>check your email and enter the code.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
