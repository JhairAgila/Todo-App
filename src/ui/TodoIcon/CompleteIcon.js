import React from "react";
import {TodoIcon} from './index';

function CompleteIcon({completed, onCompleted}) {
    return(
        <TodoIcon
            type='check'
            color={completed ? 'red' : 'green'}
            onClick = {onCompleted}
        />
    );
}

export {CompleteIcon}