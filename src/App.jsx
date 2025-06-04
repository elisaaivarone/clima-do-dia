import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "4c619a8242c87c1a8fffcd4e1a4b7a57"; // Substitua pela sua chave da OpenWeather

function App() {
  const [clima, setClima] = useState(null);

  const buscarClima = async (cidade) => {
    try {
      const resposta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      const dados = await resposta.json();
      if (resposta.ok) {
        setClima(dados);
      } else {
        alert("Cidade não encontrada.");
      }
    } catch (erro) {
      alert("Erro ao buscar clima.");
      console.error(erro);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100">
      <Header />
      <SearchForm onSearch={buscarClima} />
      {clima && <WeatherCard clima={clima} />}
    </div>
  );
}

export default App;
