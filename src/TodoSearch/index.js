import React from "react";
import { TodoContext } from "../TodoContext";
import styled from "styled-components";


// Function to search for a todo
function TodoSearch() {

  const { setSearchValue} = React.useContext(TodoContext);  // get the value from the state

  // Function to search a todo in the list, filter the list and show the result
  const onSearchValue = (event) => {
    // console.log(event.target.value);  // show the value in the console
    setSearchValue(event.target.value); // store the value in the state
  };


  return (
    <React.Fragment>
      <Input 
        type="text" 
        placeholder="Search a Todo"
        onChange={onSearchValue}
      />
    </React.Fragment>
  );
}

export { TodoSearch };

//styled-components

const Input = styled.input`
  background: snow;
  border-radius: 24px;
  border: 2px solid snow;;  
  margin: 0 24px;
  width: calc(100% - 500px);
  padding: 16px;
  font-size: 24px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: steelblue;
  box-shadow: 0 5px 50px steelblue;
  &::placeholder {
    color: gray;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
  &:focus {
    outline-color: steelblue;
`;