'use client';
import {
  headerMobileSidebar,
  headerSidebar,
} from '@/lib/constants/header-menus';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  // state
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main className="flex items-center justify-between px-4 pt-[1.0625rem] md:pb-[7.375rem] md:px-10">
        {/* Left section */}
        <section className="py-1">
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={20}
              height={32}
              priority
            />
          </Link>
        </section>

        {/* Right Section */}
        <section className="flex items-center justify-around gap-4 text-white">
          <nav aria-label="Main menu" className="hidden lg:flex">
            <ul className="flex items-center justify-center gap-7">
              {headerSidebar.map((item) => (
                <Link key={item.id} href="/">
                  <li
                    className={`text-sm ${item.name?.toLowerCase() === 'try free' ? 'rounded-md border-[.0625rem] border-white px-[1.4375rem] pb-[.4063rem] pt-[.3438rem] font-normal leading-5 tracking-[.0625rem] hover:border-primary hover:bg-white hover:text-primary' : 'font-medium leading-[1.61rem] tracking-[.0563rem]'}`}
                  >
                    {item.image && item.alt && (
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={20}
                        height={32}
                        priority
                      />
                    )}

                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </section>

        {/* Burger button */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </main>
      {/* Mobile sliding menu */}
      <nav
        aria-label="Mobile menu"
        className={`fixed right-0 top-0 z-50 h-full w-64 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          className="mb-4 flex w-full justify-end"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Close menu"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col gap-6">
          {headerMobileSidebar.map((item) => (
            <li key={item.id} className="w-full capitalize">
              {item.link ? (
                <Link href={item.link}>{item.name}</Link>
              ) : (
                item.name
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
