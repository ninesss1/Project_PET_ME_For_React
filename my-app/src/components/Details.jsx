import React, { useState } from "react";
import "./css/details.css";


function Details() {
  React.useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
    // ดึงข้อมูลจาก sessionStorage ถ้ามี
    const saved = sessionStorage.getItem("detailsForm");
    if (saved) {
      setFormDetail(JSON.parse(saved));
    }
  }, []);

  const [formDetail, setFormDetail] = useState({
    city: "",
    address: "",
    country: "",
    province: "",
    district: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormDetail({ ...formDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // บันทึกข้อมูลลง sessionStorage
    sessionStorage.setItem("detailsForm", JSON.stringify(formDetail));
    // ส่งข้อมูลไป backend API
    try {
      const response = await fetch("/api/user-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetail),
      });
      if (response.ok) {
        alert("บันทึกข้อมูลสำเร็จ");
        // ทำอย่างอื่นต่อ เช่น redirect
      } else {
        alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้");
    }
  };

  // ตรวจสอบว่ากรอกครบทุกช่อง
  const isFormValid =
    formDetail.city.trim() &&
    formDetail.address.trim() &&
    formDetail.country.trim() &&
    formDetail.province.trim() &&
    formDetail.district.trim() &&
    formDetail.postalCode.trim();

  return (
    <div className="details-container">
      <form className="details-form" onSubmit={handleSubmit}>
        <h2 className="details-title">
          <i className="fas fa-info-circle"></i> รายละเอียดเพิ่มเติม
        </h2>
        <div className="details-group">
          <label htmlFor="address">ที่อยู่</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="ที่อยู่"
            value={formDetail.address}
            onChange={handleChange}
          />
        </div>
        <div className="details-group">
          <label htmlFor="province">จังหวัด</label>
          <input
            type="text"
            id="province"
            name="province"
            placeholder="จังหวัด"
            value={formDetail.province}
            onChange={handleChange}
          />
        </div>
        <div className="details-group">
          <label htmlFor="district">อำเภอ/เขต</label>
          <input
            type="text"
            id="district"
            name="district"
            placeholder="อำเภอ/เขต"
            value={formDetail.district}
            onChange={handleChange}
          />
        </div>
        <div className="details-group">
          <label htmlFor="city">ตำบล/แขวง</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="ตำบล/แขวง"
            value={formDetail.city}
            onChange={handleChange}
          />
        </div>
        <div className="details-group">
          <label htmlFor="country">ประเทศ</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="ประเทศ"
            value={formDetail.country}
            onChange={handleChange}
          />
        </div>
        <div className="details-group">
          <label htmlFor="postalCode">รหัสไปรษณีย์</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="รหัสไปรษณีย์"
            value={formDetail.postalCode}
            onChange={handleChange}
          />
        </div>
        {isFormValid && (
          <button className="details-btn" type="submit">
            <i className="fas fa-check"></i> บันทึกข้อมูล
          </button>
        )}
      </form>
    </div>
  );
}

export default Details;
