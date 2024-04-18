import Image from "next/image";
import React from "react";
import sharp from "sharp";

const font_families = [
  "SHREE-DEV7-0705",
  "SHREE-DEV7-0707",
  "SHREE-DEV7-0708",
  "SHREE-DEV7-0709",
];

const render = async (font: string) => {
  const svgText = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000">
  <rect width="100%" height="100%" fill="black"/>
  <text x="0" y="10%" font-size="60" font-family="${font}" fill="white">
    <tspan x="0" dy="1.2em">_¢ Vmo Bg dmñVo Mwn hy± [H$ V_mem Z ~Zo</tspan>
    <tspan x="0" dy="1.2em">Vy g_PVm h¡ _wPo VwP go [Jcm Hw$N ^r Zht</tspan>
  </text>
</svg>`;

  const svgBuffer = Buffer.from(svgText);
  try {
    const pngBuffer = await sharp(svgBuffer)
      .png()
      .composite([{ input: "public/.svg", tile: true, blend: "saturate" }])
      .toBuffer();
    const pngBase64 = pngBuffer.toString("base64");
    return pngBase64;
  } catch (error) {
    console.error("Error processing SVG:", error);
    return null;
  }
};

const Sharp = async () => {
  const imageBuffer = await Promise.all(
    font_families.map(async (font) => {
      console.log(font);

      return await render(font);
    })
  );

  return (
    <div className="flex flex-wrap">
      {imageBuffer.map((buffer, i) => (
        <Image
          key={i}
          src={`data:image/png;base64,${buffer}`}
          alt="SVG to PNG"
          width={1000}
          height={1000}
        />
      ))}
    </div>
  );
};

export default Sharp;
