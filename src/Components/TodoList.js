import React from "react";
import styled from "styled-components";

function TodoList(porps) {
  return (
    <List>
      <ul>
        {porps.children}
      </ul>
    </List>
  );
}

export { TodoList };

// styled-components
// make a dynamic list of todos with hover and click effects
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: steelblue;
    border-radius: 10px;
    border: 2px solid snow;
    color: snow;
    margin: 0 1em;
    padding: 0.25em 1em;
    text-align: center;
    &:hover {
      background: snow;
      color: steelblue;
    }
    &:active {
      background: steelblue;
      color: snow;
    }

    &:nth-child(odd) {
      background: steelblue;
      color: snow;
    }
  }
`;
  