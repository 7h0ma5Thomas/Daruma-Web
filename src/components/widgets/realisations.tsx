import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/bigCard'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Lightbulb } from 'lucide-react'

export default function Realisations() {
  return (
    <div
      className="w-11/12 py-14 z-10 flex flex-col items-center xl:w-3/4 2xl:w-1/2"
      id="realisations"
    >
      <h2 className="text-4xl font-bold text-[#2E2E2E] text-center mb-12">
        <span className="text-[#D12600]">R</span>éalisations
      </h2>
      <div className="w-full flex flex-col items-center gap-10 lg:flex-row lg:flex-wrap lg:justify-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Landing Page</CardTitle>
            <CardDescription>
              <Image
                className="mt-3"
                src="/assets/dev2you.png"
                alt="Landing Page Dev2you"
                width={1903}
                height={1060}
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="mb-20">
            <h3 className="text-[#2E2E2E] font-bold mb-6">
              <span className="text-[#D12600]">D</span>ev2you
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit
              dolorum at eveniet eligendi sunt labore excepturi eos nobis sint
              rem possimus, eius officia ipsam!
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-between">
            <Button
              variant="outline"
              className="z-10 redBtn w-32 border-none font-bold text-white xl:w-44 xl:h-12 xl:text-lg"
            >
              <Link href={'/'}>Visiter</Link>
            </Button>
            <Button
              variant="outline"
              className="z-10 greyBtn w-32 border-none font-bold text-white xl:w-44 xl:h-12 xl:text-lg"
            >
              <Link href={'/'}>+ infos</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Plateforme</CardTitle>
            <CardDescription>
              <Image
                className="mt-3"
                src="/assets/devUp.png"
                alt="Landing Page Dev2you"
                width={1903}
                height={1060}
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="mb-20">
            <h3 className="text-[#2E2E2E] font-bold mb-6">
              <span className="text-[#D12600]">D</span>ev-Up!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit
              dolorum at eveniet eligendi sunt labore excepturi eos nobis sint
              rem possimus, eius officia ipsam!
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-between">
            <Button
              variant="outline"
              className="z-10 redBtn w-32 border-none font-bold text-white xl:w-44 xl:h-12 xl:text-lg"
            >
              <Link href={'/'}>Visiter</Link>
            </Button>
            <Button
              variant="outline"
              className="z-10 greyBtn w-32 border-none font-bold text-white xl:w-44 xl:h-12 xl:text-lg"
            >
              <Link href={'/'}>+ infos</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Refonte web</CardTitle>
            <CardDescription>
              <Image
                className="mt-3"
                src="/assets/devaidaya.png"
                alt="Landing Page Dev2you"
                width={1903}
                height={1060}
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="mb-20">
            <h3 className="text-[#2E2E2E] font-bold mb-6">
              <span className="text-[#D12600]">D</span>evaidaya
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit
              dolorum at eveniet eligendi sunt labore excepturi eos nobis sint
              rem possimus, eius officia ipsam!
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-between">
            <Button
              variant="outline"
              className="z-10 redBtn w-32 border-none font-bold text-white xl:w-44 xl:h-12 xl:text-lg"
            >
              <Link href={'/'}>Visiter</Link>
            </Button>
            <Button
              variant="outline"
              className="z-10 greyBtn w-32 border-none font-bold text-white xl:w-44 xl:h-12 xl:text-lg"
            >
              <Link href={'/'}>+ infos</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Votre idée</CardTitle>
            <CardDescription>
              {/* <Lightbulb className="mt-6 border" size={90} strokeWidth={2} /> */}
              <Image
                className="mt-3 h-3/4"
                src="/assets/idea.jpg"
                alt="Landing Page Dev2you"
                width={1903}
                height={1060}
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="mb-20">
            <h3 className="text-[#2E2E2E] font-bold mb-6">
              <span className="text-[#D12600]">V</span>otre projet
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit
              dolorum at eveniet eligendi sunt labore excepturi eos nobis sint
              rem possimus, eius officia ipsam!
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-between">
            <Button
              variant="outline"
              className="z-10 redBtn w-32 border-none font-bold text-white xl:w-44 xl:h-12 xl:text-lg"
            >
              <Link href={'/'}>Contact</Link>
            </Button>
            <Button
              variant="outline"
              className="z-10 greyBtn w-32 border-none font-bold text-white xl:w-44 xl:h-12 xl:text-lg"
            >
              <Link href={'/'}>+ infos</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
