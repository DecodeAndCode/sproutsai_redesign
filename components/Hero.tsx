'use client';
import Image from 'next/image'
import Button from './Button'
import TextCycle from './TextCycle'

const messages = [
  "Document processing",
  "Hiring automation",
  "Data enrichment",
  "Document processing",
  "Hiring automation"
];

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="flex flex-wrap items-center space-x-2 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold py-5">
      <span>Autonomous</span>
      <span className="text-green-50">Agent</span>
      <span>For</span>
    </h1>
        <h1 className="bold-40  lg:bold-52">
          {<TextCycle array={messages}></TextCycle>}
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          SproutsAI offers an end-to-end autonomous AI agent platform to help automate critical business processes. Our cutting-edge technology combines the power of generative AI with proprietary models to deliver customized solutions that drive productivity, growth, and revenue.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Get a Demo" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">San Francisco Bay Area</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">8983 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero