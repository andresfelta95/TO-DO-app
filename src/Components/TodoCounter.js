import React from "react";
import styled from "styled-components";



function TodoCounter() {
  return (
    
    <Tittle >You have completer 2 of 3 TODOs</Tittle>
    
  );
}

//styled-components

const Tittle = styled.h2`
background: steelblue;
border-radius: 3px;
border: 2px solid steelblue;
color: snow;
margin: 0 1em;
padding: 0.25em 1em;
text-align: center;
`;

export {TodoCounter};

