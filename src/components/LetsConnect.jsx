import React from "react";

const LetsConnect = () => {
  return (
    <div className="bg-[#bcb9bc] p-1 w-[80%] rounded-xl" >
      <div className="w-full flex flex-col items-center shadow-custom px-10 py-14 rounded-lg gap-4 bg-white">
        <h1 className="font-bold text-4xl bg-gradient-to-r from-[#110054] to-[#ED4542] text-transparent bg-clip-text">
          Let's Connect
        </h1>
        <div className="p-2 leading-8	font-medium">
          Got questions about HireOnLease? Contact us for a free consultation.
          We’re here to help!
        </div>
        <button className="px-6 py-3 rounded-2xl font-bold text-white bg-[#ED4542] ">
          Talk To Our Experts
        </button>
      </div>
    </div>
  );
};

export default LetsConnect;
