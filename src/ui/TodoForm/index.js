import React from "react";
import { useNavigate } from "react-router-dom";
import "./TodoForm.css";

function TodoForm(props) {
  const navigate = useNavigate();

  const [newTodoValue, setNewTodoValue] = React.useState(props.todoAdded  || []);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    //TODO
    navigate('/');
  };

  const onSubmit = (event) => {
    event.preventDefault();
    navigate('/');
    props.submitEvent(newTodoValue);
    // addTodo(newTodoValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        // placeholder="Estudiar"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-buttom--add" >
          {props.submitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
