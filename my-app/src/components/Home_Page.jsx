import "./css/Home_Page.css";
import React from "react";


function Home_Page() {
    // อยากให้เวลามาหน้านี้จะทำการรีเฟรชหน้า แค่ครั้งเดียว
    // เพื่อให้แน่ใจว่าไม่มีข้อมูลเก่าค้างอยู่
    // eslint-disable-next-line react-hooks/rules-of-hooks, no-undef
    React.useEffect(() => {
    const hasReloaded = sessionStorage.getItem('hasReloaded');
  
    if (!hasReloaded) {
      sessionStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }
  }, []);
  return (
    <>
     
    </>
  );
}

export default Home_Page;


