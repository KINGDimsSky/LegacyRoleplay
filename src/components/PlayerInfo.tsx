import Image from "next/image";
import { Button } from "./ui/button";
import { Map } from "lucide-react";

export default function PlayerInfo() {
    return (
        <div className="flex flex-col w-full mx-auto max-w-[90rem]">
            <div className="px-2 ">
             <h2 className="text-lg md:text-[12rem] md:leading-48 font-extrabold tracking-wide text-white">1660</h2>
             <div className="flex items-center gap-6">
               <h2 className="flex items-center gap-6 text-2xl md:text-7xl font-extrabold tracking-wide text-white">Discord Members</h2>
               <div className="bg-green-500 w-12 h-12 rounded-full animate-blink"></div>
             </div>
            </div>  
            <div className="relative h-72 md:h-[35rem] bg-yellow-300 mx-auto w-full mt-4 flex items-center justify-center">
                <Image className="object-cover" src="/png/fix.png" alt="City" fill/>
                <Button className="flex gap-2 absolute rounded-3xl p-6 w-52 cursor-pointer">
                    <Map className=""/>
                    <p className="text-xl">Lihat Peta</p>
                </Button>
            </div>
        </div>
    )
}