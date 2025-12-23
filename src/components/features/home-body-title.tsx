import React from 'react';

export default function HomeBodyTitle() {
  return (
    <div className="mt-[6.3125rem] flex flex-col items-center justify-center gap-3 px-4 lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-0">
      <h2 className="pl-2 text-xl font-semibold leading-[3.24rem] text-white sm:text-2xl md:text-3xl lg:text-4xl">
        What you get on Setapp.
      </h2>
      <p className="pl-2 pr-2 text-center text-lg font-normal text-white md:w-[37.5rem] lg:pr-0 lg:text-start lg:leading-[2.0025rem]">
        With a single monthly subscription at $9.99, you get 240+ apps for your
        Mac.
      </p>
    </div>
  );
}
