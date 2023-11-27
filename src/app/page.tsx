import Header from '@/components/widgets/header'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronsDown } from 'lucide-react'
import '@/app/globals.css'
import DesktopHeader from '@/components/widgets/desktopHeader'

export default function Home() {
  return (
    <main className="w-full min-h-screen flex relative md:justify-center">
      <Header />
      <DesktopHeader />
      <Image
        className="brightness-50 h-screen w-full object-cover absolute"
        src="/assets/home.jpg"
        alt="Un ordinateur sur un bureau avec un smratphone et un bloc note"
        width={6144}
        height={4069}
      />
      <div className="absolute top-1/3 flex flex-col items-center px-2 md:w-3/4 md:top-[40%] lg:w-1/2 2xl:w-1/4">
        <h1
          className="w-full text-center text-white text-5xl font-bold
        mb-8"
        >
          Développeur web frontend
        </h1>
        <Button
          className="redBtn w-32 border-none font-bold text-white"
          variant="outline"
        >
          Button
        </Button>
      </div>
      <div className="absolute w-full top-[86%] flex flex-col items-center sm:top-[90%]">
        <div className="w-64 bg-[#00000038] flex justify-center 2xl:w-80">
          <h2 className="text-white text-xl 2xl:text-2xl">
            Votre site web sur mesure
          </h2>
        </div>
        <ChevronsDown
          className="mt-6 animate-bounce lg:hidden"
          size={40}
          color="white"
        />
      </div>
    </main>
  )
}
