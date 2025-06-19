import Button from "../components/UI/Button";
import IconBox from "../components/UI/IconBox";
import Input from "../components/UI/Input";

import { BsBriefcase } from "react-icons/bs";
import { GoDatabase } from "react-icons/go";
import { BiBuildings } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgetPasswordPage() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState();

  function handleForgetPassword(event) {
    event.preventDefault();

    //check for validation and errors
    console.log(userEmail); // user email send to backend if there is no error
    navigate("/dashboard");
  }
  return (
    <div className="signupBox">
      <form className="signupBox1 forgetTop" onSubmit={handleForgetPassword}>
        <h2>Forget Password?</h2>
        <p>
          No worries, we would send you a reset pin to change your password.
        </p>
        <Input
          id="email"
          label="Email"
          placeholder="Owojorihabeebah@gmail.com"
          onChange={(event) => {
            setUserEmail(event.target.value);
          }}
        />
        <Button>Reset Password</Button>
      </form>
      <div className="signupBox2">
        <div className="forgetBox">
          <h2>You can do More with Us!</h2>
          <div className="iconDiv">
            <IconBox text="Find jobs" Icon={BsBriefcase} style="style1" />
            <IconBox text="Best matches" Icon={GoDatabase} style="style2" />
            <IconBox text="professional expert" Icon={BiBuildings} />
          </div>
        </div>
      </div>
    </div>
  );
}
