import Image from "next/image";
import React from "react";
import sharp from "sharp";
import fs from "fs";
import path from "path";

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`

const render = async ({ text, font }: { text: string; font: string }) => {
  const svgText = `    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="80">



<text
  x="10"
  y="50"
  font-size="32"
  font-family="Bihani"
  fill="black"
>
Shayari Page
</text>
</svg>`;

  console.log(svgText);

  const svgBuffer = Buffer.from(svgText);
  try {
    const pngBuffer = await sharp(svgBuffer).png().toBuffer();
    const pngBase64 = pngBuffer.toString("base64");
    return pngBase64;
  } catch (error) {
    console.error("Error processing SVG:", error);
    return null;
  }
};

const page = async () => {
  const buffer = await render({
    text: " शायरी पेज",
    font: "/home/saurabh/Documents/github/sharp/public/font/S07030F2.TTF",
  });

  console.log(buffer);
  const pngDataURL = `data:image/png;base64,${buffer}`;
  return (
    <div>
      <Image src={pngDataURL} alt="SVG to PNG" width={180} height={80} />
    </div>
  );
};

export default page;
