import React from "react";
import styled from "styled-components";

function CreateButton() {
  // Function to create a new todo
  const onClickButton = (text) => {
    console.log("Create a new todo with", text);
  };

  return (
    <React.Fragment>
      <Button
        onClick={() => onClickButton("New TODO")}
      >
        ➕
      </Button>
    </React.Fragment>
  );
}


//styled-components

const Button = styled.button`
background: transparent;
box-shadow: 0 5px 25px steelblue;
border: none;
border-radius: 50%;
cursor: pointer;
font-size: 50px;
position: fixed;
bottom: 24px;
right: 24px;
font-weight: bold;
color: snow;
display: flex;
justify-content: center;
align-items: center;
height: 64px;
width: 64px;
transform: rotate(0);
transition: 0.3s ease;
&:hover {
  transform: rotate(224deg);
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