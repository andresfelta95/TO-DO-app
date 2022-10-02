import React from "react";
import styled from "styled-components";

function TodoList(porps) {
  return (
    <List>      
        {porps.children}      
    </List>
  );
}

export { TodoList };

// styled-components
// make a dynamic list of todos with hover and click effects
const List = styled.ul`
margin: 0;
padding: 0 0 56px 0;
list-style: none;  
`;
  