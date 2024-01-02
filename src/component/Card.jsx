/* eslint-disable react/prop-types */
import React, { useState } from "react";
import cloudyDay from "../assets/cloudy-day.png";
function Card(props) {
  const weatherInfo = props?.weatherInfo;
//   const [isActive, setIsActive] = useState(true);
  let isActive = true;
  if (Object.keys(weatherInfo).length !=0) {
    isActive = false
  }
  return (
    <>
      <div
        className={`w-[75] rounded-md border bg-slate-50`}
        style={{display: isActive ? "none" : "block"}}
      >
        <img
          className="h-48 w-50 ml-[5rem]"
          src={weatherInfo?.current?.condition?.icon}
          alt={weatherInfo?.current?.condition?.text}
        />
        <div className="flex justify-around">
          <div className="p-4">
            <h1 className="text-lg font-semibold">
              Country:{" "}
              <span className="font-light text-lg">
                {weatherInfo?.location?.country}
              </span>
            </h1>
            <h1 className="text-lg font-semibold">
              Region:{" "}
              <span className="font-light text-lg">
                {weatherInfo?.location?.region}
              </span>
            </h1>
            <h1 className="text-lg font-semibold">
              City:{" "}
              <span className="font-light text-lg">
                {weatherInfo?.location?.name}
              </span>
            </h1>
            <h1 className="text-lg font-semibold">
              Time-zone:{" "}
              <span className="font-light text-lg">
                {weatherInfo?.location?.tz_id}
              </span>
            </h1>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">
              Weather:{" "}
              <span className="font-light text-lg">
                {weatherInfo?.current?.condition?.text}
              </span>
            </h2>
            <h2 className="text-lg font-semibold">
              Temprature:{" "}
              <span className="font-light text-lg">
                {weatherInfo?.current?.temp_c}<span>&deg;C</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
