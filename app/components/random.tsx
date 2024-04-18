import React from "react";
import sharp from "sharp";
import path from "path";
import Image from "next/image";

const Random = async () => {
  const img = await sharp("public/photo.jpg");

  const random = await img
    .composite([
      {
        input: {
          text: {
            text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
            justify: true,
            width: 100,
            font: "SHREE-DEV7-1206 Regular",
            fontfile: path.join(
              process.cwd(),
              "/public/font/SHREE-DEV7-1206 Regular.ttf"
            ),
            wrap: "word",
          },
        },
      },
    ])
    .jpeg()
    .toBuffer();
  console.log(
    path.join(process.cwd(), "/public/font/SHREE-DEV7-1206 Regular.ttf")
  );

  return (
    <Image
      src={`data:image/jpeg;base64,${random.toString("base64")}`}
      alt=""
      width={400}
      height={400}
    />
  );
};

export default Random;
