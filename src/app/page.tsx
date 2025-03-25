import CreditSection from "@/components/Credit";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar/Navbar";
import PlayerInfo from "@/components/PlayerInfo";
import { Button } from "@/components/ui/button";
import { Download, User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
     <div className="flex flex-col">
      <div className="relative flex flex-col min-h-screen">
        <div className="absolute -z-20 top-0 left-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover pointer-events-none opacity-70">
            <source src="/video/Cinematic.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-0 w-full h-48 bg-gradient-to-b from-transparent to-black opacity-100"></div>
        </div>
        <MaxWidthWrapper className="flex flex-col items-center justify-center min-h-screen">
          <Image className="mb-8" alt="LegacyRoleplay" src={"/icons/LPRP.png"} width={110} height={110}/>
          <h2 className="text-white font-extrabold text-4xl lg:text-8xl md:text-5xl mb-4">
            LEGACY ROLEPLAY
          </h2>
          <p className="md:w-2xl font-semibold text-center text-xs md:text-base text-gray-200 mb-8">
            Create goals, build good habits, earn more friends, and make progress towards your dreams with Legacy Roleplay.
          </p>
          <div className="flex gap-8 mb-4">
            <Button className="py-6 text-xl hover:bg-green-600">
              Join Discord <User style={{ width: "24px", height: "24px" }} />
            </Button>
            <Button className="p-6 hover:bg-green-600">
              <p className="text-xl">Get Started</p>
            </Button>
          </div>
        </MaxWidthWrapper>
      </div>
      <Hero />
      <PlayerInfo />
      <CreditSection/>
    </div>
    </>
  );
}
