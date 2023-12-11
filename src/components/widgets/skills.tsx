import Image from 'next/image'
import Link from 'next/link'
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
        <Link href="https://fr.wikipedia.org/wiki/Next.js" target="blank">
          <Image
            className="rounded-full shadow-lg shadow-gray-600 lg:hover-scale"
            src="/assets/next-js.svg"
            alt="Logo Next.js"
            width={120}
            height={120}
          />
        </Link>
        <Link href="https://fr.wikipedia.org/wiki/TypeScript" target="blank">
          <Image
            className="rounded-full mt-16 shadow-lg shadow-gray-600 lg:mt-0 lg:hover-scale"
            src="/assets/typescript.png"
            alt="Logo Typescript"
            width={120}
            height={120}
          />
        </Link>
        <Link href="https://fr.wikipedia.org/wiki/Tailwind_CSS" target="blank">
          <Image
            className="rounded-full mt-16 shadow-lg shadow-gray-600 lg:mt-0 lg:hover-scale"
            src="/assets/tailwind.png"
            alt="Logo Tailwind"
            width={120}
            height={120}
          />
        </Link>
        <Link href="https://supabase.com/" target="blank">
          <Image
            className="rounded-full bg-black mt-16 shadow-lg shadow-gray-600 lg:mt-0 lg:hover-scale"
            src="/assets/supabase.png"
            alt="Logo Supabase"
            width={120}
            height={120}
          />
        </Link>
        <Link href="https://www.prisma.io/" target="blank">
          <Image
            className="h-[120px] rounded-full bg-white mt-16 shadow-lg shadow-gray-600 lg:mt-0 lg:hover-scale"
            src="/assets/prisma.png"
            alt="Logo Prisma"
            width={120}
            height={120}
          />
        </Link>
        <div className="hidden w-[120px] h-[120px] 2xl:block"></div>
        <Link
          href="https://fr.wikipedia.org/wiki/Vercel_(entreprise)"
          target="blank"
        >
          <Image
            className="rounded-full mt-16 shadow-lg shadow-gray-600 lg:mt-0 lg:hover-scale"
            src="/assets/Vercel.jpg"
            alt="Logo Vercel"
            width={120}
            height={120}
          />
        </Link>
        <Link
          href="https://fr.wikipedia.org/wiki/GitHub_(entreprise)"
          target="blank"
        >
          <Image
            className="rounded-full mt-16 shadow-lg shadow-gray-600 lg:mt-0 lg:hover-scale"
            src="/assets/github.png"
            alt="Logo Github"
            width={120}
            height={120}
          />
        </Link>
        <Link href="https://fr.wikipedia.org/wiki/Figma" target="blank">
          <Image
            className="rounded-full mt-16 shadow-lg shadow-gray-600 lg:mt-0 lg:hover-scale"
            src="/assets/figma.png"
            alt="Logo Figma"
            width={120}
            height={120}
          />
        </Link>
        <div className="hidden w-[120px] h-[120px] 2xl:block"></div>
      </div>
    </div>
  )
}
