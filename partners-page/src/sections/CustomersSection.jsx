import React from "react";
import xGenomics11 from "../assets/10x-genomics--1--1.svg";
import amazonWebServices21 from "../assets/amazon-web-services-2-1.svg";
import homemainlogo11 from "../assets/homemainlogo--1--1.png";
import techstars from "../assets/logo.png";
import microsoft1 from "../assets/microsoft-1.svg";
import path2 from "../assets/path2.svg";
import seekpng from "../assets/seekpng.png";
import seekpng2 from "../assets/seekpng2.png";
import teknopointDeptBlack1 from "../assets/teknopoint-DEPT--black-1.png";
import ciscoLogo from "../assets/cisco.svg";

const CustomersSection = () => {
  const logos = [
    { src: amazonWebServices21, alt: "AWS" },
    { src: xGenomics11, alt: "10x Genomics" },
    { src: microsoft1, alt: "Microsoft" },
    { src: path2, alt: "Nasscom" },
    { src: techstars, alt: "Techstars" },
    { src: teknopointDeptBlack1, alt: "Teknopoint DEPT" },
    { src: ciscoLogo, alt: "Cisco" },
    { src: homemainlogo11, alt: "Trinax" },
    { src: seekpng, alt: "Hakuna Matata Logo" },
    { src: seekpng2, alt: "Hakuna Matata Text" },
  ];

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
      <div className="w-full bg-graydark-1 py-12 md:py-20 overflow-hidden">
        <div className="flex w-max items-center gap-12 md:gap-24 opacity-50 grayscale animate-[scroll_40s_linear_infinite]">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              className="h-6 md:h-10 object-contain flex-shrink-0"
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomersSection;
