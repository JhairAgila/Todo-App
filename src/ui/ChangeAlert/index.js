import React from "react";
import { useStorageListener } from "./useStorageListener";
import './changeAlert.css'
import { Modal } from "../Modal";

function ChangeAlert({sincronize}) {
    const { show, toggleShow} = useStorageListener(sincronize);

  if (show) {
    return ( 
    <Modal>
      <form>
          <label> Existen cambios</label>,
          <div className="TodoForm-buttonContainer">
          
            <button type = 'submit' className="TodoForm-buton TodoForm-buttom--add"
            onClick={toggleShow}>
              Recargar
            </button>
          
          </div>
       </form>
    </Modal>
    );
  } else {
    return null;
  }
}


export { ChangeAlert };
