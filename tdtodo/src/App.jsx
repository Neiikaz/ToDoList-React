import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  // Création de l'état todos avec quelques tâches initiales
  const [todos, setTodos] = useState(() => {
    const savecTodos = localStorage.getItem("todos");
    return savecTodos ? JSON.parse(savecTodos) : [];
  });

  // Sauvegarde dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Le code précédent est ici...
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (description) => {
    // Création d'un nouvel ID (simplifié pour l'exemple)
    const newId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    // Création de la nouvelle tâche
    const newTodo = {
      id: newId,
      description,
      done: false,
    };

    // Mise à jour de l'état avec la nouvelle tâche
    setTodos([...todos, newTodo]);
  };

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.done).length;

  const deleteTodo = (id) => {
    // Filtre les todos pour garder tous sauf celui à supprimer
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Header completed={completedTodos} total={totalTodos} />
      <main>
        <Form onAdd={addTodo} />
        <List todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
      <Footer />
    </>
  );
}
export default App;
