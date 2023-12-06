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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          aperiam, adipisci suscipit doloribus repellat ipsam neque quod
          praesentium. Saepe ipsum ipsa aliquid veritatis ex ab laudantium!
          Ipsum maiores adipisci earum eos similique eligendi inventore aut.
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
