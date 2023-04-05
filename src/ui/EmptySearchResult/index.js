import React from "react";
import './emptySearchResult.css'

function EmptySearchResult (props) {
    return(
        <p className="emptyResult"> No hay Resultados de la busqueda:  {props.seachValue} </p>
        
    );
}

export { EmptySearchResult}