import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      <MaxWidthWrapper className="min-h-screen">
        <h2>Hello World</h2>
      </MaxWidthWrapper>
    </div>
  );
}

