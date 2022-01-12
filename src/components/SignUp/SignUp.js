import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import useStore from "../../hooks/useStore";

const SignUp = () => {
  const {
    signInWithGoogle,
    signupUsingEmailAndPassword,
    setEmail,
    setPassword,
  } = useStore();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();
  const handleEmail = (e) => {
    const email = e.target.value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid Email");
      return;
    }
    setEmailError("");
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setPasswordError("Password must be 6 character");
      return;
    }
    setPasswordError("");
    setPassword(password);
  };
  const handleSignupUsingEmailAndPassword = (e) => {
    e.preventDefault();
    signupUsingEmailAndPassword().then((result) => {
      history.push("/");
    });
  };
  const handleignInGoogle = () => {
    signInWithGoogle().then((result) => {
      history.push("/");
    });
  };
  return (
    <div>
      <h2 className="text-center fw-bold my-4">Please Sign Up</h2>
      <form
        className="w-50 m-auto"
        onSubmit={handleSignupUsingEmailAndPassword}
      >
        <input
          className="form-control mb-2"
          placeholder="You Email"
          onChange={handleEmail}
        />
        <small className="text-danger">{emailError}</small>
        <input
          placeholder="Your Password"
          className="form-control"
          type="password"
          onChange={handlePassword}
        />
        <small className="text-danger">{passwordError}</small>
        <div>
          <input
            className="my-4 btn btn-success"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>
      <div className="text-center my-5">
        <Button onClick={handleignInGoogle}>Google Sign In</Button>
      </div>
      <p className="text-center my5">
        Already Sign Up? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
