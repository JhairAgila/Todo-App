import React, { useEffect } from "react";
import './TodoSearch.css';

function TodoSearch( {seachValue, setSeachValue, loading, searchParams, setSearchParams} ) {

    const onSearchValueChange = (event) =>{
        setSeachValue(event.target.value);
        
        let params = {
            search: event.target.value,
        }
        setSearchParams(params)
    }

    useEffect( () => {
        const search = searchParams.get("search") ?? "";
        setSeachValue(search);
    }, [searchParams, setSeachValue])

    return(
        <input className="TodoSearch"
         placeholder='Tarea...'
         value={seachValue}
         onChange={onSearchValueChange}
         disabled = {loading} />

    );
}
export {TodoSearch};