import React from "react";
import './TodoList.css'

function TodoList(props){
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            
            {( !props.loading && props.searchedTodos.length === 0 && props.seachValue.length === 0) && props.onEmptyTodos()}
            {( !props.loading && props.searchedTodos.length === 0 && props.seachValue.length >= 1 ) && props.onEmptySearchResult(props.seachValue)}
            {!!props.sincronizedItem  && !props.error && 
             props.searchedTodos.map(props.render || props.children)}
           
        </section>
    );
}

export {TodoList};