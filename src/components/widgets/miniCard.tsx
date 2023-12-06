import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  AppWindow,
  PencilRuler,
  Recycle,
  Settings2,
  TabletSmartphone,
} from 'lucide-react'
import Image from 'next/image'

export default function MiniCard() {
  return (
    <div
      className="w-11/12 py-14 z-10 flex flex-col items-center xl:w-3/4 2xl:w-1/2"
      id="services"
    >
      <h2 className="text-4xl text-[#2E2E2E] font-bold mb-12">
        <span className="text-4xl text-[#D12600] font-bold">S</span>ervices
      </h2>
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
        <Card>
          <CardHeader className="mt-1">
            <CardTitle>Conception de maquette</CardTitle>
          </CardHeader>
          <CardContent className="my-2">
            <PencilRuler size={90} strokeWidth={1} />
          </CardContent>
          <CardFooter>
            <p>
              Transformer vos idées en réalité visuelle avec des maquettes web
              innovantes.
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="mt-1">
            <CardTitle>Creation de site web</CardTitle>
          </CardHeader>
          <CardContent className="my-2">
            <AppWindow size={90} strokeWidth={1} />
          </CardContent>
          <CardFooter>
            <p>
              Donner vie à votre présence en ligne avec des sites web
              personnalisés et performants.
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="mt-1">
            <CardTitle>Refonte</CardTitle>
          </CardHeader>
          <CardContent className="my-2">
            <Recycle size={90} strokeWidth={1} />
          </CardContent>
          <CardFooter>
            <p>
              Revitaliser votre site existant pour une expérience utilisateur
              moderne et attrayante.
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="mt-1">
            <CardTitle>Solution sur mesure</CardTitle>
          </CardHeader>
          <CardContent className="my-2">
            <TabletSmartphone size={90} strokeWidth={1} />
          </CardContent>
          <CardFooter>
            <p>
              Des solutions web adaptées à vos besoins spécifiques pour une
              expérience unique et personalisée.
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="mt-1">
            <CardTitle>Référencement naturel</CardTitle>
          </CardHeader>
          <CardContent className="my-2">
            <Settings2 size={90} strokeWidth={1} />
          </CardContent>
          <CardFooter>
            <p>
              Optimisation de votre visibilité en ligne avec des stratégies de
              référencement naturel efficaces.
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="mt-1">
            <CardTitle>Google My Business</CardTitle>
          </CardHeader>
          <CardContent className="my-2">
            <Image
              className="mb-3"
              src="/assets/my-business.png"
              alt="Logo Google My Business"
              width={90}
              height={90}
            />
          </CardContent>
          <CardFooter>
            <p>
              Maximiser votre visibilité locale avec une présence optimisée sur
              Google My Business.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
