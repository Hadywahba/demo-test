import Image from 'next/image';
import React from 'react';

export default function HomeFooter() {
  return (
    <main className="pt-[5.5106rem] pb-[6.76rem]">
      {/* Top Section */}
      <section className="flex items-center justify-center gap-3 pb-[5.5rem]">
        <figure>
          <Image
            src="/assets/icons/arrow.svg"
            alt="arrow"
            width="23"
            height="17"
            priority
          />
        </figure>
        <figcaption>
          <h2 className="text-xl font-medium leading-[1.875rem] tracking-[.1rem] text-white">
            View all superpowers
          </h2>
        </figcaption>
      </section>
      {/* Bottom Section */}
      <section className="flex flex-col items-center justify-center gap-3 border-b-[.0625rem] border-b-[#E5E5E5] px-4 pb-[5.5625rem] lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-0">
        <h2 className="pl-2 text-xl font-semibold leading-[3.24rem] text-white sm:text-2xl md:text-3xl lg:text-4xl">
          Your Setapp journey.
        </h2>
        <p className="pl-2 pr-2 text-center text-lg font-normal text-white md:w-[37.5rem] lg:pr-0 lg:text-start lg:leading-[2.0025rem]">
          Type in your task into Setapp search and get instant app
          recommendations.
        </p>
      </section>
    </main>
  );
}
