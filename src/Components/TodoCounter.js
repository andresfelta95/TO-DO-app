import React from "react";
import styled from "styled-components";



function TodoCounter({total, completed}) {
  return (
    
    <Tittle >You have completer {completed} of {total} TODOs</Tittle>
    
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

