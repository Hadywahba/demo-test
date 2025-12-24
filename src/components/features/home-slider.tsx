'use client';
import { homeSlider } from '@/lib/constants/home-slider';
import Image from 'next/image';
import React from 'react';
interface HomeSliderProps {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
export default function HomeSlider({ index, setIndex }: HomeSliderProps) {
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + homeSlider.length) % homeSlider.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % homeSlider.length);
  };

  return (
    <div className="relative mx-auto overflow-hidden rounded-[1.25rem] bg-purpule lg:w-[84.6875rem]">
      {/* Slides container */}
      <div
        className={`flex transition-transform duration-500`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {homeSlider.map((item) => (
          <section
            key={item.id}
            className="flex w-full flex-shrink-0 items-center justify-between"
          >
            <div className="flex flex-col">
              <div className="flex flex-col gap-5 lg:w-[34.75rem] lg:pl-[5.6875rem]">
                <h5 className="text-[1.625rem] font-medium leading-[2.5025rem] text-white">
                  {item.text1}
                </h5>
                <p className="text-base font-normal text-white">{item.text2}</p>
              </div>
              <figure className="ml-[5.6875rem] mt-[8.2425rem] flex h-[4.625rem] w-[4.625rem] items-center justify-center rounded-[2.3125rem] bg-white">
                <Image src={item.icon} alt="icon" width={13} height={14} />
              </figure>
            </div>
            <figure className="mr-[4.125rem] mt-[1.8587rem]">
              <Image
                src={item.image}
                alt="slide image"
                width={670}
                height={690}
                priority
              />
            </figure>
          </section>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute right-[6.625rem] top-[2.925rem] -translate-y-1/2 transform rounded-full p-2"
      >
        <Image
          src="/assets/icons/next-slide.svg"
          alt="icon"
          width={13}
          height={14}
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-[2.875rem] top-[2.925rem] -translate-y-1/2 transform rounded-full p-2"
      >
        <Image
          src="/assets/icons/previous-slide.svg"
          alt="icon"
          width={13}
          height={14}
        />
      </button>
    </div>
  );
}
