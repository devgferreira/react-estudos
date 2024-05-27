import Content from '../components/layout/content/Content';
import Menu from '../components/layout/menu/Menu';
import './App.css'
import React from "react";

const App = props => {
    return (
        <div className="App">
            <Menu></Menu>
            <Content></Content>
        </div>
    )
}

export default App

