import Content from '../components/layout/content/Content';
import Menu from '../components/layout/menu/Menu';
import './App.css'
import React from "react";
import { BrowserRouter } from 'react-router-dom';

const App = props => {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu></Menu>
                <Content></Content>
            </BrowserRouter>
        </div>
    )
}

export default App

