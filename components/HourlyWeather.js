import moment from "moment-timezone";
import Image from "next/image";

export default function HourlyWeather({ hourlyData, timeZone }) {
  const hourlyWeatherMap = hourlyData.map((item, index) => {
    console.log(item.weather);
    const time = moment.unix(item.dt).tz(timeZone).format("LT");
    // return (
    //   index < 10 && (
    //     <div key={index} className="flex flex-col items-center space-y-2">
    //       <div className="text-lg font-semibold">
    //         {index === 0 ? "Now" : time}
    //       </div>
    //       <div className="w-2/3">
    //         <div style={{ width: "100px", paddingBottom: "16%" }}>
    //           <Image
    //             src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
    //             width={100}
    //             height={100}
    //             alt="Weather Icon"
    //           />
    //         </div>
    //       </div>
    //       <div className="text-lg">{Number(item.temp).toFixed(1)} &#176;F</div>
    //     </div>
    //   )
    // );
    return (
      index < 10 && (
        <div
          key={index}
          className="flex flex-col items-center space-y-2 bg-gray-800 p-2 rounded-lg"
        >
          <div className="text-lg font-semibold text-white">
            {index === 0 ? "Now" : time}
          </div>
          <div className="w-2/3">
            <div
              style={{
                width: "100px",
                paddingBottom: "16%",
                backgroundColor: "darkgrey",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                width={80}
                height={80}
                alt="Weather Icon"
              />
            </div>
          </div>
          <div className="text-lg text-white">
            {Number(item.temp).toFixed(1)} &#176;F
          </div>
        </div>
      )
    );
  });

  return (
    <div className="mb-6 overflow-x-auto h-60">
      {" "}
      {/* Adjust the height value as needed */}
      <div className="flex space-x-4">{hourlyWeatherMap}</div>
    </div>
  );
}
