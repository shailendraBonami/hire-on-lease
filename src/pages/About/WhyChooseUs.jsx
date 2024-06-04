import React from "react";
import Image from "next/image";
import Expertise from "../../../public/assets/Expertise.svg";
import Quality from "../../../public/assets/quality.svg";
import Flexibilty from "../../../public/assets/flexibility.svg";
import Support from "../../../public/assets/support.svg";
import Network from "../../../public/assets/network.svg";

const WhyChooseUs = () => {
  return (
    <div className="h-full bg-gradient-to-r from-[#FAECEC] to-[#EFEBED]">
      <h1>Why Choose HireOnLease</h1>
      <p>
        At HireOnLease, we are committed to providing exceptional staffing
        solutions. Here’s why you should choose us.
      </p>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row lg:flex-row p-8">
        <div>
          <Image src={Expertise} alt="expertise-image" />
        </div>
        <div>
          <Image alt="quality" src={Quality} />
        </div>
        <div>
          <Image alt="flexibility" src={Flexibilty} />
        </div>
        <div>
          <Image alt="support" src={Support} />
        </div>
        <div>
          <Image alt="network" src={Network} />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
