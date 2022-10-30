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
      </div>

    </div>
  );
}

export default LoginScreen;
