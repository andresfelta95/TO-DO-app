import React from "react";


function useLocalStorage(itemName, initialValue) {
  
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    // Create state to store the todos
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          // Get the todos from the local storage
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;  // variable to store the todos
  
          if (!localStorageItem) {
            //  Set an empty array if there are no todos
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }
          else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);  // Set the todos in the state
          setLoading(false);  // Set the loading to false        
        }
        catch (error) {
          setError(error);
        }
        
      }, 1000);
    });
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }
      catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  
  }

export { useLocalStorage };