import Image from "next/image";
export default function CurrentWeather({
  currentTemp,
  high,
  low,
  icon,
  description,
  sunrise,
  sunset,
}) {
  //   return (
  //     <>
  //       {" "}
  //       <h1>city name</h1>
  //       <h2>Current Temp:{currentTemp}&#176;F</h2>
  //       <h4>High Temps:{high}&#176;F</h4>
  //       <h5>Low Temps:{low}&#176;F</h5>
  //       <h4>sunrise time:{sunrise}</h4>
  //       <h4>sunset time:{sunset}</h4>
  //       <Image src={icon} alt="weather description" width={300} height={300} />
  //       <p>{description}</p>
  //     </>
  //   );
  return (
    <div className="text-center p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-full md:col-span-1 lg:col-span-2">
        <h1 className="text-2xl font-bold mb-4">City Name</h1>
        <h2 className="text-xl mb-2">Current Temp: {currentTemp}&#176;F</h2>
        <div className="mb-4">
          <h4 className="text-lg">High Temps: {high}&#176;F</h4>
          <h5 className="text-lg">Low Temps: {low}&#176;F</h5>
        </div>
        <div className="mb-4">
          <h4 className="text-lg">Sunrise Time: {sunrise}</h4>
          <h4 className="text-lg">Sunset Time: {sunset}</h4>
        </div>
      </div>
      <div className="col-span-full md:col-span-1 lg:col-span-1">
        <Image
          src={icon}
          alt="Weather Description"
          width={300}
          height={300}
          className="mx-auto"
        />
        <p>{description}</p> {/* Moved the description here */}
      </div>
    </div>
  );
}
