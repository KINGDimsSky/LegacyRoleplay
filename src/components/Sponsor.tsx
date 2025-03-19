import { Gamepad2, Joystick, Monitor, Shield } from "lucide-react";
import SponsorElement from "./SponsorElement";

export default function Sponsor () {
    return (
        <div className="mt-72 w-full max-w-screen py-6 px-16">
          <div className="flex justify-center gap-10">
            <SponsorElement title="Only PC" icon={Monitor}/>
            <SponsorElement title="High Protection" icon={Shield}/>
            <SponsorElement title="To Many Features" icon={Joystick}/>
            <SponsorElement title="100+ Player" icon={Gamepad2}/>
          </div>       
        </div>
    )
}