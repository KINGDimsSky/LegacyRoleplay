import Button from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Sponsor from "@/components/Sponsor";
import { Download, Gamepad2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MaxWidthWrapper className="flex flex-col items-center justify-center tracking-tight">
        <h2 className="text-xs text-center md:text-base md:text-left mb-4">Get Started Playing Roleplay With Legacy Roleplay Based Experience!</h2>
        <h1 className="text-4xl md:text-8xl text-center font-luckiest">HIGH QUALITY SERVER</h1>
        <h1 className="text-4xl md:text-8xl text-center font-luckiest mb-9 md:mb-16">Legacy Roleplay</h1>
        <div className="w-full flex justify-between">
          <div className="relative hidden md:flex justify-center items-center w-[28rem]">
            <img className="absolute -rotate-12  md:w-[450px] drop-shadow-2xl" src="/png/LogoSamp.png" alt="" />
          </div>
          <div className="flex gap-2">
            <Button className="flex items-center gap-2 px-2 md:py-4 md:px-8 text-xs md:text-base text-white rounded-lg bg-green-600 border border-green-800 hover:scale-105 transition-all duration-200">Join Discord<Gamepad2 className="w-4 md:w-6"/></Button>
            <Button className="md:py-4 md:px-4 px-2 text-white rounded-lg bg-green-600 border border-green-800 hover:scale-105 transition-all duration-200"><Download className="w-3 md:w-6"/></Button>
          </div>
          <div className="relative hidden md:w-[28rem] md:flex justify-center items-center">
            <img className="absolute md:w-[450px] drop-shadow-2xl" src="/png/CarClove.png" alt="" />
          </div>
        </div>
        <Sponsor/>
      </MaxWidthWrapper>
    </div>
  );
}

