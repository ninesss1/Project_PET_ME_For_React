import React from "react";
import "./css/contact.css";

function Contact() {
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
    <div>
      <h1>Contact Page</h1>
      {/* Add your contact form or info here */}
    </div>
  );
}

export default Contact;
