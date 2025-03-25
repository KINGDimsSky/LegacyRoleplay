import { PenTool } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

export default function CreditSection () {
    return (
        <MaxWidthWrapper>
          <div className="flex w-full justify-center gap-4">
            <Button className="flex items-center p-12 rounded-full">
              <PenTool className="" width={20} height={20}/>
              <div className="flex flex-col">
                <p className="text-2xl font-semibold">High Quality</p>
                <p className="text-xs w-48 bg-emerald-200">Dengan maintenace Rutin bertujuan meningkatkan Experience pemain</p>
              </div>
            </Button>
          </div>
          <h2 className="text-white text-3xl">Testing</h2>
        </MaxWidthWrapper>
    )
}