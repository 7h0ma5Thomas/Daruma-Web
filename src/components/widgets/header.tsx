import React from 'react'
import Image from 'next/image'
import { Home, Linkedin, Mail, Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Header() {
  return (
    <header className="w-full flex p-4 items-center justify-between fixed z-50">
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
          <Menu color="white" size={40} />
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

              <div className="flex flex-col mt-10 items-start">
                <Link className="text-xl font-bold mt-4" href="/">
                  {/* <Home size={32} strokeWidth={2.5} /> */}
                  Accueil
                </Link>
                <Link className="text-xl font-bold mt-8" href="/">
                  Services
                </Link>
                <Link className="text-xl font-bold mt-8" href="/">
                  Qui suis-je
                </Link>
                <Link className="text-xl font-bold mt-8" href="/">
                  Réalisations
                </Link>
                <Link className="text-xl font-bold mt-8" href="/">
                  Compétences
                </Link>
                <Link className="text-xl font-bold mt-8" href="/">
                  {/* <Mail size={32} strokeWidth={2.5} /> */}
                  Contact
                </Link>
              </div>
              <div className="flex items-center mt-20">
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
    </header>
  )
}
