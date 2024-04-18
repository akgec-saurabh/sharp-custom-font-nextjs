import Image from "next/image";
import React from "react";
import sharp from "sharp";
import path from "path";
import fs from "fs";

const fontFileName = "Bihani Regular.ttf";
const fontsFolderPath = path.resolve(process.cwd(), "font"); // Absolute path to fonts folder
const fontFilePath = path.join(process.cwd(), "font", fontFileName); // Absolute path to font file

const Resize = async ({
  imgPath,
  overlayPath,
}: {
  imgPath: string;
  overlayPath: string;
}) => {
  try {
    // Check if the font file exists
    await fs.promises.access(fontFilePath);
    console.log(await fs.promises.access(fontFilePath));
  } catch (err) {
    console.error("Error accessing font file:", err);
    return; // Exit function if font file does not exist
  }

  const resizeOptions = {
    width: 1080, // Width in pixels
    height: 1080, // Height in pixels
    fit: sharp.fit.cover, // How the image should be resized to fit the specified dimensions
    position: sharp.strategy.attention, // Positioning strategy when using 'cover' fit
  };

  // Resize signature image
  const signatureBuffer = await sharp("public/signature.svg")
    .resize(resizeOptions)
    .toBuffer();

  // Resize main image
  const resizedImageBuffer = await sharp(imgPath)
    .resize(resizeOptions)
    .png()
    .composite([{ input: signatureBuffer, blend: "xor" }])
    .toBuffer();

  const resizeBase64 = resizedImageBuffer.toString("base64");

  return (
    <div>
      <Image
        src={`data:image/png;base64,${resizeBase64}`}
        alt=""
        width={400}
        height={400}
      />
    </div>
  );
};

export default Resize;
