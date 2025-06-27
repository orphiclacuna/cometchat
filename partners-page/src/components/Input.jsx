import React from "react";

export const Input = ({ placeholder, className, icon, override, text }) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-[14px] border border-[#fafaff1a] bg-[#fafaff05] p-[13px_16px] focus-within:border-branddark-9 ${className}`}
    >
      {icon && override}
      <input
        placeholder={text || placeholder}
        className={`w-full bg-transparent text-graydark-12 text-sm focus:outline-none font-semibold leading-[17.9px]`}
      />
    </div>
  );
};
