import Button from "../Button";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Navbar() {
  return (
    <div className="mb-16 md:mb-24">
      <MaxWidthWrapper className="flex items-center justify-between py-4">
        <h1 className="text-red font-extrabold text-3xl">LpRP</h1>
        <Button className="bg-emerald-300 rounded-md p-2">Sign In</Button>
      </MaxWidthWrapper>
    </div>
  );
}
