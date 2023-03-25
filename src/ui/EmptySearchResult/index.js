import React from "react";

function EmptySearchResult (props) {
    return(
        <p>No hay Resultados de la busqueda {props.seachValue} </p>
        
    );
}

export { EmptySearchResult}