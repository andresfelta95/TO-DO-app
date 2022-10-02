import React from "react";
import styled from "styled-components";

function TodoSearch() {
  // Function to search a todo in the list, filter the list and show the result
  const onSearchValue = (event) => {
    console.log("Search value", event.target.value);
  };


  return (
    <React.Fragment>
      <Input 
        type="text" 
        placeholder="Add Todo"
        onChange={onSearchValue}
      />
    </React.Fragment>
  );
}

export { TodoSearch };

//styled-components

const Input = styled.input`
  background: snow;
  border-radius: 2px;
  border: 2px solid snow;;  
  margin: 0 24px;
  width: calc(100% - 62px);
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