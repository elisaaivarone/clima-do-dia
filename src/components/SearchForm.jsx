import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [cidade, setCidade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cidade.trim() !== "") {
      onSearch(cidade);
      setCidade("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md mx-auto gap-2 mt-6"
    >
      <input
        type="text"
        placeholder="Digite a cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        className="flex-1 p-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white dark:border-gray-600"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow transition"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;

 
