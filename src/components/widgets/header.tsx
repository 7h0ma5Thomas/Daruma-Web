import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <Image
        src="/assets/daruma-web.jpg"
        alt="Logo Daruma-web"
        width={472}
        height={109}
      />
    </header>
  )
}
