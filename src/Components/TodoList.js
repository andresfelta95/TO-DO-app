import React from "react";
import { TodoItem } from "./TodoItem";

const todos = [
    {
      text: "LAB 01 CMPE2300",
      completed: false,
    },
    {
      text: "SA02 CMPE2150",
      completed: false,
    },
    {
      text: "Proj01 CMPE2150",
      completed: false,
    },
    {
      text: "ICA02 CMPE2600",
      completed: false,
    },
  ];

function TodoList() {
  return (
    <React.Fragment>
        {todos.map((todo) => (
          <TodoItem key={todo.text} todo={todo} />
        ))}
    </React.Fragment>
  );
}

export { TodoList };