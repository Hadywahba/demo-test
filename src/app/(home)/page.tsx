import HomeButton from '@/components/features/home-button';
import HomeHeader from '@/components/features/home-header';
import { HomeLeftGroup, HomeRightGroup } from '@/lib/constants/home-group';
import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <main className="flex flex-col">
      {/* First Section */}
      <section className="mx-auto flex h-[37.2244rem] w-full max-w-[117.5rem] items-start justify-between">
        {/* left */}
        <div className="flex flex-col pl-20 pt-12 relative">
          {HomeLeftGroup.map((item) => (
            <Image
              src={item.image}
              alt={item.alt}
              width={item.Width}
              height={item.Height}
              priority
              key={item.id}
              className={`${item.id === 2 ? "absolute top-44" :item.id === 3 ? "absolute top-44 left-48" :item.id === 4 ?"absolute top-[20.8rem]":item.id === 5 ?"absolute top-[26rem]":""}`}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <HomeHeader />

          <div>
            <HomeButton />
          </div>
        </div>

        <div className="relative flex flex-col pr-10 pt-[3.99rem]">
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
      <section>
        gdgd
      </section>
    </main>
  );
}
