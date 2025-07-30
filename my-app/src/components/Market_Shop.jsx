import React from "react";
import "./css/Market_Shop.css";

function Market_Shop() {
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
      <h1>Market Shop Page</h1>
      {/* Add your market shop content here */}
    </div>
  );
}

export default Market_Shop;
