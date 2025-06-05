// WeatherCard.jsx
import React from "react";

function WeatherCard({ clima }) {
  const iconUrl = `https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`;

  return (
    <div className="bg-white dark:bg-slate-700 rounded-xl shadow p-4 text-center w-full max-w-3xs sm:max-w-sm mx-auto transition-all">
      {/* Nome da cidade */}
      <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
        {clima.name}
      </h2>

      {/* Ícone do clima */}
      <img
        src={iconUrl}
        alt={clima.weather[0].description}
        className="mx-auto w-16 h-16"
      />

      {/* Descrição do clima (ex: Céu limpo) */}
      <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
        {clima.weather[0].description}
      </p>

      {/* Temperatura atual */}
      <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
        {Math.round(clima.main.temp)}°C
      </p>
    </div>
  );
}

export default WeatherCard;

