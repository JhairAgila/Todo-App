// import logo from './logo.svg';
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../index.css";
import { useTodos } from "../useTodos";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { CreateTodoButtom } from "../../ui/CreateTodoBottom";
import { TodoItem } from "../../ui/TodoItem";
import { TodoParteIzquierda } from "../../ui/TodoParteIzquierda";
import { TodoError } from "../../ui/TodoError";
import { TodoLoading } from "../../ui/TodoLoading";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { TodoHeader } from "../../ui/TodoHeader";
import { TodoCounter } from "../../ui/TodoCounter";
import { EmptySearchResult } from "../../ui/EmptySearchResult";
import { ChangeAlert } from "../../ui/ChangeAlert";
import { TodoBackground } from "../TodoBackground";

function HomePage() {
  const navigate = useNavigate();
  const {state, stateUpdaters} = useTodos();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const {
    error,
    loading,
    totalTodos,
    completedTodos,
    seachValue,
    searchedTodos,
    // openModal,
    sincronizedItem
  } = state;
  
  const {
    setSeachValue,
    completeTodo,
    editTodo,
    deleteTodo,
    sincronizedTodos,
  } = stateUpdaters


  return (
    <React.Fragment>
      <TodoBackground />
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      </TodoHeader>

      <main>
        <aside id="main--Izquierdo">
          <TodoParteIzquierda />
        </aside>
        <aside id="main--Derecho">
          <TodoSearch
            seachValue={seachValue}
            setSeachValue={setSeachValue}
            loading={loading}
            searchParams = {searchParams}
            setSearchParams = {setSearchParams}
          />

          <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            seachValue={seachValue}
            onError={() => <TodoError />}
            onLoading={() => <TodoLoading />}
            onEmptyTodos={() => <EmptyTodos />}
            sincronizedItem={sincronizedItem}
            onEmptySearchResult={(seachValue) => (
              <EmptySearchResult seachValue={seachValue} />
            )}
            render={(todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed = {todo.completed}
                editTodo = {() => editTodo(todo.id, todo.text)}
                onComplete={() => completeTodo(todo.id)}
                onEdit={() => {
                  navigate(`/edit/${todo.id}`,
                  {replace: true,
                  state:{  text : todo.text}})
                }}
                onDelete={() => deleteTodo(todo.id)}
              />
            )}
          ></TodoList>

        </aside>

        <CreateTodoButtom
          onClick = { () => navigate('/new', ) }
          // setOpenModal={setOpenModal}
          // openModal={openModal}
        ></CreateTodoButtom>
        <ChangeAlert
          sincronize={sincronizedTodos}
          searchedTodos={searchedTodos}
        ></ChangeAlert>

      </main>

    </React.Fragment>
  );
}

export  {HomePage};
