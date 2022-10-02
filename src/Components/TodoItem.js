import React from "react";
import styled from "styled-components";

function TodoItem(props) {
  // Create a function to complete the todo when the Check item is clicked
  const onComplete = () => {
    console.log("Completed TODO", props.text);
  };
  // Create a function to delete the todo when the Delete item is clicked
  const onDelete = () => {
    console.log("Deleted TODO", props.text);
  };


  return (
    <Li>
        <Check 
          className={`Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={onComplete}
        >
          ✅
        </Check>

        <P className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </P>

        <Delete
          onClick={onDelete}
        >
          ❌
        </Delete>
      </Li>
  );
}

export { TodoItem };

//styled-components
// make a dynamic list of todos with hover and click effects
const Li = styled.li`
  background: snow;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0 5px 50px steelblue;
  border-radius: 10px;
  border: none;
  color: steelblue;
  padding: 24px;
  &:hover {
    background: steelblue;
    color: snow;
  }
`;
// Create a span with a checkmark inside using the class Icon-check and hidind it unless the todo is completed
const Check = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  font-size: 24px;
  font-weight: bold;
  &.Icon-check {
    display: none;
    position: absolute;
    left: 12px;
  }
  &.Icon-check--active {
    display: inline-block;
  }
`;
// Create a span to delete the todo in the top right corner
const Delete = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: -12px;
  right: -12px;
  transform: scale(0.5);
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
// Create a p to show the text of the todo with a TodoItem-p class
const P = styled.p`
  margin: 24px 0 24px 24px;
  width: calc(100% - 120px);
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  line-height: 24px;
  font-weight: 400;
  &.TodoItem-p--complete {
    text-decoration: line-through;
  }
`;
