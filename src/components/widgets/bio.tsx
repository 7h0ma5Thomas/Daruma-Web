import React from 'react'
import Image from 'next/image'

export default function Bio() {
  return (
    <div
      className="bg-[#DBDBDB] px-6 py-12 flex flex-col items-center xl:flex-row-reverse xl:justify-center xl:py-28"
      id="bio"
    >
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-2/5 xl:ml-16 2xl:w-1/3">
        <h2 className="text-4xl font-bold text-[#2E2E2E] text-center xl:text-start">
          Qui suis-je <span className="text-[#D12600]">?</span>
        </h2>
        <p className="mt-8 mb-14 md:text-xl lg:text-lg xl:mt-6 xl:mb-0">
          Passionné par le code et le design digital, je donne vie à vos idées
          avec des sites web sur mesure. Qu&apos;il sagisse d&apos;une refonte,
          de la création d&apos;une landing page ou d&apos;un site vitrine,
          chaque projet est une histoire unique, façonnée pour répondre à vos
          attentes.
        </p>
      </div>
      <div className="rounded-full shadow-lg shadow-gray-600 w-2/3 md:w-2/5 lg:w-1/4 xl:w-1/6 2xl:w-[12%]">
        <Image
          className="rounded-full object-cover"
          src="/assets/moi.jpg"
          alt="Thomas, développeur et fondateur de Daruma-Web"
          width={1566}
          height={1566}
        />
      </div>
    </div>
  )
}
