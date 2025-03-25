import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem,  CarouselNext,  CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import { AppWindow, Download, Smartphone } from "lucide-react";
import { FeaturesAnnoucementData, AnnoucementType } from "@/lib";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Data : AnnoucementType[] = FeaturesAnnoucementData

export default function Hero() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col py-20 min-h-screen text-white">
      <h2 className="text-5xl text-center font-bold tracking-tighter mb-12">Features & Update Annoucement !</h2>
      <div>
        <Carousel className="w-full">
          <CarouselContent className="gap-4 w-full">
            {Data.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 w-full p-0 rounded-4xl overflow-hidden border border-gray-800 cursor-pointer">
                <div className="flex flex-col h-full">
                  <div className="relative w-full h-48">
                     <Image src={item.image} alt="Clove" fill className="object-cover overflow-hidden"/>
                  </div>
                  <div className="flex grow px-6 py-2 bg-gray-950 gap-6">
                      <h2 className="text-2xl font-semibold w-full">{item.title}</h2>
                      <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">{item.date}</h2>
                        <h2 className="text-sm text-gray-300">{item.desc}</h2>
                      </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
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
            <div className="flex gap-4 mt-6">
              <Button className="cursor-pointer py-4 rounded-4xl bg-white text-black">Windows <AppWindow style={{width: "25px", height: "25px"}}/></Button>
              <Button className="cursor-pointer py-4 rounded-4xl bg-white text-black">Android <Smartphone style={{width: "25px", height: "25px"}}/> </Button>
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
            <Button className="mt-6 cursor-pointer mr-6 flex items-center py-8 bg-white text-black rounded-4xl"><p className="text-2xl">Get Started</p> <Download style={{width: "25px", height: "25px"}}/> </Button>
         </div>
       </div>  
       <div className="relative flex items-center justify-center basis-1/2">
          <Image src="/png/testing.png" alt="Laptop" className="scale-125 -rotate-6 -translate-y-5" width={700} height={700}/>
       </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
}
