import React from "react";

interface ButtonProps {
  className?: string;
  value: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps >= ({
    value,
    className='',
    type = 'button',
    onClick
}) => {
  return (
    <button
    type={type}
    onClick={onClick}
    className={`px-2 py-1  outline-none rounded-md ${className}`}>{value}</button>
  )
}

export default Button