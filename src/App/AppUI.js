import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {TodoForm} from "../TodoForm";
import {CreateButton} from "../CreateButton";
import {Modal} from "../Modal";
import {createGlobalStyle} from "styled-components";

function AppUI() {
  const {
    error,
    loading,
    searchedItems:
    searchedTodos,
    toggleTodoState,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <CSSReset />
      <TodoCounter />
      <br></br>
      <TodoSearch />
      <br></br>      
      <TodoList>
        {error && <p>Error!</p>}
        {loading && <p>Loading ...</p>}
        {(!loading && !searchedTodos.length) && <h1>Create your first todo</h1>}

        {searchedTodos.map((todo) => (
          <TodoItem 
            key={todo.text}                               // key is required
            text={todo.text}                              // text is required
            completed={todo.completed}                    // completed is required
            onComplete={() => toggleTodoState(todo.text)}   // onComplete is required
            onDelete={() => deleteTodo (todo.text)}       // onDelete is required
          />
        ))}
      </TodoList>
       
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <br></br>
      <CreateButton 
        setOpenModal={setOpenModal}
      />      
    </React.Fragment>
  );
}

// CSSReset
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
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: steelblue;
  }
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: steelblue;
  }
`;

export { AppUI};