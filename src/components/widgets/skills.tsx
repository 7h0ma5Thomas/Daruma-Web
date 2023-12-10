import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <div
      className="w-full bg-[#DBDBDB] px-6 pt-12 pb-20 flex flex-col items-center"
      id="skills"
    >
      <h2 className="text-4xl font-bold text-[#2E2E2E] text-center mb-12">
        <span className="text-[#D12600]">C</span>ompétences
      </h2>
      <div className="w-full flex flex-col items-center lg:w-1/2 lg:flex-row lg:flex-wrap lg:gap-14 justify-between">
        <Image
          className="rounded-full shadow-lg shadow-gray-600"
          src="/assets/next-js.svg"
          alt={''}
          width={120}
          height={120}
        />
        <Image
          className="rounded-full mt-16 shadow-lg shadow-gray-600 lg:mt-0"
          src="/assets/typescript.png"
          alt={''}
          width={120}
          height={120}
        />
        <Image
          className="rounded-full mt-16 shadow-lg shadow-gray-600 lg:mt-0"
          src="/assets/tailwind.png"
          alt={''}
          width={120}
          height={120}
        />
        <Image
          className="rounded-full bg-black mt-16 shadow-lg shadow-gray-600 lg:mt-0"
          src="/assets/supabase.png"
          alt={''}
          width={120}
          height={120}
        />
        <Image
          className="h-[120px] rounded-full bg-white mt-16 shadow-lg shadow-gray-600 lg:mt-0"
          src="/assets/prisma.png"
          alt={''}
          width={120}
          height={120}
        />
        <div className="hidden w-[120px] h-[120px] 2xl:block"></div>
        <Image
          className="rounded-full mt-16 shadow-lg shadow-gray-600 lg:mt-0"
          src="/assets/Vercel.jpg"
          alt={''}
          width={120}
          height={120}
        />

        <Image
          className="rounded-full mt-16 shadow-lg shadow-gray-600 lg:mt-0"
          src="/assets/github.png"
          alt={''}
          width={120}
          height={120}
        />

        <Image
          className="rounded-full mt-16 shadow-lg shadow-gray-600 lg:mt-0"
          src="/assets/figma.png"
          alt={''}
          width={120}
          height={120}
        />
        <div className="hidden w-[120px] h-[120px] 2xl:block"></div>
      </div>
    </div>
  )
}
