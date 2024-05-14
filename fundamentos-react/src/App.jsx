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
            <div className="Cards">
                <Card titulo="Primeiro #1">
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="Com Parâmetro #2">
                    <ComParametro titulo="Titulo Principal" subtitulo="Titulo Secundario"></ComParametro>
                </Card>

                <Card titulo="Fragmento #3">
                    <Fragmento></Fragmento>
                </Card>
                
                <Card titulo="Desafio Aleatório #4">
                    <NumeroAleatorio max={50} min={10}></NumeroAleatorio>
                </Card>
            </div>


        </div>
    );
}