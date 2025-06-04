import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "4c619a8242c87c1a8fffcd4e1a4b7a57"; // Substitua por sua chave

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      setWeather(response.data);
    } catch (error) {
      alert("Cidade não encontrada!");
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Clima do Dia 🌤️</h1>
      <input
        type="text"
        placeholder="Digite a cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded-md mb-4 w-64"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Buscar
      </button>

      {weather && (
        <div className="mt-6 bg-white p-4 rounded shadow-md w-80 text-center">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <p className="text-lg">{weather.weather[0].description}</p>
          <p>🌡 Temperatura: {weather.main.temp} °C</p>
          <p>💧 Umidade: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
