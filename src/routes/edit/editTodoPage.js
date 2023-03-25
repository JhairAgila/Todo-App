import React from "react";
import { useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation } from "react-router-dom";

function EditTodoPage(props) {
  const {state, stateUpdaters } = useTodos();
  const params = useParams();
  const id = Number(params.id);
  const location = useLocation();

  const { editTodo, getTodo } = stateUpdaters;
  const {loading} = state;

  let todoText;

  if(location.state?.text){
    todoText = location.state.text;
  }else if(loading){
    return <p>Cargando...</p>
  }else{
    const todo = getTodo(id);
    todoText = todo.text;
  }

    return (
      <TodoForm
        label="Edita tu TODO"
        submitText="Editar"
        submitEvent={(newTodoValue) => editTodo(id, newTodoValue)}
        accionEjecutar={props.editTodo}
        todoAdded={todoText}
      />
    );
}
export { EditTodoPage };
