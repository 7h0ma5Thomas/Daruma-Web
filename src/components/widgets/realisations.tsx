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
          <CardHeader className="h-64">
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
          <CardContent className="h-48 mt-5 mb-14">
            <h3 className="text-[#2E2E2E] font-bold mb-6">
              <span className="text-[#D12600]">D</span>ev2you
            </h3>
            <p className="lg:text-justify">
              Page unique présentant les informations principales et utiles du
              collectif de développeurs web freelance, les liens vers leurs
              réseaux sociaux et un bouton de contact.
            </p>
          </CardContent>
          <CardFooter className="w-full p-0 flex justify-around">
            <Button
              variant="outline"
              className="z-10 brightRedBtn w-32 border-none font-bold text-white xl:w-32 xl:h-10 xl:text-base"
            >
              <Link href="https://www.dev2you.fr/">Visiter</Link>
            </Button>
            {/* <Button
              variant="outline"
              className="z-10 greyBtn w-32 border-none font-bold text-white xl:w-32 xl:h-10 xl:text-base"
            >
              <Link href={'/'}>+ infos</Link>
            </Button> */}
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="h-64">
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
          <CardContent className="h-48 mt-5 mb-14">
            <h3 className="text-[#2E2E2E] font-bold mb-6">
              <span className="text-[#D12600]">D</span>ev-Up!
            </h3>
            <p className="lg:text-justify">
              Plateforme d&apos;entraide pour les futurs/jeunes développeurs
              web. Publication de tutos et ressources. Fait par des
              développeurs, pour les développeurs. (En cours de réalisation)
            </p>
          </CardContent>
          <CardFooter className="w-full p-0 flex justify-around">
            <Button
              variant="outline"
              className="z-10 brightRedBtn w-32 border-none font-bold text-white xl:w-32 xl:h-10 xl:text-base"
            >
              <Link href="https://dev-up.vercel.app/">Visiter</Link>
            </Button>
            {/* <Button
              variant="outline"
              className="z-10 greyBtn w-32 border-none font-bold text-white xl:w-32 xl:h-10 xl:text-base"
            >
              <Link href={'/'}>+ infos</Link>
            </Button> */}
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="h-64">
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
          <CardContent className="h-48 mt-5 mb-14">
            <h3 className="text-[#2E2E2E] font-bold mb-6">
              <span className="text-[#D12600]">D</span>evaidaya
            </h3>
            <p className="lg:text-justify">
              Refonte complète et modernisation du design du site web d&apos;un
              développeur web freelance. Conception d&apos;une UI plus en
              adéquation avec l&apos;activité.
            </p>
          </CardContent>
          <CardFooter className="w-full p-0 flex justify-around">
            <Button
              variant="outline"
              className="z-10 brightRedBtn w-32 border-none font-bold text-white xl:w-32 xl:h-10 xl:text-base"
            >
              <Link href="https://www.devaidaya.fr/">Visiter</Link>
            </Button>
            {/* <Button
              variant="outline"
              className="z-10 greyBtn w-32 border-none font-bold text-white xl:w-32 xl:h-10 xl:text-base"
            >
              <Link href={'/'}>+ infos</Link>
            </Button> */}
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="w-full h-64">
            <CardTitle className="text-base mb-12">Votre idée</CardTitle>
            <CardDescription className="flex justify-center items-center">
              <Image
                className="object-cover"
                src="/assets/lightV2.png"
                alt="Une ampoule et un engrenage"
                width={96}
                height={96}
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="h-48 mt-5 mb-14">
            <h3 className="text-[#2E2E2E] font-bold mb-6">
              <span className="text-[#D12600]">V</span>otre projet
            </h3>
            <p className="lg:text-justify">
              Vous avez une idée, un projet web que vous souhaitez mettre en
              place. Prenons le temps d&apos;en discuter et de trouver ensemble
              la solution à votre besoin.
            </p>
          </CardContent>
          <CardFooter className="w-full p-0 flex justify-around">
            <Button
              variant="outline"
              className="z-10 brightRedBtn w-32 border-none font-bold text-white xl:w-32 xl:h-10 xl:text-base"
            >
              <Link href={'#contact'}>Contact</Link>
            </Button>
            {/* <Button
              variant="outline"
              className="z-10 greyBtn w-32 border-none font-bold text-white xl:w-32 xl:h-10 xl:text-base"
            >
              <Link href={'/'}>+ infos</Link>
            </Button> */}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
