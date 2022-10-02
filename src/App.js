import React from "react";
import {TodoCounter} from "./Components/TodoCounter";
import {TodoSearch} from "./Components/TodoSearch";
import {CreateButton} from "./Components/CreateButton";
import {TodoList} from "./Components/TodoList";
import {TodoItem} from "./Components/TodoItem";
import styled, {createGlobalStyle} from "styled-components";


const todos = [
  {
    text: "LAB 01 CMPE2300",
    completed: false,
  },
  {
    text: "SA02 CMPE2150",
    completed: true,
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
  // Create state to store the todos
  const [todoList, setTodoList] = React.useState(todos);

  // Create state to store the search value
  const [searchValue, setSearchValue] = React.useState("");

  // Variable to store todos completed
  const completedTodos = todoList.filter((todo) => !!todo.completed).length;
  // Variable with the total number of todos
  const totalTodos = todoList.length;

  // function to show only the todos that match the search value
  let searchedTodos = [];

  if (searchValue.length >= 1) {
    searchedTodos = todoList.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = todoList;
  }


  return (
    <React.Fragment>
      <CSSReset />
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <br></br>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <br></br>
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
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
    background: powderblue;
  }
`;

export default App;
