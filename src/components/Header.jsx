// Importa os ícones do react-icons
import { FaSun, FaMoon } from "react-icons/fa";

// Recebe a função toggleDarkMode por props
function Header({ toggleDarkMode }) {
  return (
    <header className="w-full max-w-2xl mx-auto text-center p-4 flex flex-row justify-evenly gap-4">
      {/* Título do app */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Clima do Dia</h1>

      {/* Botão para alternar o tema */}
      <button
        onClick={toggleDarkMode}
        className="text-yellow-500 dark:text-white text-xl bg-white dark:bg-slate-700 rounded-full p-2 shadow hover:scale-110 transition"
        title="Alternar tema"
      >
        {/* Ícone muda com base no tema atual (tema escuro é gerenciado no App.jsx) */}
        <FaSun className="block dark:hidden" />
        <FaMoon className="hidden dark:block" />
      </button>
    </header>
  );
}

export default Header;

