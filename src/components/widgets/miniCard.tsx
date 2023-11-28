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
    <div className="w-11/12 py-14 z-10 flex flex-col items-center xl:w-3/4 2xl:w-1/2">
      <h2 className="text-4xl text-[#2E2E2E] font-bold mb-12">
        <span className="text-4xl text-[#D12600] font-bold">S</span>ervices
      </h2>
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Conception de maquette</CardTitle>
          </CardHeader>
          <CardContent>
            <PencilRuler size={90} strokeWidth={1} />
          </CardContent>
          <CardFooter>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              magni, veritatis consequatur totam suscipit eos!
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Creation de site web</CardTitle>
          </CardHeader>
          <CardContent>
            <AppWindow size={90} strokeWidth={1} />
          </CardContent>
          <CardFooter>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              quae commodi laudantium quas soluta id?
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Refonte</CardTitle>
          </CardHeader>
          <CardContent>
            <Recycle size={90} strokeWidth={1} />
          </CardContent>
          <CardFooter>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              dolor delectus, facere sequi sed voluptates!
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Solution sur mesure</CardTitle>
          </CardHeader>
          <CardContent>
            <TabletSmartphone size={90} strokeWidth={1} />
          </CardContent>
          <CardFooter>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              perferendis mollitia ipsam aspernatur delectus assumenda!
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Référencement naturel</CardTitle>
          </CardHeader>
          <CardContent>
            <Settings2 size={90} strokeWidth={1} />
          </CardContent>
          <CardFooter>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quos
              facilis voluptates tempora repellendus at.
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Google My Business</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/assets/my-business.png"
              alt="Logo Google My Business"
              width={90}
              height={90}
            />
          </CardContent>
          <CardFooter>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quos
              facilis voluptates tempora repellendus at.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
