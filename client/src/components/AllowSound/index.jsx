import React, { useEffect } from "react";
import { AllowContainer } from "./style";

function AllowSound() {
const baseUrl = "http://localhost:3000/sonoro/";

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".allow").classList.add("enable");
    }, 1000);
  }, []);

  const handleAllow = (e) => {
    e.target.classList.add("desable");
    setTimeout(() => {
      document.querySelector(".allow").style.display = "none";
    }, 1500);
  };

  return (
    <AllowContainer className="allow" onClick={handleAllow}>
      <div>
        <h4>Best experienced with headphones!</h4>
      </div>
      <div>
        <img src={`${baseUrl}headphone.svg`} />
      </div>
      <div>
        <h4>Click / Tap to dismiss this message</h4>
      </div>
    </AllowContainer>
  );
}

export default AllowSound;
