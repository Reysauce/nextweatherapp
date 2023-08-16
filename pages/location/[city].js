import LocationSearchBar from "@/components/LocationSearchBar";
import Link from "next/link";
import cityDataList from "../../data/city.list.json";
import moment from "moment-timezone";
import CurrentWeather from "../../components/CurrentWeather";
import HourlyWeather from "@/components/HourlyWeather";

export async function getServerSideProps(context) {
  const city = context.params.city.split("-")[0];
  const cityId = context.params.city.split("-")[1];
  if (!cityId) return null;
  const filteredCity = cityDataList.filter((item) => {
    if (item.id === +cityId) {
      return item;
    }
  });
  console.log(cityDataList[0], "city data", cityId);
  if (!filteredCity) {
    return { notFound: true };
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${filteredCity[0].coord.lat}&lon=${filteredCity[0].coord.lon}&appid=${process.env.NEXT_WEATHER_API_KEY}&units=imperial`
  );
  const data = await response.json();
  console.log(data.timezone);
  const timeZone = data.timezone;
  return {
    props: {
      city: filteredCity,
      currentTemp: Number(data.current.temp).toFixed(1),
      high: Number(data.daily[0].temp.max).toFixed(1),
      low: Number(data.daily[0].temp.min).toFixed(1),
      icon: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`,
      description: data.current.weather[0].description,
      sunrise: moment.unix(data.current.sunrise).tz(timeZone).format("LT"),
      sunset: moment.unix(data.current.sunset).tz(timeZone).format("LT"),
      hourlyData: data.hourly,
      timeZone: timeZone,
    },
  };
}
export default function City(props) {
  //   return (
  //     <>
  //       <Link href="/">&larr; Home</Link>
  //       <div>
  //         <LocationSearchBar />
  //         <CurrentWeather
  //           currentTemp={props.currentTemp}
  //           city={props.city[0]}
  //           high={props.high}
  //           low={props.low}
  //           icon={props.icon}
  //           description={props.description}
  //           sunrise={props.sunrise}
  //           sunset={props.sunset}
  //         />
  //         <HourlyWeather
  //           hourlyData={props.hourlyData}
  //           timeZone={props.timeZone}
  //         />
  //       </div>
  //     </>
  //   );
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-blue-500 p-4 text-white text-center">
        <Link href="/" className="text-lg">
          &larr; Home
        </Link>
      </div>
      <div className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4">
          <LocationSearchBar />
        </div>
        <div className="text-center p-4">
          <div className="mb-6">
            <CurrentWeather
              currentTemp={props.currentTemp}
              city={props.city[0]}
              high={props.high}
              low={props.low}
              icon={props.icon}
              description={props.description}
              sunrise={props.sunrise}
              sunset={props.sunset}
            />
          </div>
          <div className="mb-6">
            <HourlyWeather
              hourlyData={props.hourlyData}
              timeZone={props.timeZone}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
