import React from "react";
import './CreateTodoButtom.css';

function CreateTodoButtom (props) {

    // const onClickButtom = () => {
    //     props.onClick;
    // };
    return (
        <button className="CreateTodoBottom"
        onClick={props.onClick}>
            +
        </button>
    )
}

export {CreateTodoButtom};