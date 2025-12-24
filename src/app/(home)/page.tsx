'use client';
import HomeBody from '@/components/features/home-body';
import HomeBodyTitle from '@/components/features/home-body-title';
import HomeButton from '@/components/features/home-button';
import HomeFooter from '@/components/features/home-footer';
import HomeHeader from '@/components/features/home-header';
import HomeSlider from '@/components/features/home-slider';
import SocialMedia from '@/components/features/social-media';
import { HomeLeftGroup, HomeRightGroup } from '@/lib/constants/home-group';
import { homeSlider } from '@/lib/constants/home-slider';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Page() {
  const [index, setIndex] = useState(0);
  const goToSlide = (i: number) => {
    setIndex(i);
  };
  return (
    <main className="relative flex w-full max-w-full flex-col overflow-x-hidden">
      {/* First Section */}
      <section className="mx-auto mb-[8rem] flex h-auto min-h-[37.2244rem] w-full max-w-full flex-col items-center justify-center px-4 py-8 md:h-[37.2244rem] md:max-w-[117.5rem] md:flex-row md:items-start md:justify-between md:px-0 md:py-0">
        {/* left */}
        <div className="relative hidden flex-col pl-20 pt-12 lg:flex">
          {HomeLeftGroup.map((item) => (
            <Image
              src={item.image}
              alt={item.alt}
              width={item.Width}
              height={item.Height}
              priority
              key={item.id}
              className={`${item.id === 2 ? 'absolute top-44' : item.id === 3 ? 'absolute left-48 top-44' : item.id === 4 ? 'absolute top-[20.8rem]' : item.id === 5 ? 'absolute top-[26rem]' : ''}`}
            />
          ))}
        </div>
        {/* body */}
        <div className="flex w-full flex-col items-center justify-center lg:w-auto">
          <HomeHeader />

          <div>
            <HomeButton />
          </div>
        </div>
        {/* right */}
        <div className="relative hidden flex-col pr-10 pt-[3.99rem] lg:flex">
          {HomeRightGroup.map((item) => (
            <Image
              src={item.image}
              alt={item.alt}
              width={item.Width}
              height={item.Height}
              priority
              key={item.id}
              className={`${item.id === 2 ? 'absolute right-48 top-28' : item.id === 3 ? 'absolute left-10 top-52 z-40' : item.id === 4 ? 'absolute right-28 top-[20rem]' : item.id === 5 ? 'absolute right-36 top-[27rem]' : ''}`}
            />
          ))}
        </div>
      </section>

      {/* second Section */}
      <section className="mx-auto mt-4 flex w-full flex-col border-t-[.0625rem] border-t-[#E5E5E5] lg:w-[73.75rem]">
        {/* Title part */}
        <div>
          <HomeBodyTitle />
        </div>

        {/* Body part */}
        <div>
          <HomeBody />
        </div>
        {/* Footer Part */}
        <div>
          <HomeFooter />
        </div>
      </section>

      {/* Third section */}
      <section className="relative pb-72 lg:pb-0 h-auto lg:h-[51.375rem] w-full max-w-full px-4 md:px-0 lg:w-[90rem]">
        <div className=" hidden md:flex h-1/2 bg-primary"></div>
        <div className=" hidden md:flex h-1/2 items-end justify-center bg-white ">
          <div className="mb-4 flex space-x-6">
            {homeSlider.map((_, i) => (
              <span
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-3 w-3 cursor-pointer rounded-full ${
                  i === index ? 'bg-[#1D1D22]' : 'bg-[#D5D4D4]'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0">
          <HomeSlider index={index} setIndex={setIndex} />
        </div>
      </section>

      {/*  */}
      <section className="bg-white">
        <SocialMedia />
      </section>
    </main>
  );
}
