import React from "react";
import "./login.scss"

function LoginScreen() {
  return (
    <div className="form-area">
      <h2>
          Login
      </h2>



      <div className="form-inner">
        <input type="text" />

        <button className="btn-common">Login</button>
        <p className="user-reset-link">Forgot Password</p>
      </div>
      <div className="checkbox-field">
          <input type="checkbox"></input>
          <p>Terms and Conditions</p>
      </div>
    </div>
  );
}

export default LoginScreen;
