import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    } = useLocalStorage("TODOS_V1", []);
    // Create state to store the search value
    const [searchValue, setSearchValue] = React.useState("");
    // Create state to store the open modal value
    const [openModal, setOpenModal] = React.useState(false);
    // Variable to store todos completed
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    // Variable with the total number of todos
    const totalTodos = todos.length;

    // function to show only the todos that match the search value
    let searchedItems = [];

    if (searchValue.length >= 1) {
    searchedItems = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });
    } else {
    searchedItems = todos;
    }
    
    
    // Function to  toggle a todo between completed and uncompleted
    const toggleTodoState = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text); // find the index of the todo
    const newItems = [...todos]; // create a copy of the todos
    newItems[todoIndex].completed = !newItems[todoIndex].completed; // change the value of the todo
    //  Save the todos in the local storage using the function
    saveTodos(newItems);    
    };
    
    //  Function to Delete a todo
    const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text); // find the index of the todo
    const newItems = [...todos]; // create a copy of the todos
    newItems.splice(todoIndex, 1); // delete the todo
    //  Save the todos in the local storage using the function
    saveTodos(newItems);
    };

    const addTodo = (text) => {
    const newTodos = [...todos];    //  Create a copy of the todos
    newTodos.push({    //  Add a new todo
        completed: false,
        text,
    });
    //  Save the todos in the local storage using the function
    saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedItems,
            toggleTodoState,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}; // export the context and the provider
