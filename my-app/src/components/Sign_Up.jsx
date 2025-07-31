import React, { useState } from "react";
import "./css/Sign_Up.css";

function Sign_Up() {
  // อยากให้เวลามาหน้านี้จะทำการรีเฟรชหน้า แค่ครั้งเดียว
  // เพื่อให้แน่ใจว่าไม่มีข้อมูลเก่าค้างอยู่
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);
  /////////////////////////////////////
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ตรวจสอบว่ากรอกครบและข้อมูลเบื้องต้นถูกต้อง
  const isFormValid =
    form.name.trim() &&
    form.email.trim() &&
    form.password &&
    form.confirmPassword &&
    form.phone.length === 10 &&
    form.password === form.confirmPassword &&
    /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email);
    

// ...
const handleSubmit = (e) => {
  e.preventDefault();

  if (isFormValid) {
    // Save form data to sessionStorage
    sessionStorage.setItem("signupForm", JSON.stringify(form));
    window.location.href = '/details'; // ใช้ path เล็กทั้งหมด
  } else {
    alert('กรุณากรอกข้อมูลให้ถูกต้องและครบถ้วน');
  }
};
// ...

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">
          <i className="fas fa-user-plus"></i> สมัครสมาชิก
        </h2>
        <div className="signup-group">
          <label htmlFor="name">ชื่อผู้ใช้</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="ชื่อผู้ใช้"
            value={form.name}
            onChange={handleChange}
            // required
            autoFocus
          />
        </div>
        <div className="signup-group">
          <label htmlFor="email">อีเมล</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="อีเมล"
            value={form.email}
            onChange={handleChange}
            // required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </div>
        <div className="signup-group">
          <label htmlFor="password">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="รหัสผ่าน"
            value={form.password}
            onChange={handleChange}
            // required
          />
        </div>
        <div className="signup-group">
          <label htmlFor="confirmPassword">ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="ยืนยันรหัสผ่าน"
            value={form.confirmPassword}
            onChange={handleChange}
            // required
          />
        </div>
        <div className="signup-group">
          <label htmlFor="phone">หมายเลขโทรศัพท์</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="หมายเลขโทรศัพท์"
            value={form.phone}
            onChange={handleChange}
            pattern="[0-9]{10}$"
            minLength={10}
            maxLength={10}
            // required
          />
        </div>
        {/* แสดงปุ่มเฉพาะเมื่อกรอกครบ */}
        {isFormValid && (
          <button className="signup-btn" type="submit">
            <i className="fa-arrow-right"></i> ต่อไป
          </button>
        )}
      </form>
    </div>
  );
}

export default Sign_Up;
