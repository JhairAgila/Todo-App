import React from "react";
import {useLocalStorage} from './useLocalStorage';


function useTodos(){

    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizedTodos,
        loading,
        error,
        sincronizedItem,
      } = useLocalStorage("TODOS_V2", []);

 
      const [seachValue, setSeachValue] = React.useState("");

      const completedTodos = todos.filter((todo) => !!todo.completed).length;
      // const [openModalActualizacion, setOpenModalActualizacion] = React.useState(false);
      const totalTodos = todos.length;
      let searchedTodos = [];
      if (!seachValue.length >= 1) {
        searchedTodos = todos;
        // {console.log(`size de ${searchedTodos.length}`)}
      } else {
          searchedTodos = todos.filter((todo) => {
          const todoSeach = todo.text.toLowerCase();
          const seachedTodo = seachValue.toLowerCase();
          return todoSeach.includes(seachedTodo);
        });
      }
    
      const completeTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      };


      const addTodo = (text) => {
        const id = newTodoId(searchedTodos);
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
          id, 
        });
        saveTodos(newTodos);
      };

      const getTodo = (id) => {
        const todoIndex = searchedTodos.findIndex( (todo) => todo.id === id);
        return searchedTodos[todoIndex];
      }
      const editTodo = (id, newText) => {
        const todoIndex = todos.findIndex( (todo) => todo.id === id );
        const newTodos = [...searchedTodos]
        newTodos[todoIndex].text = newText;
        // newTodos.splice(todoIndex, 1, newTodos[todoIndex].text = newText);
        saveTodos(newTodos);
      }

      const deleteTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      const state = {
        error,
        loading,
        totalTodos,
        completedTodos,
        seachValue,
        searchedTodos,
        sincronizedItem
       }

       const stateUpdaters = {
        setSeachValue,
        completeTodo,
        addTodo,
        editTodo,
        getTodo,
        deleteTodo,
        sincronizedTodos,
       }

       return { state, stateUpdaters }; 
}

function newTodoId(todoBunch) {
  if(!todoBunch.length) {
    return 1;
  }
  return todoBunch.length+ 1;
} 

export { useTodos };