import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';
function Modal({children}){

    // let modal = document.getElementById('ModalBackgroundd')
    // function openModal(){
    //     modal.classList.add('open-ModalBackground');
    // }
    // function closeModal(){
    //     modal.classList.remove('open-ModalBackground');
    // }
    // if(!!props.openModal){
    //     openModal();
    // }else{
    //     closeModal();
    // }

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {/* <img src={icon} alt="MND"/> */}
            {children}
        </div>,
        document.getElementById('modal')
    );
}
export {Modal};
