import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { AppWindow } from "lucide-react";
import { FeaturesAnnoucementData, AnnoucementType } from "@/lib";

const Data = { FeaturesAnnoucementData }

export default function Hero() {
  return (
    <div className="flex flex-col py-24 min-h-screen text-white">
      <h2 className="text-4xl font-bold mb-12">Features & Update Annoucement !</h2>
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 overflow-hidden rounded-4xl border border-gray-800">
              <div className="flex flex-col">
                <div className="relative w-full h-48">
                   <Image src="/png/CarClove.png" alt="Clove" fill className="object-cover overflow-hidden"/>
                </div>
                <div className="flex px-2 py-2 bg-gray-950 gap-6">
                    <h2 className="text-2xl font-semibold w-full">Smuggler Only 2 People</h2>
                    <div className="flex flex-col">
                      <h2 className="text-lg font-semibold">30 November 2025</h2>
                      <h2 className="text-sm text-gray-300">Ini adalah Bagian dari Fitur Paling di Minati Di Legacy Roleplay Dengan Experience menebang Pohon, Selayaknya Pekerja Lumber</h2>
                    </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex px-3  gap-2 mt-28">
       <div className="flex flex-col basis-1/2">
         <h2 className="text-3xl font-semibold mb-2">Menggunakan Client 0.3DL R-1!</h2>
         <h2 className="w-4/5 text-base text-gray-400">Anda Dapat Mengunduh SAMP Secara gratis untuk Windows Dan Android</h2>
         <div className="flex flex-col px-4 mt-12">
            <h2 className="text-4xl font-semibold">Persyaratan Sistem</h2>
            <div className="flex gap-2 mt-6">
              <Button className="cursor-pointer py-4 rounded-4xl bg-white text-black">Windows <AppWindow style={{width: "25px", height: "25px"}}/></Button>
            </div>
            <div className="flex justify-between  mt-8">
             <div className="flex flex-col text-lg text-gray-400 gap-4">
               <h2>OS</h2>
               <h2>Processor</h2>
               <h2>Ram</h2>
               <h2>VGA</h2>
               <h2>Storage</h2>
             </div>
             <div className="pr-8 text-end gap-5 flex flex-col">
               <h2>Windows 7 64 BIT</h2>
               <h2 >Intel pentium 4 / AMD Athlon X2 3800</h2>
               <h2>3 GB</h2>
               <h2>Intel UHD / Amd Radeon Graphics</h2>
               <h2>12 GB Free</h2>
             </div>
            </div>
         </div>
       </div>  
       <div className="relative flex items-center justify-center bg-pink-400 basis-1/2">
          <h2>Testing</h2>
       </div>
      </div>
    </div>
  );
}
