'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronsDown } from 'lucide-react'
import useScrollHook from '@/lib/hooks/scrollHook'
import '@/app/globals.css'
import Link from 'next/link'

export default function Banner() {
  const { scrollPos } = useScrollHook()
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full">
      <Image
        className="brightness-50 h-screen w-full object-cover absolute select-none"
        src="/assets/home.jpg"
        alt="Un ordinateur sur un bureau avec un smratphone et un bloc note"
        width={6144}
        height={4069}
      />
      <div className="absolute top-1/3 flex flex-col items-center px-2 md:w-3/4 md:top-[40%] lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        <h1
          className="w-full text-center text-white text-5xl font-bold
    mb-8"
        >
          Développeur web frontend
        </h1>
        <Button
          type="button"
          className="z-10 redBtn w-32 border-none font-bold text-white xl:w-44 xl:h-12 xl:text-lg"
          variant="outline"
        >
          <Link href="#realisations">Réalisations</Link>
        </Button>
      </div>
      <div className="absolute w-full top-[86%] flex flex-col items-center sm:top-[90%]">
        <div className="w-64 bg-[#00000038] flex justify-center 2xl:w-80">
          <h2 className="text-white text-xl 2xl:text-2xl">
            Votre site web sur mesure
          </h2>
        </div>
        <div
          className={
            scrollPos
              ? 'hidden'
              : 'absolute top-[94%] flex flex-col items-center w-[50px] h-[50px]'
          }
        >
          <ChevronsDown
            className="mt-6 animate-bounce lg:hidden"
            size={40}
            color="white"
          />
        </div>
      </div>
    </div>
  )
}
