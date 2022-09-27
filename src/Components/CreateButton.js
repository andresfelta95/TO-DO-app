import React from "react";
import styled from "styled-components";

function CreateButton() {
  return (
    <React.Fragment>
      <Button>✖️</Button>
    </React.Fragment>
  );
}


//styled-components

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid steelblue;
color: snow;
margin: 0 1em;
padding: 0.25em 1em;
text-align: center;
width: 100px;
&:hover {
  background: snow;
  color: steelblue;
}
&:active {
  background: snow;
  color: steelblue;
}
`;


//export file
export { CreateButton };