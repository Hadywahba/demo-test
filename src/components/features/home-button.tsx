import { authButton } from '@/lib/constants/auth-button';
import Image from 'next/image';
import React from 'react';

export default function HomeButton() {
  return (
    <section>
      <div className="flex items-center justify-center gap-3 pt-12">
        {authButton.map((item) => (
          <button
            key={item.id}
            className={`rounded-md border-[.0625rem] h-[3.25rem] border-white bg-white ${item.id === 1 ? 'text-darkBlue mr-2 px-8 py-[.875rem] text-base font-normal leading-6 tracking-[.0625rem]' : 'flex w-[3.875rem] items-center justify-center px-[.625rem] py-[.9375rem]'}`}
          >
            {item.image && item.alt && (
              <Image
                src={item.image}
                alt={item.alt}
                width={32}
                height={32}
                priority
              />
            )}
            {item.name ? item.name : ''}
          </button>
        ))}
      </div>
      <div className="pt-[1.7188rem]">
        <p className="max-w-[19.8125rem] text-center text-lg font-normal leading-[2.0025rem] text-white mx-auto">
          Power up your workflow with Setapp, a smart way to get apps.
        </p>
      </div>
    </section>
  );
}
