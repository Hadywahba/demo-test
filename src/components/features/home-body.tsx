import Image from 'next/image';
import React from 'react';

export default function HomeBody() {
  return (
    <main className="flex flex-col gap-5">
      {/* Smart Scan Section */}
      <section className="mx-4 mt-[5.5rem] flex flex-col items-start justify-center rounded-xl bg-[#DF96AE] pl-4 pt-[3.75rem] lg:mx-0 lg:pl-[3.75rem]">
        <div className="flex items-center justify-start gap-8">
          <div>
            <Image
              src="/assets/icons/icon-cmm.svg"
              alt="logo"
              width="80"
              height="80"
              priority
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-semibold leading-[2.5025rem] text-darkBlue sm:text-base md:text-lg lg:text-[1.625rem]">
              Keep your Mac clean
            </h3>
            <p className="font-normal text-darkBlue md:text-base lg:text-lg lg:leading-[2.0025rem]">
              Remove junk, scan for malware, wipe email attachments
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/cmm.png"
            alt="logo"
            width="1106"
            height="456"
            priority
          />
        </div>
      </section>

      {/* Code & Meeting Sections */}
      <section className="flex flex-col items-center justify-center gap-5 lg:flex lg:flex-row lg:items-center lg:justify-center">
        {/* Code Part */}
        <div className="mx-4 rounded-[1.25rem] bg-lightCreame lg:mx-0 lg:h-[39.5625rem] lg:w-[36.25rem]">
          {/* Code Image */}
          <figure>
            <Image
              src="/assets/images/coderunner.png"
              alt="coderunner"
              width="580"
              height="401"
              priority
            />
          </figure>

          {/* Code Figure and Caption */}
          <div className="flex flex-col px-[3.75rem]">
            <figure className="pb-5">
              <Image
                src="/assets/icons/icon-coder.svg"
                alt="coder"
                width="80"
                height="80"
                priority
              />
            </figure>
            <figcaption className="flex flex-col pb-4 md:pb-0">
              <h3 className="text-[1.625rem] font-semibold leading-[2.5025rem] text-darkBlue">
                Write code
              </h3>
              <p className="pb-4 font-normal text-darkBlue md:text-base lg:text-lg lg:leading-[2.0025rem]">
                Create applications in more than 25 languages
              </p>
            </figcaption>
          </div>
        </div>

        {/* Meeting Part */}
        <div className="mx-4 rounded-[1.25rem] bg-lightBlue lg:mx-0 lg:h-[39.5625rem] lg:w-[36.25rem]">
          {/* Meeting Figure and Caption */}
          <div className="flex flex-col px-[3.75rem] pb-[3.2788rem] pt-[3.75rem]">
            <figure className="pb-5">
              <Image
                src="/assets/icons/icon-meeter.svg"
                alt="meeter"
                width="68"
                height="68"
                priority
              />
            </figure>
            <figcaption className="flex flex-col pb-4 md:pb-0">
              <h3 className="text-[1.625rem] font-semibold leading-[2.5025rem] text-white">
                Join meetings in a click
              </h3>
              <p className="font-normal text-white md:text-base lg:text-lg lg:leading-[2.0025rem]">
                Quickly access links to your meetings from menu bar
              </p>
            </figcaption>
          </div>

          {/* Meeting Image */}
          <figure>
            <Image
              src="/assets/images/meeter.png"
              alt="logo"
              width="580"
              height="401"
              priority
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
