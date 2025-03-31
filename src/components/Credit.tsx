import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Youtube } from "lucide-react";

export default function CreditSection () {
    return (
        <MaxWidthWrapper>
          <div className="flex">
            <div className="flex h-28 gap-6 bg-gray-400 px-4 py-2 rounded-full">
              <div className="h-full flex items-center justify-center overflow-hidden w-24 bg-white rounded-full">
                <Youtube size={60} className="transition-colors duration-200 fill-red-300 stroke-red-600"/>
              </div>
              <div className="flex justify-center flex-col gap-1 pr-12">
                <p className="text-4xl font-semibold text-white">484 Ribu</p>
                <p className="text-sm text-gray-500">Pelanggan Youtube</p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
    )
}