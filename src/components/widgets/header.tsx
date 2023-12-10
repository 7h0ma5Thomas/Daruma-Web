'use client'

import React from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import useScrollHook from '@/lib/hooks/scrollHook'

export default function Header() {
  const { scrollPos } = useScrollHook()
  return (
    <header className="w-full fixed z-50 lg:hidden">
      <div
        className={`flex items-center justify-between p-4 md:p-8 ${
          scrollPos ? 'bg-white border-b border-[#2e2e2e75]' : 'bg-transparent'
        }`}
      >
        <Link href="/">
          <Image
            className="w-56 rounded-xl"
            src="/assets/daruma-web.jpg"
            alt="Logo Daruma-web"
            width={472}
            height={109}
          />
        </Link>

        <Sheet>
          <SheetTrigger>
            <Menu
              className={scrollPos ? 'text-[#2E2E2E]' : 'text-white'}
              size={40}
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex justify-center">
                  <Image
                    className="mt-6 "
                    src="/assets/logoDaruma.png"
                    alt="Logo Daruma-web"
                    height={106}
                    width={106}
                  />
                </div>

                <div className="flex flex-col mt-10 items-start md:ml-6">
                  <Link
                    className="text-xl text-[#2E2E2E] font-bold mt-4"
                    href="/"
                  >
                    Accueil
                  </Link>
                  <Link
                    className="text-xl text-[#2E2E2E] font-bold mt-8"
                    href="#services"
                  >
                    Services
                  </Link>
                  <Link
                    className="text-xl text-[#2E2E2E] font-bold mt-8"
                    href="#bio"
                  >
                    Qui suis-je
                  </Link>
                  <Link
                    className="text-xl text-[#2E2E2E] font-bold mt-8"
                    href="#realisations"
                  >
                    Réalisations
                  </Link>
                  <Link
                    className="text-xl text-[#2E2E2E] font-bold mt-8"
                    href="#skills"
                  >
                    Compétences
                  </Link>
                  <Link
                    className="text-xl text-[#2E2E2E] font-bold mt-8"
                    href="/"
                  >
                    Contact
                  </Link>
                </div>
                <div className="flex items-center mt-20 md:ml-6">
                  <Link href="https://www.linkedin.com/in/thomas-chaudru/">
                    <Image
                      src="/assets/LinkedInMini.jpg"
                      alt="Logo LinkedIn"
                      height={40}
                      width={40}
                    />
                  </Link>
                  <Link
                    className="ml-4"
                    href="https://www.malt.fr/profile/thomaschaudru"
                  >
                    <Image
                      className="border border-red-400 rounded-full"
                      src="/assets/malt.png"
                      alt="Logo Malt"
                      height={40}
                      width={40}
                    />
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
