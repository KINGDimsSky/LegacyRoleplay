import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full">
      <MaxWidthWrapper className="flex justify-between items-center bg-white/30 backdrop-blur-lg p-4 rounded-lg mt-4">
        <Image className="cursor-pointer" src={"/icons/LPRP.png"} alt="LegacyRoleplay" width={35} height={35}/>
        <Button variant={"default"} className="cursor-pointer p-2 bg-white text-black hover:text-white">Sign In</Button>
      </MaxWidthWrapper>
    </div>
  );
}
