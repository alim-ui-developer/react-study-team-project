import React from "react";
import "./CampingDetailWeather.style.css";
import {
  useFiveDaysWeatherQuery,
  useWeatherQuery,
} from "../../../hooks/useWeather";
import CircularProgress from "@mui/material/CircularProgress";
import weatherDescKo from "./../../../constants/WeatherDescKo";

const CampingDetailWeather = ({ lat, lon, name }) => {
  const { data, isLoading } = useFiveDaysWeatherQuery(lat, lon);

  if (isLoading) {
    return <div className="loading_wrap">{/* <CircularProgress /> */}</div>;
  }

  return (
    <div className="camping-detail-weather">
      <div className="camping-detail-weather-box-area">
        <h1>{`${name}`} 주변 5일 날씨</h1>
        <div className="camping-detail-weather-box-5days">
          {[0, 8, 16, 24, 32].map((index) => (
            <div key={index} className="camping-detail-weather-box-1day">
              <div>{`${data?.list[index]?.dt_txt?.substr(5, 2)}월 ${data?.list[
                index
              ]?.dt_txt?.substr(8, 2)}일`}</div>
              <img
                src={`https://openweathermap.org/img/wn/${data?.list[index]?.weather[0]?.icon}.png`}
                alt="Weather Icon"
              />
              <div className="camping-detail-weather-description">
                <strong>
                  {weatherDescKo[data?.list[index]?.weather[0]?.id]}
                </strong>
              </div>
              <div>{`현재 온도 : ${Math.round(
                data?.list[index]?.main.temp
              )}℃ (${Math.round(
                data?.list[index]?.main.temp_min
              )}℃/${Math.round(data?.list[index]?.main.temp_max)}℃)`}</div>
              <div>{`강수확률 : ${
                Math.round(data?.list[index]?.pop) * 100
              }%`}</div>
              <div>{`습도 : ${Math.round(
                data?.list[index]?.main.humidity
              )}%`}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="camping-detail-weather-box-area-mobile">
        <h1>{`${name}`} 의 내일 날씨</h1>
        <div className="camping-detail-weather-box-mobile">
          <div>{`${data?.list[8]?.dt_txt?.substr(
            5,
            2
          )}월 ${data?.list[8]?.dt_txt?.substr(8, 2)}일`}</div>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[8]?.weather[0]?.icon}.png`}
            alt="Weather Icon"
          />
          <div className="camping-detail-weather-description-mobile">
            <strong>{weatherDescKo[data?.list[8]?.weather[0]?.id]}</strong>
          </div>
          <h3>{`현재 온도 : ${Math.round(data?.list[8]?.main.temp)}℃`}</h3>
          <h6>{`(${Math.round(data?.list[8]?.main.temp_min)}℃/${Math.round(
            data?.list[8]?.main.temp_max
          )}℃)`}</h6>
          <h6>{`강수확률 : ${Math.round(data?.list[8]?.pop) * 100}%`}</h6>
          <h6>{`습도 : ${Math.round(data?.list[8]?.main.humidity)}%`}</h6>
        </div>
      </div>
    </div>
  );
};

export default CampingDetailWeather;
