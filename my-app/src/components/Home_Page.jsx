import React, { useEffect, useRef } from "react";
import "./css/Home_Page.css";

import cat1 from "../assets/cat_1.png";
import cat2 from "../assets/cat_2.png";
import dog1 from "../assets/dog_1.png";
import dog2 from "../assets/dog_2.png";

function Home_Page() {
  const containerRef = useRef(null);

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");
    if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    const images = containerRef.current.querySelectorAll(".cat-image");
    images.forEach((image, index) => {
      setTimeout(() => {
        image.classList.add("visible");
      }, index * 300);
    });
  }, []);

  return (
    <section className="home">
      <div className="home-container" ref={containerRef}>
        <img src={cat1} alt="Cat_1" className="cat-image" />
        <img src={cat2} alt="Cat_2" className="cat-image" />
        <img src={dog1} alt="Dog_1" className="cat-image" />
        <img src={dog2} alt="Dog_2" className="cat-image" />
      </div>
    </section>
  );
}

export default Home_Page;

