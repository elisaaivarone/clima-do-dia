import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const buscarClima = async (cidade) => {
    try {
      const respostaAtual = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      const dadosAtuais = await respostaAtual.json();
      setClima(dadosAtuais);

      const respostaPrevisao = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      const dadosPrevisao = await respostaPrevisao.json();

      const previsoesFiltradas = dadosPrevisao.list.filter((p) =>
        p.dt_txt.includes("12:00:00")
      );
      setPrevisao(previsoesFiltradas);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main
        className="min-h-screen flex flex-col items-center justify-start gap-6 p-4 
        bg-gradient-to-br from-blue-100 to-blue-300 dark:from-slate-900
        dark:to-slate-800 transition-all"
      >
        <Header toggleDarkMode={toggleDarkMode} />

        <div className="w-full max-w-md mx-auto">
          <SearchForm onSearch={buscarClima} />
        </div>

        {clima && (
          <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            <WeatherCard clima={clima} />
          </div>
        )}

        {previsao.length > 0 && (
          <div className="w-full max-w-6xl mx-auto">
            <ForecastList previsoes={previsao} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
