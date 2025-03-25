'use client'

import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import Link from "next/link";
export default function Navbar() {

  const route = useRouter()

  return (
    <div className="fixed top-0 z-50 w-full mx-auto">
      <MaxWidthWrapper className="flex justify-between items-center bg-white/30 backdrop-blur-lg p-4 rounded-lg mt-4">
        <Image onClick={() => route.push("/")} className="cursor-pointer" src={"/icons/LPRP.png"} alt="LegacyRoleplay" width={35} height={35}/>
          <div className="">
            <Link href={""}>Forum</Link>
          </div>
          <div className="flex gap-2 items-center">
            <Button onClick={() => route.push("/login")} variant={"default"} className="cursor-pointer p-2 bg-white text-black hover:text-white">Sign In</Button>
            <User onClick={() => route.push("/login")} style={{width: "25px", height: "25px"}} className="text-white cursor-pointer"/>
          </div>  
      </MaxWidthWrapper>
    </div>
  );
}
