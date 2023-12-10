import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Contact() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center bg-fixed py-10"
      style={{
        backgroundImage: 'url("/assets/contact.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-40 bg-[#c7c7c796] rounded-sm z-10 mb-10">
        <h2 className="text-4xl font-bold text-[#2E2E2E] text-center txtShadowLgtLght ">
          <span className="text-[#D12600]">C</span>ontact
        </h2>
      </div>

      <div className="w-full z-10 flex flex-col items-center">
        <div className=" w-11/12 p-6 rounded-2xl flex flex-col bg-[#f6f6f6c8]">
          <Label htmlFor="email" className=" text-lg font-bold">
            <span className="text-[#D12600]">N</span>om
          </Label>
          <Input className="mb-8 bg-transparent text-lg" />
          <Label htmlFor="email" className=" text-lg font-bold">
            <span className="text-[#D12600]">P</span>rénom
          </Label>
          <Input className="mb-8 bg-transparent text-lg" />
          <Label htmlFor="email" className=" text-lg font-bold">
            <span className="text-[#D12600]">M</span>ail
          </Label>
          <Input className="mb-8 bg-transparent text-lg" />
          <Label htmlFor="email" className="mb-2 text-lg font-bold">
            <span className="text-[#D12600]">D</span>emande
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-transparent">
              <SelectValue placeholder="Sélectionnez un motif" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="button"
            className="z-10 self-center brightRedBtn opacity-90 w-32 border-none font-bold text-white mt-32 xl:w-44 xl:h-12 xl:text-lg"
            variant="outline"
          >
            Envoyer
          </Button>
        </div>
        <div className="w-11/12 h-[592px] p-10 mt-12 rounded-2xl flex flex-col bg-[#f6f6f68d]">
          <h2 className="text-2xl font-bold text-[#2E2E2E] text-center mb-10">
            <span className="text-[#D12600]">C</span>oordonnées
          </h2>
          <div className="flex flex-col mb-8">
            <h3 className="font-bold mb-3">Mes infos</h3>
            <span>Thomas Chaudru</span>
            <span>06 76 22 27 41</span>
            <span>Lundi - Vendredi</span>
            <span>09h-12h</span>
            <span>14h-18h</span>
          </div>
          <div className="flex flex-col mb-8">
            <h3 className="font-bold mb-3">Mon mail</h3>
            <span>contact@daruma-web.fr</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold mb-4">Réseaux sociaux</h3>
            <div className="flex">
              <Link href="https://www.linkedin.com/in/thomas-chaudru/">
                <Image
                  src="/assets/LinkedInMini.jpg"
                  alt="Logo LinkedIn"
                  height={40}
                  width={40}
                />
              </Link>
              <Link href="https://www.malt.fr/profile/thomaschaudru">
                <Image
                  className="border border-red-400 rounded-full ml-4"
                  src="/assets/malt.png"
                  alt="Logo Malt"
                  height={40}
                  width={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
