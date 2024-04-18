import React from "react";
import Sharp from "./components/sharp";
import Svg from "./components/svg";
import Resize from "./components/resize";
import Random from "./components/random";

const page = () => {
  return (
    <div className="flex flex-wrap">
      <Random />
      {/* <Resize imgPath="public/photo.jpg" overlayPath="public/sign.svg" /> */}
      {/* <Resize imgPath="public/a.jpg" overlayPath="public/sign.svg" /> */}
      {/* <Resize imgPath="public/02.png" overlayPath="public/sign.svg" /> */}
      {/* <Resize imgPath="public/pxfuel.jpg" overlayPath="public/sign.svg" /> */}
      {/* <Svg /> */}
      {/* <Sharp /> */}
    </div>
  );
};

export default page;
