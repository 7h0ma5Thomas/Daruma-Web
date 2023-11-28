import React from 'react'

import MiniCard from '@/components/widgets/miniCard'
import Banner from '@/components/widgets/banner'

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-[#fafafa]">
      <Banner />
      <MiniCard />
    </main>
  )
}
