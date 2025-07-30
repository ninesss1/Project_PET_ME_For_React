import React from "react";
import "./css/Sign_Up.css";

function Sign_Up() {
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
  /////////////////////////////////////
  return (
    <div>
      <h1>Sign Up Page</h1>
      {/* Add your sign up form here */}
    </div>
  );
}

export default Sign_Up;
