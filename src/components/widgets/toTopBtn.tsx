'use client'

import { ChevronUp } from 'lucide-react'
import React from 'react'
import { useEffect, useState } from 'react'

export default function ToTopBtn() {
  const [showButton, setShowButton] = useState(false)

  const onScroll = () => {
    setShowButton(window.scrollY > 820)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      {showButton && (
        <button
          className="z-50 h-12 w-12 flex justify-center items-center rounded-full bg-[#2e2e2eda] fixed bottom-6 left-[96%]"
          type="button"
          onClick={handleScrollToTop}
        >
          <ChevronUp size={36} className="text-white" />
        </button>
      )}
    </>
  )
}
