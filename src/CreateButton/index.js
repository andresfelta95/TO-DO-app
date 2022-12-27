import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import React from "react";
import styled from "styled-components";

function CreateButton(props) {
  // Function to create a new todo
  const onClickButton = () => {
    //  Every time we click the button, we will toggle the state of the modal
    props.setOpenModal((prevOpenModal) => !prevOpenModal);
  };

  return (
    <React.Fragment>
      <Button
        onClick={onClickButton}
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
  transform: rotate(270deg);
  background: snow;
  color: steelblue;
}
&:active {
  background: snow;
  color: steelblue;
}
z-index: 1;
`;


//export file
export { CreateButton };