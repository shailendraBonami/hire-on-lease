import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import LetsConnect from "@/components/LetsConnect";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const index = () => {
  return (
    <div className="relative">
      <Banner
        label="About Us"
        breadCrumbLabel="About"
        imageUrl="/assets/aboutBanner.svg"
      />
      <div className="mt-[44px]">
        <Hero />
        <WhyChooseUs />
      </div>
      <div className="sm:mx-[79px] mx-[20px]">
        <LetsConnect />
      </div>
    </div>
  );
};

export default index;
