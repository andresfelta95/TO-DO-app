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
box-shadow: 0 5px 25px steelblue;
border-radius: 10px;
border: none;
color: snow;
margin: 0;
padding: 48px;
text-align: center;
`;

export {TodoCounter};

