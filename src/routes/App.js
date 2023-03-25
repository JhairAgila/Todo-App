import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import { EditTodoPage } from "./edit/editTodoPage";
import { HomePage } from "./home/HomePage";
import {NewTodoPage} from './new/newTodoPage';


function App() {

  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<NewTodoPage />} />
            <Route path="/edit/:id" element={<EditTodoPage />}/> 
            <Route path="*" element={<p> PaGE didn't dound </p>} />
        </Routes>
    </HashRouter>
  );
}

export  {App};
