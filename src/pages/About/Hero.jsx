import React from "react";
import Image from "next/image";
import Heroes from "../../../public/assets/heroes.png";
import Awarded from "../../../public/assets/Awarded.png";

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex items-center p-4">
      <div className="flex flex-col md:flex-row w-full justify-between gap-10">
        <div className="relative w-[94%] md:w-1/2 md:pl-20 md:p-4 lg:p-4">
          <Image
            src={Heroes}
            alt="heroes-image"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-1/3 w-9/12 md:w-[80%] lg:w-[55%] md:left-1/4">
            <Image src={Awarded} alt="Trusted by Leading Companies" layout="responsive" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-4 md:pr-20 pt-20">
          <h1 className="font-bold lg:text-4xl text-3xl bg-gradient-to-r from-[#110054] to-[#ED4542] text-transparent bg-clip-text w-fit text-center md:text-left">
            About HireOnLease
          </h1>
          <p className="mt-4 text-lg md:text-left">
            <span className="font-semibold bg-gradient-to-r from-[#ED4542] to-[#110054] text-transparent bg-clip-text">
              HireOnLease
            </span>{" "}
            is a leading provider of staffing solutions, specializing in
            temporary staffing, permanent staffing, contract staffing,
            project-based hiring, and executive search. With a focus on quality,
            integrity, and customer satisfaction, we have built a reputation for
            excellence in the industry. Our team of experienced professionals is
            committed to delivering customized solutions that meet our clients'
            unique needs. Our commitment to excellence and customer satisfaction
            sets us apart as a trusted partner in your talent acquisition
            journey. Experience the difference of a dedicated, innovative
            staffing partner who is invested in your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
