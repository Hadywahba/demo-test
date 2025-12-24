'use client';
import { socialIcon } from '@/lib/constants/social-icon';
import { sociaMedia } from '@/lib/constants/social-media';
import Image from 'next/image';
import React, { useState } from 'react';

export default function SocialMedia() {
  const [index, setIndex] = useState(0);
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + sociaMedia.length) % sociaMedia.length);
  };
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % sociaMedia.length);
  };
  const goToSlide = (i: number) => {
    setIndex(i);
  };
  return (
    <main className="mx-auto lg:w-[78.75rem]  pt-[7.5rem]">
      {/* Social Icon */}
      <section className="flex flex-col">
        <div className="flex flex-col items-center justify-center px-[1.875rem] lg:flex lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-[2.25rem] font-semibold text-primary lg:leading-[2.9925rem] lg:tracking-[.0813rem]">
            Setapp in your words.
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 lg:flex lg:flex-row lg:items-center lg:justify-center">
            <p className="w-full text-[1.125rem] lg:w-[18.75rem]">
              What you say about how Setapp powers you up.
            </p>
            <div className="flex items-center justify-center gap-2 lg:w-[18.75rem]">
              {socialIcon.map((item) => (
                <Image
                  key={item.id}
                  src={item.icon}
                  alt="slide image"
                  width={48}
                  height={48}
                  priority
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative mb-8 w-full px-4 py-[1.5625rem]">
          {/* Buttons */}
          <button
            onClick={prevSlide}
            className="absolute right-[52%] lg:right-[7.625rem] top-[2.925rem] -translate-y-1/2 transform rounded-full p-2"
          >
            <Image
              src="/assets/icons/Button-slide2.svg"
              alt="icon"
              width={13}
              height={14}
            />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[45%] lg:right-[4.575rem] top-[2.925rem] -translate-y-1/2 transform rounded-full p-2"
          >
            <Image
              src="/assets/icons/Button-slide1.svg"
              alt="icon"
              width={13}
              height={14}
            />
          </button>
        </div>
      </section>

      {/* Social Media */}
      <section className="relative flex flex-col pt-1">
        <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:items-center lg:justify-center gap-2">
          {sociaMedia.map((item) => (
            <div
              key={item.id}
              className="flex h-[26.375rem] flex-col rounded-[.9375rem] bg-[#F5F5F5]"
            >
              <div
                className={`${item.id === 1 ? 'bg-[#71719A]' : item.id === 2 ? 'bg-[#D9AE89]' : item.id === 3 ? 'bg-[#765070]' : ''} h-[18.6875rem] w-[22.875rem] rounded-t-[.9375rem]`}
              >
                <h4 className="px-[1.375rem] py-[2.4063rem] text-[1.625rem] font-medium leading-[2.3075rem] text-white">
                  {item.text1}
                </h4>
              </div>
              <div className="px-[1.375rem] pt-[2.4063rem]">
                <h4 className='text-primary font-semibold text-[1.125rem] leading-[2.0025rem]'>{item.text2}</h4>
                <div className="flex items-center justify-between">
                  <p className='font-semibold text-sm text-[#9F9F9F] leading-[1.5575rem]'>{item.text3}</p>
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={item.w}
                    height={item.h}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-0 mb-4 mt-4 flex items-center justify-center space-x-6">
          {sociaMedia.map((_, i) => (
            <span
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-3 w-3 cursor-pointer rounded-full ${
                i === index ? 'bg-[#1D1D22]' : 'bg-[#D5D4D4]'
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
