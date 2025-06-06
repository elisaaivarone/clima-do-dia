import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";

import "./index.css";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Ao montar, define o tema automático ou do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const hora = new Date().getHours();
    const isNight = hora >= 18 || hora < 6;

    if (saved === "dark" || (!saved && isNight)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const novoModo = !darkMode;
    setDarkMode(novoModo);

    if (novoModo) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const buscarClima = async (cidade) => {
    try {
      const respAtual = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      const dadosAtuais = await respAtual.json();
      setClima(dadosAtuais);

      const respPrev = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      const dadosPrev = await respPrev.json();

      const previsoesFiltradas = dadosPrev.list
        .filter((p) => p.dt_txt.includes("12:00:00"))
        .slice(0, 5);
      setPrevisao(previsoesFiltradas);
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center gap-6 p-4 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-slate-900 dark:to-slate-800 transition-all">
      <Header toggleDarkMode={toggleDarkMode} />
      <SearchForm onSearch={buscarClima} />
      {clima && <WeatherCard clima={clima} />}
      {previsao.length > 0 && <ForecastList previsoes={previsao} />}
    </main>
  );
}

export default App;
