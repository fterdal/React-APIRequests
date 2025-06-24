import React, { useState, useEffect } from "react";
import axios from "axios";

// const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
const url = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const todoResponse = await axios.get(url);
      const todoData = todoResponse.data;
      setTodos(todoData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  console.log("TODOS", todos);

  return (
    <>
      <h2>API Request coming from here</h2>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
