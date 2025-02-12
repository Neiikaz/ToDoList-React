import { useState } from "react";

function Form({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Emp^che le rechargement de la page

    if (input.trim()) {
      onAdd(input.trim());
      setInput(""); // Vide le champ après ajout
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Ajouter</button>
    </form>
  );
}
export default Form;
