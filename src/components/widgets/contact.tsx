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
      id="contact"
      className="w-full flex flex-col items-center justify-center bg-fixed py-10"
      style={{
        backgroundImage: 'url("/assets/contact.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-40 bg-[#c7c7c796] rounded-sm z-10 mb-10 lg:mb-20 lg:mt-6">
        <h2 className="text-4xl font-bold text-[#2E2E2E] text-center txtShadowLgtLght">
          <span className="text-[#D12600]">C</span>ontact
        </h2>
      </div>

      <div className="w-full z-10 flex flex-col items-center lg:flex-row lg:justify-center xl:mb-20">
        <div className="h-[544px] w-11/12 p-6 rounded-2xl flex flex-col bg-[#f6f6f6cf] md:w-1/2 lg:w-2/6 lg:mr-10 lg:p-8 xl:w-96 xl:mr-20">
          <h2 className="text-2xl font-bold text-[#2E2E2E] text-center mb-8 mt-2">
            <span className="text-[#D12600]">P</span>rochainement
          </h2>
          <h3 className="font-bold">Votre formulaire de contact</h3>
          <p className="mt-3 mb-3">
            En attendant, pour toute demande, n&apos;hésitez pas à me contacter
          </p>
          <p className="mb-3">par mail : contact@daruma-web.fr</p>
          <p className="mb-12">ou par téléphone au 06 76 22 27 41.</p>
          <p>A bientôt.</p>
          <Image
            src="/assets/logoDaruma.png"
            alt="Logo Daruma-web"
            width={100}
            height={100}
            className="rounded-full self-center mt-16"
          />
          <div className="hidden">
            <Label htmlFor="email" className="text-lg font-bold">
              <span className="text-[#D12600]">N</span>om
            </Label>
            <Input className="mb-8 bg-transparent text-lg xl:w-72" />
            <Label htmlFor="email" className=" text-lg font-bold">
              <span className="text-[#D12600]">P</span>rénom
            </Label>
            <Input className="mb-8 bg-transparent text-lg xl:w-72" />
            <Label htmlFor="email" className=" text-lg font-bold">
              <span className="text-[#D12600]">M</span>ail
            </Label>
            <Input className="mb-8 bg-transparent text-lg xl:w-72" />
            <Label htmlFor="email" className="mb-2 text-lg font-bold">
              <span className="text-[#D12600]">D</span>emande
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-transparent xl:w-72">
                <SelectValue placeholder="Sélectionnez un motif" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="info">
                  J&apos;ai besoin de renseignements
                </SelectItem>
                <SelectItem value="devis">
                  Je souhaiterais obtenir un devis
                </SelectItem>
                <SelectItem value="bug">J&apos;ai trouvé un bug</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
            <Button
              type="button"
              className="z-10 self-center brightRedBtn opacity-90 w-32 border-none font-bold text-white mt-20 xl:w-32 xl:h-10 xl:text-lg"
              variant="outline"
            >
              Envoyer
            </Button>
          </div>
        </div>
        <div className="w-11/12 h-[544px] p-10 mt-12 rounded-2xl flex flex-col bg-[#f6f6f67e] md:w-1/2 lg:mt-0 lg:w-2/6 xl:w-96">
          <h2 className="text-2xl font-bold text-[#2E2E2E] text-center mb-6">
            <span className="text-[#D12600]">C</span>oordonnées
          </h2>
          <div className="flex flex-col mb-8">
            <h3 className="font-bold mb-3 lg:text-lg">Mes infos</h3>
            <span className=" lg:text-lg">Thomas Chaudru</span>
            <span className=" lg:text-lg">06 76 22 27 41</span>
            <span className=" lg:text-lg">Lundi - Vendredi</span>
            <span className=" lg:text-lg">09h-12h</span>
            <span className=" lg:text-lg">14h-18h</span>
          </div>
          <div className="flex flex-col mb-8">
            <h3 className="font-bold mb-3 lg:text-lg">Mon mail</h3>
            <span className=" lg:text-lg">contact@daruma-web.fr</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold mb-4 lg:text-lg">Réseaux sociaux</h3>
            <div className="flex">
              <Link href="https://www.linkedin.com/in/thomas-chaudru/">
                <Image
                  className="hover:scale-105"
                  src="/assets/LinkedInMini.jpg"
                  alt="Logo LinkedIn"
                  height={40}
                  width={40}
                />
              </Link>
              <Link href="https://www.malt.fr/profile/thomaschaudru">
                <Image
                  className="border border-red-400 rounded-full ml-4 hover:scale-105"
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
