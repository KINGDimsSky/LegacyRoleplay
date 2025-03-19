import { cn } from "@/lib"
import React from "react"

export default function MaxWidthWrapper ({children, className} : {children : React.ReactNode, className ?: string}) {
    return (
        <div className={cn(`mx-auto w-full max-w-7xl md:max-w-[95rem] px-4 md:px-20 ${className}`)}>
            {children}
        </div>
    )
}