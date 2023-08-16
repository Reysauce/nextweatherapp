import Image from "next/image";
import LocationSearchBar from "@/components/LocationSearchBar";

export default function Home() {
  //   return (
  //     <>
  //       <h1>Reys Weather App</h1>
  //       {/* "INPUT" */}
  //       <LocationSearchBar />
  //     </>
  //   );
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-semibold text-white mb-4">
        Reys Weather App
      </h1>
      {/* "INPUT" */}
      <div className="w-96 flex flex-col items-center">
        <LocationSearchBar />
      </div>
    </div>
  );
}
