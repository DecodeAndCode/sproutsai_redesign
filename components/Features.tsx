import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64 py-4">Trusted by</h2>
          </div>
          <ul className="mt-10 ml-30 grid gap-10 xs:grid-cols-2 xs:ml-5 sm:grid-cols-2 sm:ml-30 md:grid-cols-2 lg:mg-20 lg:gap-15">
            {FEATURES.map((feature) => (
              <FeatureItem 
                icon={feature.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  icon: string;
}

const FeatureItem = ({ icon }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7">
        <Image src={icon} alt="map" width={150} height={150} />
      </div>
    </li>
  )
}

export default Features