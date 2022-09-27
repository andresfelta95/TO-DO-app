import React from "react";
import {TodoCounter} from "./Components/TodoCounter";
import {TodoSearch} from "./Components/TodoSearch";
import {CreateButton} from "./Components/CreateButton";
import {TodoList} from "./Components/TodoList";
import {TodoItem} from "./Components/TodoItem";
import styled, {createGlobalStyle} from "styled-components";
// import './App.css';

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

function App() {
  return (
    <React.Fragment>
      <CSSReset />
      <TodoCounter />
      <br></br>
      <TodoSearch />
      <br></br>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <br></br>
      <CreateButton />
      
    </React.Fragment>
  );
}

//syled-components

const CSSReset = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-align: center;
    background: palevioletred;
  }
`;

export default App;
