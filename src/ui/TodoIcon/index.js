import React from "react";
import './TodoIcon.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';

const iconTypes = {
    "check": color => (
        <FontAwesomeIcon icon = {faCircleCheck} className="Icon-svg Icon-svg--check" fill= {color} />
    ), 
    "delete": color => ( 
        <FontAwesomeIcon icon={faTrash} className="Icon-svg Icon-svg--delete" fill={color} />
    ),
    "edit" : color => ( 
        <FontAwesomeIcon icon={faPenToSquare} className="Icon-svg Icon-svg--edit" fill={color}/>
    ),
};


function TodoIcon({type, color='green', onClick}){
    
    return (
        <span className={`Icon-container Icon-container--${type}`} 
        onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon};