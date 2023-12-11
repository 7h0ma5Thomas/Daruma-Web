import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-3 shadow-inner shadow-gray-500 lg:flex-row lg:justify-center">
      <h3 className="mb-3 lg:mb-0 lg:mr-5">Site réalisé par :</h3>
      <Link href="/">
        <Image
          className="w-56 rounded-xl hover:shadow-lg hover:shadow-gray-600"
          src="/assets/daruma-web.jpg"
          alt="Logo Daruma-web"
          width={472}
          height={109}
        />
      </Link>
    </footer>
  )
}
