function ForecastList({ previsoes }) {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {previsoes.map((prev) => {
        const iconUrl = `https://openweathermap.org/img/wn/${prev.weather[0].icon}@2x.png`;
        const dia = new Date(prev.dt_txt).toLocaleDateString("pt-BR", {
          weekday: "short",
          day: "2-digit",
          month: "2-digit",
        });

        return (
          <div
            key={prev.dt}
            className="bg-white dark:bg-slate-700 p-3 sm:p-4 rounded-lg shadow text-center transition-all"
          >
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">{dia}</p>
            <img
              src={iconUrl}
              alt={prev.weather[0].description}
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
            />
            <p className="text-xs sm:text-sm text-gray-600 dark:text-white capitalize">
              {prev.weather[0].description}
            </p>
            <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
              {Math.round(prev.main.temp)}°C
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastList;
