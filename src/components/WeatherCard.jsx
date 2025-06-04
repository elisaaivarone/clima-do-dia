const WeatherCard = ({ clima }) => {
  if (!clima || !clima.main || !clima.weather) {
    return <p className="text-center text-gray-600">Dados indisponíveis.</p>;
  }

  const { name, main, weather } = clima;
  const iconCode = weather[0]?.icon;
  const description = weather[0]?.description;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center mx-auto">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>

      {/* Ícone de clima */}
      {iconCode && (
        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
          alt={description}
          className="mx-auto mb-4 w-20 h-20"
        />
      )}

      <p className="text-4xl font-bold text-blue-600">{Math.round(main.temp)}°C</p>
      <p className="capitalize text-gray-700">{description}</p>

      <div className="mt-4 text-gray-500 text-sm">
        <p>🌡Sensação térmica: {Math.round(main.feels_like)}°C</p>
        <p>Máx: {Math.round(main.temp_max)}°C | Mín: {Math.round(main.temp_min)}°C</p>
      </div>
    </div>
  );
};

export default WeatherCard;
