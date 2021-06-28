import React from "react";
import "../custom-buttom/CustomButton.scss";

function CustomButton({ children, ...otherProps }) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
