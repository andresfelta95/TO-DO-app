import React from "react";
import {TodoCounter} from "./Components/TodoCounter";
import {TodoSearch} from "./Components/TodoSearch";
import {CreateButton} from "./Components/CreateButton";
import {TodoList} from "./Components/TodoList";
// import './App.css';



function App() {
  return (
    <React.Fragment>

      <TodoCounter />

      <TodoSearch />

      <TodoList />

      <CreateButton />
      
    </React.Fragment>
  );
}

export default App;
