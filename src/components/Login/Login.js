import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ContextApi } from "../../App";

const Login = () => {
  const {
    signInWithGoogle,
    signInUsingEmailAndPassword,
    setLoginEmail,
    setLoginPassword,
  } = useContext(ContextApi);

  const logInEmail = (e) => {
    setLoginEmail(e.target.value);
  };
  const LoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };
  return (
    <div>
      <h2 className="text-center fw-bold my-4">Please Sign In</h2>
      <form className="w-50 m-auto" onSubmit={signInUsingEmailAndPassword}>
        <input
          className="form-control mb-2"
          placeholder="You Email"
          onChange={logInEmail}
        />
        <input
          placeholder="Your Password"
          className="form-control"
          type="password"
          onChange={LoginPassword}
        />
        <div>
          <input
            className="my-4 btn btn-success"
            value="Sign In"
            type="submit"
          />
        </div>
      </form>
      <div className="text-center my-5">
        <Button onClick={signInWithGoogle}>Google Sign In</Button>
      </div>
      <p className="text-center my5">
        New user? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
