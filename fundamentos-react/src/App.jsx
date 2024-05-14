import React from "react";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./components/layout/Card";

export default function App(props) {
    return (
        <div id='app'>
            <h1>Fundamentos React</h1>
            <Card titulo="Exemplo"></Card>
            <Primeiro></Primeiro>
            <ComParametro titulo="Titulo Principal" subtitulo="Titulo Secundario"></ComParametro>
            <Fragmento></Fragmento>
            <NumeroAleatorio max={50} min={10}></NumeroAleatorio>
        </div>
    );
}