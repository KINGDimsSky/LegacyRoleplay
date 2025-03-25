import Image from "next/image";
import { Button } from "./ui/button";
import { Map } from "lucide-react";

export default function PlayerInfo() {
    return (
        <div className="flex flex-col">
            <div className="px-2 md:px-80">
             <h2 className="text-lg md:text-[12rem] md:leading-48 font-extrabold tracking-wide text-white">1660</h2>
             <h2 className="text-2xl md:text-7xl font-extrabold tracking-wide text-white">Discord Members</h2>
            </div>  
            <div className="relative h-96 md:h-[40rem] mx-auto w-full md:w-[105rem] mt-4 flex items-center justify-center">
                <Image className="object-cover" src={"/png/City.jpg"} alt="" fill/>
                <Button className="flex gap-2 absolute rounded-3xl p-6 w-52 cursor-pointer">
                    <Map className=""/>
                    <p className="text-xl">Lihat Peta</p>
                </Button>
            </div>
        </div>
    )
}