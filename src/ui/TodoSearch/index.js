import React from "react";
import './TodoSearch.css'
function TodoSearch({seachValue, setSeachValue, loading} ) {

    const onSearchValueChange = (event) =>{
        setSeachValue(event.target.value);
    }
    return[ 
        <input className="TodoSearch"
         placeholder='Escribe la tarea a completar'
         value={seachValue}
         onChange={onSearchValueChange}
         disabled = {loading}></input>,
    ];
}
export {TodoSearch};