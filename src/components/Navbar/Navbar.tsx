import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full">
      <MaxWidthWrapper className="flex justify-between items-center  bg-green-300 p-4 rounded-lg mt-4">
        <Image src={"/icons/LPRP.png"} alt="LegacyRoleplay" width={20} height={20}/>
        <Button variant={"destructive"} className="cursor-pointer p-2">Click Me</Button>
      </MaxWidthWrapper>
    </div>
  );
}
