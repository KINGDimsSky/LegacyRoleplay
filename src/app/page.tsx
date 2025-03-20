import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PlayerInfo from "@/components/PlayerInfo";
import { Button } from "@/components/ui/button";
import { Download, User } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col min-h-screen">
       <div className="absolute -z-20 top-0 left-0 w-full h-full overflow-hidden">
         <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover pointer-events-none opacity-70">
           <source src="/video/Cinematic.mp4" type="video/mp4" />
         </video>
       </div>
      <MaxWidthWrapper className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-white font-extrabold text-[1.95rem] lg:text-8xl md:text-5xl mb-2">HIGH QUALITY SERVER</h2>
        <h2 className="text-white font-extrabold text-4xl lg:text-8xl md:text-5xl mb-4">LEGACY ROLEPLAY</h2>
        <p className="md:w-2xl font-semibold text-center text-xs md:text-base text-gray-200 mb-8">Create goals, build good Habits, earns More Friends and Make Progress towards your dreams With Legacy Roleplay. </p>
        <div className="flex gap-2 mb-4">
         <Button className="py-6 text-xl hover:bg-green-600">Join Discord <User style={{width: "24px", height: "24px"}}/></Button>
         <Button size="icon" className="p-6 hover:bg-green-600"> <Download style={{ width: "26px", height: "26px" }} /></Button>
        </div>
      </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="flex flex-col">
        <Hero/>
        <PlayerInfo/>
      </MaxWidthWrapper>
    </div>
  );
}

