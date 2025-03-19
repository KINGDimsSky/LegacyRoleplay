import { User } from "lucide-react";
import Button from "../Button";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Navbar() {
  return (
    <div className="mb-16 md:mb-24">
      <MaxWidthWrapper className="flex items-center justify-between py-5">
        <div className="flex gap-2 items-center">
         <img className="cursor-pointer w-8 md:w-10" src="/icons/LPRP.png" alt="" />
         <h2 className="font-extrabold text-lg md:text-2xl tracking-tighter cursor-pointer">LegacyRoleplay</h2>
        </div>
        <div className="flex gap-2 items-center">
        <Button className="bg-green-600 text-sm md:text-base text-white rounded-md px-4 py-1 hover:scale-105 transition-all duration-150 border border-green-700">Sign In</Button>
        <User className="w-6 cursor-pointer"/>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
