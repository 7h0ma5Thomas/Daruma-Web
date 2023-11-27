import React from 'react'
import Image from 'next/image'
import { Home, Mail } from 'lucide-react'
import Link from 'next/link'

export default function DesktopHeader() {
  return (
    <header className="lg:flex lg:w-full lg:p-4 lg:items-center lg:justify-between lg:fixed lg:z-50 text-white xl:justify-around 2xl:w-3/4">
      <div className="w-1/3 flex justify-between items-center xl:w-[30%]">
        <Link className="text-xl font-bold hover:scale-150" href="/">
          <Home size={32} strokeWidth={2.5} />
        </Link>
        <Link className="text-xl font-bold hover:scale-150" href="/">
          Services
        </Link>
        <Link className="text-xl font-bold hover:scale-150" href="/">
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
      <div className="w-1/3 flex justify-between items-center xl:w-[30%]">
        <Link className="text-xl font-bold hover:scale-150" href="/">
          Réalisations
        </Link>
        <Link className="text-xl font-bold hover:scale-150" href="/">
          Compétences
        </Link>
        <Link className="text-xl font-bold hover:scale-150" href="/">
          <Mail size={32} strokeWidth={2.5} />
        </Link>
      </div>
    </header>
  )
}
