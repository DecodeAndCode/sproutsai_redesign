import Image from "next/image";
import React from "react";

const Guide = () => {
  const benefits = [
    {
      heading: "Real Time Job Modeling And Candidate Matching",
      description: "Find the high quality candidate match in minutes and speed up your hiring by 10x",
    },
    {
      heading: "Increase hiring team’s productivity",
      description: "AI recommended candidates and recruiter grade multichannel outreach and scheduling",
    },
    {
      heading: "Easy To Get Started",
      description: "Start your journey with easy to use platform that provides faster time to value",
    },
    {
      heading: "Personalized As Per Your Need",
      description: `Our advanced AI continually evolves and refines its capabilities, adapting over time to consistently deliver superior results. With every iteration, it propels your outcomes to new heights`,
    },
  ];

  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24 px-10">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50"></p>
        <div className="flex flex-wrap justify-around gap-10 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Why We Are Different:
          </h2>
          <div className="regular-16 text-gray-30 xl:max-w-[520px]">
            {benefits.map((benefit, index) => (
              <div key={index} className="mb-6">
                <h4 className="font-semibold text-lg mb-2">{benefit.heading}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center max-container relative w-full">
        <Image
          src="/artificial-intelligence-concept-facebook-cover_23-2150395185.avif"
          alt="AI"
          width={1440}
          height={580} // Adjust the height as needed to reduce it
          className="w-full h-auto object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Guide;
