import Button from "../Button";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Navbar() {
  return (
    <div className="bg-white">
      <MaxWidthWrapper className="flex items-center justify-between bg-yellow-300 p-4">
        <h1 className="text-red text-3=xl">Legacy Roleplay</h1>
        <Button className="bg-emerald-300 rounded-md p-2">Sign In</Button>
      </MaxWidthWrapper>
    </div>
  );
}
