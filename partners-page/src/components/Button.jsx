import React from "react";

export const Button = ({ 
  children,
  text,
  className = "", 
  onClick,
  type = "button",
  disabled = false,
  ...otherProps 
}) => {
  const isStylingType = ['primary', 'secondary'].includes(type);
  const buttonHtmlType = isStylingType ? 'button' : type;

  return (
    <button
      type={buttonHtmlType}
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center gap-[10px] rounded-[10px] bg-branddark-9 px-3 py-2 font-sans font-semibold text-graydark-12 text-[14px] leading-[1.4] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5A47C7] w-fit ${className}`}
      {...otherProps}
    >
      {text || children}
    </button>
  );
};
export default Button;