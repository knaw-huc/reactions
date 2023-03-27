import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}

const buttonStyle = {
  background: "#0d6efd",
  borderRadius: "3px",
  border: "none",
  color: "white",
  padding: "5px",
  marginRight: "0.5em",
};

const Button = (props: ButtonProps) => {
  return (
    <button style={buttonStyle} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
