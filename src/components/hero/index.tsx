import React from "react";
import Navigation from "@/components/navigation/index";
import Image from "next/image";
import headphones from "../../../public/assets/img/bg/Bitmap.png";
const index = () => {
  return (
    <div className="bg-hero-pattern bg-auto bg-center text-white">
      <Navigation />
      <div className="container">
        <div className="flex justify-between items-center">
          <div className=" max-w-[398px]">
            <span className="font-normal text-sm tracking-extra-wide opacity-50 uppercase">
              New Product
            </span>
            <h1 className="home-title">XX99 Mark II Headphones</h1>
            <h2 className="home-h2">
              Experience natural, life like audio and exceptional build quality
              made for the passionate music enthusiast.
            </h2>
          </div>
          <div>
            <Image src={headphones} alt="headphones" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
