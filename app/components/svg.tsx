import React from "react";

const Svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1000"
      height="1000"
      className="flex items-center justify-center"
    >
      <rect className="w-full h-full bg-black" />
      <text
        width={1000}
        height={1000}
        className="text-white w-full h-full flex justify-center text-center"
        fill="white"
        fontSize="24px"
      >
        <tspan dy="-1.2em">मैं तो इस वास्ते चुप हूँ कि तमाशा न बने</tspan>
        <tspan dy="1.2em">तू समझता है मुझे तुझ से गिला कुछ भी नहीं</tspan>
      </text>
    </svg>
  );
};

export default Svg;
