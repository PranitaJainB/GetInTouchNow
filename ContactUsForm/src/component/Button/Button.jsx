import React from "react";
import style from "./Button.module.css";

const Button = ({ text, icon, btnPrimary,onBtnClick, ...props }) => {
 
  const sendToParent = (e) => {
    
    onBtnClick(e.target.name);
  };
  return (
    <button     
      onClick={sendToParent}
      className={`${style.submit} ${
        btnPrimary ? style.btn_purple : style.btn_connectVia
      }`}
      {...props}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
