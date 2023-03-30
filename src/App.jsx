import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import  NavBar  from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting={"Productos"}/>
        </div>
    );
}

export default App;
