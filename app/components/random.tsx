import React from "react";
import sharp from "sharp";
import path from "path";
import Image from "next/image";

const Random = async () => {
  const img = sharp("public/photo.jpg").resize({ width: 4096, height: 4096 });
  const metadata = await img.metadata();
  console.log(metadata);
  const imageWidth = metadata.width || 4096;
  const username = "gulzar";

  const random = await img
    .composite([
      {
        input: {
          text: {
            text: `<span foreground="white"  size="large">BYa <span foreground="#ff9800">go</span> AmO dmo JwµOao Vmo _w±h \\o$ao hwE JwµOao\nA~ CZ go ^r h_mar ~o-H$gr XoIr Zht OmVr</span>`,
            justify: true,
            width: 2048,
            height: 4096,
            rgba: true,
            align: "center",
            font: "SHREE-DEV7-1206 Regular",
            fontfile: path.join(
              process.cwd(),
              "/public/font/SHREE-DEV7-1206 Regular.ttf"
            ),
            wrap: "word",
          },
        },
        gravity: "center",
        // tile: true,
      },

      {
        input: {
          text: {
            text: `<span  foreground="white">Shayari Page</span>`,
            justify: true,
            width: 1024,
            height: 4096,
            rgba: true,
            align: "center",
            font: "Katty Diona",
            fontfile: path.join(process.cwd(), "public/kattydiona.otf"),
            wrap: "word",
          },
        },
        gravity: "south",
        top: 4096 - 512,
        left: Math.floor((imageWidth - 1024) / 2), // Center horizontally

        // tile: true,
      },
      {
        input: {
          text: {
            text: `<span foreground="white">shayaripage.com<i>/</i>@${username}</span>`,
            justify: true,
            width: 1024,
            height: 4096,
            rgba: true,
            align: "center",
            font: "Mukta",
            fontfile: path.join(process.cwd(), "/public/Mukta-ExtraLight.ttf"),
            wrap: "word",
          },
        },
        gravity: "south",
        top: 4096 - 200,
        left: Math.floor((imageWidth - 1024) / 2), // Center horizontally

        // tile: true,
      },
    ])

    .toBuffer();
  console.log(
    path.join(process.cwd(), "/public/font/SHREE-DEV7-1206 Regular.ttf")
  );

  return (
    <Image
      src={`data:image/jpeg;base64,${random.toString("base64")}`}
      alt=""
      width={800}
      height={800}
    />
  );
};

export default Random;
