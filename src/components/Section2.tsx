import Button from "./Button";

export default function Section2 () {
    return (
        <div className="mt-4 flex w-full justify-between min-h-screen">
            <div className=" flex flex-col items-baseline">
              <h2 className="font-luckiest text-8xl mt-80">ONE DREAM</h2>
              <h2 className="font-luckiest text-8xl mb-4">ONE PLAY !</h2>
              <p>Grinding More, Build A Character, earns Money</p>
              <p>Make Progress towards your dreams.</p>
              <Button className="mt-6 py-4 px-8 bg-green-500 rounded-lg text-white hover:scale-105 transition-all duration-150">Download App</Button>
            </div>
            <div className="p-4">
              <div className="rounded-lg bg-">
                <h2>Phone</h2>
              </div>
            </div>
        </div>
    )
}