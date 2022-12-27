import React from "react";
import { TodoContext } from "../TodoContext";
import styled from "styled-components";



function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    
    <Tittle >You have completer {completedTodos} of {totalTodos} todos</Tittle>
    
  );
}

//styled-components

const Tittle = styled.h2`
  font-size: 40px;
  color: steelblue;
  margin: 0;
  padding: 48px;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

export {TodoCounter};

