import React from "react";
import Image from "next/image";
import { TEXTS, tabsData } from "@/utils";

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-90 from-[#FAECEC] to-[#EFEBED] flex flex-col items-center sm:mt-[85px] mt-[40px]">
      <h1 className="text-center font-bold bg-gradient-to-r from-[#ED4542] to-[#110054] text-transparent bg-clip-text sm:mt-[69px] mt-[39px] sm:text-[35px] text-[26px]">
        {TEXTS.TITLE}
      </h1>
      <div className="text-center text-base max-w-[714px] font-semibold sm:text-[18px] text-[13px] sm:mx-0 mx-[19px] sm:mt-[18px] mt-[10px]">
        {TEXTS.AT}{" "}
        <span className="bg-gradient-90 from-[#110054] to-[#ED4542] text-transparent bg-clip-text font-bold">
          {TEXTS.HIRE_ON_LEASE}
        </span>
        {TEXTS.DESCRIPTION}
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row lg:flex-row p-8">
        {tabsData?.map((elm) => {
          return (
            <div
              key={elm.title}
              className="flex flex-col justify-center items-center gap-2 cursor-pointer	"
            >
              <Image src={elm.url} alt={elm.title} width={100} height={100} />
              <div className="font-semibold sm:text-[25px] text-[30px]">
                {elm.title}
              </div>
              <div className="text-center font-normal sm:text-[16px] text-[19px]">
                {elm.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
