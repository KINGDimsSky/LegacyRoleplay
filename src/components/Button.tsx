import { cn } from "@/lib";
import React from "react";

export default function Button ({onClick, children, className} : {onClick ?: () => void, children ?: React.ReactNode, className ?: string}) {
    return (
        <button onClick={onClick} className={cn(`cursor-pointer ${className}`)}>
            {children}
        </button>
    )
}