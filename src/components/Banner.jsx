import React from "react";
import Image from "next/image";

const Banner = (props) => {
  return (
    <div className="text-3xl font-extrabold relative max-h-[343px] h-[30vw]">
      <Image
        src={props.imageUrl}
        className=""
        alt={props.imageUrl}
        layout="fill"
        objectFit="cover"
        fill={true}
      />
      <div className="flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff]">
        <h1 className="text-3xl sm:text-4xl md:text-6xl">{props.label}</h1>
        <span className="text-sm sm:text-xl md:text-3xl">
          Home
          <span className="text-red-500 font-extrabold">{" >> "}</span>
          {props.breadCrumbLabel}
        </span>
      </div>
    </div>
  );
};

export default Banner;
