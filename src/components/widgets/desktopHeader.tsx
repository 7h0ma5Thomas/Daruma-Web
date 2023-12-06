'use client'

import React from 'react'
import Image from 'next/image'
import { Home, Mail } from 'lucide-react'
import Link from 'next/link'
import useScrollHook from '@/lib/hooks/scrollHook'

export default function DesktopHeader() {
  const { scrollPos } = useScrollHook()
  return (
    <header className="hidden lg:w-full lg:flex lg:justify-center">
      <div
        className={`flex w-full p-4 items-center justify-between fixed z-50 text-white xl:justify-around 2xl:px-60 ${
          scrollPos ? 'bg-white border-b border-[#2e2e2e75]' : 'bg-transparent'
        }`}
      >
        <div
          className={`w-1/3 flex justify-between items-center xl:w-[30%] ${
            scrollPos ? 'text-[#2E2E2E]' : 'text-white'
          }`}
        >
          <Link className="text-xl font-bold hover:scale-125" href="/">
            <Home size={32} strokeWidth={2.5} />
          </Link>
          <Link className="text-xl font-bold hover:scale-125" href="#services">
            Services
          </Link>
          <Link className="text-xl font-bold hover:scale-125" href="#bio">
            Qui suis-je
          </Link>
        </div>
        <Link className="w-56" href="/">
          <Image
            className="w-56 rounded-xl"
            src="/assets/daruma-web.jpg"
            alt="Logo Daruma-web"
            width={472}
            height={109}
          />
        </Link>
        <div
          className={`w-1/3 flex justify-between items-center xl:w-[30%] ${
            scrollPos ? 'text-[#2E2E2E]' : 'text-white'
          }`}
        >
          <Link
            className="text-xl font-bold hover:scale-125"
            href="#realisations"
          >
            Réalisations
          </Link>
          <Link className="text-xl font-bold hover:scale-125" href="/">
            Compétences
          </Link>
          <Link className="text-xl font-bold hover:scale-125" href="/">
            <Mail size={32} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </header>
  )
}
