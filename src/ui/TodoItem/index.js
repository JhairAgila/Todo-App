import React from "react";
import { EditTodoPage } from "../../routes/edit/editTodoPage";
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { EditIcon } from "../TodoIcon/EditIcon";
import './TodoItem.css';

function TodoItem (props) {

    return (
    <li className={`TodoItem ${props.completed && 'TodoItem--complete'}`}>
      <CompleteIcon 
        completed={props.completed}
        onCompleted={props.onComplete}
      />
      <p className={`TodoItem-p  ${props.completed && 'TodoItem-p--complete'}`} >
          {props.text} 
      </p>
      <EditIcon  
        onEdit = {props.onEdit}
        />
      <DeleteIcon 
      onDelete={props.onDelete}
      />
    </li>
    );
}

export {TodoItem};