import Image from 'next/image'
import React from 'react'

export default function HomeHeader() {
  return (
    <section className="flex flex-col items-center justify-center ">
       <div className="pb-[2.4375rem]">
                  <Image
                    src="/assets/images/logo-group.png"
                    alt="logo"
                    width="128"
                    height="128"
                    priority
                  />
                </div>
                <div className="w-[42.5rem]">
                  <p className="px-[3.5394rem] text-center text-[4rem] font-bold leading-[4.24rem] text-white">
                    Dozens of apps. One subscription. $9.99
                  </p>
                </div>
    </section>
  )
}
