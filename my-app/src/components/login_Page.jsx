import React from "react";
import "./css/login_Page.css";

function login_Page() {
  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default login_Page;
