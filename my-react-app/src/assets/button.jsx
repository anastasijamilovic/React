import React from "react";
import "./button.css";

const ButtonComponent = () => {
  return (
    <button className="button" onClick={handleClick}>
      BUTTON
    </button>
  );
};

const handleClick = () => {
  alert("Dugme je kliknuto!");
};

export default ButtonComponent;
