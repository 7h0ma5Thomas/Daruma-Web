import React from 'react'

import MiniCard from '@/components/widgets/miniCard'
import Banner from '@/components/widgets/banner'
import Bio from '@/components/widgets/bio'
import Realisations from '@/components/widgets/realisations'
import Skills from '@/components/widgets/skills'
import Contact from '@/components/widgets/contact'
import Footer from '@/components/widgets/footer'
import ToTopBtn from '@/components/widgets/toTopBtn'

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-[#fafafa]">
      <Banner />
      <MiniCard />
      <Bio />
      <Realisations />
      <Skills />
      <Contact />
      <Footer />
      <ToTopBtn />
    </main>
  )
}
