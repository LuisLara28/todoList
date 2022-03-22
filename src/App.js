import { useState } from "react";

// Components
import Form from "./components/form/form.component";
import TodoList from "./components/todo-list/todo-list.component";

import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  // State
  const [todos, setTodos] = useState([]);

  const addTodo = async (todo) => {
    // await axios.post("http://localhost:4000/api/v1/todos", todo);
    // console.log(todo);
    setTodos((prevState) => [...prevState, todo]);
  };

  const editTodo = async (id, newContent) => {
    setTodos((prevState) => {
      const currentTodos = prevState;

      const todoIndex = currentTodos.findIndex((todo) => +todo.id === +id);

      const updatedTodo = currentTodos[todoIndex];

      updatedTodo.content = newContent;

      currentTodos[todoIndex] = updatedTodo;

      return currentTodos;
    });
  };

  const deleteTodo = async (id) => {
    setTodos((prevState) => {
      const currentTodos = prevState;

      const updatedTodos = currentTodos.filter((todo) => +todo.id !== +id);

      return [...updatedTodos];
    });
  };

  return (
    <div className="app">
      <Header />
      <Form onAddTodo={addTodo} />
      <TodoList onDeleteTodo={deleteTodo} onEditTodo={editTodo} items={todos} />
    </div>
  );
};

export default App;
