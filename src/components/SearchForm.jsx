import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchForm({ onSearch }) {
  const [cidade, setCidade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cidade.trim() !== "") {
      onSearch(cidade);
      setCidade("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-4 my-4">
      <input
        type="text"
        placeholder="Digite uma cidade..."
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-64"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        <FiSearch className="inline mr-2" />
        Buscar
      </button>
    </form>
  );
}
