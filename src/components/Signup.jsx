import Button from "./UI/Button";
import Input from "./UI/Input";

import signupImage from "../assets/signupImage.png";
import signinImage from "../assets/signinimage.jpg";
import roleImage from "../assets/Frame 62.png";
import professionalImage from "../assets/Frame 63.png";

import CustomCheckbox from "./UI/CheckBox";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function SignUp({ signIn, title, signUp, onSignIn, onSignup }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const navigate = useNavigate();

  function handleSignIn(event) {
    event.preventDefault();
    const data = {
      email,
      password,
    };

    navigate("/verify-email"); // redirect to dashboard after signin assuming if there's no error.
    onSignIn(data);
  }

  function handleSignup(event) {
    event.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    onSignup(data);
    navigate("/dashboard"); // redirect to dashboard after signin assuming if there's no error.
  }

  return (
    <div className="signupBox">
      <form
        className="signupBox1"
        onSubmit={signIn ? handleSignIn : handleSignup}
      >
        <h2>{title}</h2>
        <p>
          A place to connect with the right opportunities to advance your
          career.
        </p>
        {signIn && (
          <>
            <Input
              id="email"
              label="Email"
              placeholder="Johndoe@doe.com@gmail.com"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              id="password"
              label="Password"
              placeholder="************"
              onChange={(event) => setPassword(event.target.value)}
            />
          </>
        )}
        {signUp && (
          <>
            <Input
              id="name"
              label="Full name"
              placeholder="Owojori Habeebah"
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              id="email"
              label="Email"
              placeholder="Owojorihabeebah@gmail.com"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              id="password"
              label="Password"
              placeholder="************"
              onChange={(event) => setPassword(event.target.value)}
            />
          </>
        )}
        <Button>Continue</Button>
        {signIn && (
          <div>
            <div className="signupCheckBox">
              <CustomCheckbox />
              <Link to="forget-password" className="forget">
                forget password?
              </Link>
            </div>
          </div>
        )}

        <div className="ctr">
          {signUp && (
            <p className="ash">
              Already have an account? <Link to="/signin">sign in here</Link>
            </p>
          )}
          {signIn && (
            <p className="ash">
              Don&apos;t have an account? <Link to="/signup">sign up here</Link>
            </p>
          )}
        </div>
      </form>
      <div className="signupBox2">
        {signIn && (
          <div className="roleBox">
            <img src={signinImage} className="signupImage1" />
            <img src={roleImage} className="role1" />
            <img src={professionalImage} className="role2" />
          </div>
        )}
        {signUp && (
          <div className="roleBox">
            <img src={signupImage} className="signupImage2" />
            <div className="designer">
              <h5>Santiago Caleb</h5>
              <p>Creative designer, Instagram</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
