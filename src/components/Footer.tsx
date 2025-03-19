import { Github, Instagram, Twitter, Youtube } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Footer () {
    return (
        <div className="px-6 bg-black">
            <div className="mx-auto h-0.5 w-full bg-gray- max-w-7xl md:max-w-[95rem]"></div>
            <MaxWidthWrapper className="flex flex-col gap-4  md:flex-row justify-between items-center py-8">
              <h2 className="text-white text-xs md:text-sm tracking-tighter">Created By <code className="text-sm md:text-base">DimsSky</code> ©2025 All Right Rerserved</h2>
              <div className="flex gap-4">
                <Github className="text-white w-5 md:w-6 hover:text-green-200 transition-all duration-200 cursor-pointer"/>
                <Instagram className="text-white w-5 md:w-6 hover:text-green-200 transition-all duration-200 cursor-pointer"/>
                <Twitter className="text-white w-5 md:w-6 hover:text-green-200 transition-all duration-200 cursor-pointer"/>
                <Youtube className="text-white w-5 md:w-6 hover:text-green-200 transition-all duration-200 cursor-pointer"/>
              </div>
            </MaxWidthWrapper>
            
        </div>
    )
}