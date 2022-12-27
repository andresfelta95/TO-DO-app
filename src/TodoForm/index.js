import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState(""); // Create a state to store the value of the textarea

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }; // Function to store the value of the textarea in the state

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent the default behavior of the form
    //  Add the new todo if the value of the textarea is not empty
    if (newTodoValue.length > 0){
        addTodo (newTodoValue);
        setOpenModal(false);
    }
    else{
        alert("You must write a TODO");
    }
  }; // Function to add a new todo

  const onCancel = () => {
    setNewTodoValue("");
    setOpenModal(false);
  }; // Function to clear the textarea

  return (
    <form onSubmit={onSubmit}>
      <label>Write a new TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Write your TODO here"
      />
      <div className="TodoForm-buttonContainer">
        <button 
            type="button"
            className="TodoForm-button TodoForm-button-cancel"
            onClick={onCancel}
        >
            Cancel
        </button>
        <button 
            type="submit"
            className="TodoForm-button TodoForm-button-add"
        >
        Add TODO
        </button>
      </div>
    </form>
  ); // Return the form
}

export { TodoForm }; // Export the component
