// TopMenu.js
import React, { useState, useEffect } from "react";
import menuMobile from "../images/menuMobile.svg"; // Dodaj odpowiednią ścieżkę
import logo from "../images/logo.svg"; // Dodaj odpowiednią ścieżkę

function TopMenu() {
  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const handleGoToDashboard = () => {
    window.location.href = "/dashboard";
  };

  const handleMenuClick = () => {
    window.location.href = "/dashboard";
  };

  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [btcRate, setBtcRate] = useState("");

  const fetchLocation = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=4337d7a7ff16a8cd3f7a172692569cb8`
      );
      const weatherData = await weatherResponse.json();
      const city = weatherData.name;
      const country = weatherData.sys.country;
      setLocation(`${city}, ${country}`);
      const temperatureInCelsius = Math.round(weatherData.main.temp - 273.15);
      setWeather(`${temperatureInCelsius}°C`);
    } catch {
      setWeather("Unable to fetch weather data");
    }
  };

  const fetchBitcoinRate = async () => {
    try {
      const btcResponse = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      const btcData = await btcResponse.json();
      setBtcRate(`$${btcData.bitcoin.usd}`);
    } catch {
      setBtcRate("Unable to fetch Bitcoin rate");
    }
  };

  useEffect(() => {
    fetchLocation();
    fetchBitcoinRate();
  }, []);

  return (
    <div className="TopMenu">
      <div className="LogoContainer" onClick={handleGoToDashboard}>
        {isMobile ? (
          <div onClick={handleMenuClick}>
            <img src={menuMobile} alt="Mobile Menu" className="MenuIcon" />
          </div>
        ) : (
          <img src={logo} alt="Logo" className="Logo" />
        )}
      </div>
      <div className="TopMenuRight">
        <div className="CurrentDate">{getCurrentDate()}</div>
        <div className="Location">{location}</div>
        <div className="Weather">{weather}</div>
        <div className="BitcoinRate">btc {btcRate}</div>
      </div>
    </div>
  );
}

export default TopMenu;
