import { useState, useEffect } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    console.log("fetchTodos");

    // On récupère les données
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    // On transforme les données en JSON
    const data = await response.json();

    // On met les données dans le state
    setTodos(data);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <p>Liste des tâches</p>
      <button onClick={fetchTodos}>Recharger la liste</button>
      <ul>
        {/* On map sur les todos  -> équivalent de la boucle for
           Pour chaque todo, on retourne un li avec le titre de la todo        
            
        */}
        {todos.map((todo: Todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;