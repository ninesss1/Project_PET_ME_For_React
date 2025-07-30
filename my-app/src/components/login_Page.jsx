import React from "react";
import "./css/login_Page.css";

function login_Page() {
  // อยากให้เวลามาหน้านี้จะทำการรีเฟรชหน้า แค่ครั้งเดียว
  // เพื่อให้แน่ใจว่าไม่มีข้อมูลเก่าค้างอยู่
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
  const hasReloaded = sessionStorage.getItem('hasReloaded');

  if (!hasReloaded) {
    sessionStorage.setItem('hasReloaded', 'true');
    window.location.reload();
  }
}, []);

  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="username"  required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="password" required />
          </div>
          <div className="button-group">
            <button type="submit" onClick={() => {window.location.href="/Home_Page"}}>Login</button>
            <button type="button" onClick={() => window.location.href="/Sign_Up"}>Sign Up</button>
          </div>
          <li>
            <a href="/Sign_Up">Don't have an account? Sign Up</a>
          </li>
        </form>


      </div>
    </>
  );
}

export default login_Page;
