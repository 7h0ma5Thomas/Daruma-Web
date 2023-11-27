import Header from '@/components/widgets/header'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronsDown } from 'lucide-react'

export default function Home() {
  return (
    <main className="w-full min-h-screen flex relative">
      <Header />
      <Image
        className="brightness-50 h-screen w-full object-cover absolute"
        src="/assets/home.jpg"
        alt="Un ordinateur sur un bureau avec un smratphone et un bloc note"
        width={6144}
        height={4069}
      />
      <div className="absolute top-1/3 flex flex-col items-center px-2">
        <h1
          className="w-full text-center text-white text-5xl font-bold
        mb-4"
        >
          Développeur web frontend
        </h1>
        <Button
          className="w-32 bg-red-700 opacity-70 border-none font-bold text-white"
          variant="outline"
        >
          Button
        </Button>
      </div>
      <div className="absolute w-full top-[86%] flex flex-col items-center sm:top-[90%]">
        <div className="w-64 bg-[#00000038] flex justify-center">
          <h2 className="text-white text-xl">Votre site web sur mesure</h2>
        </div>
        <ChevronsDown className="mt-6 animate-bounce" size={40} color="white" />
      </div>
    </main>
  )
}
