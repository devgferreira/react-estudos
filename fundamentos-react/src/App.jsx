import React from "react";
import './App.css'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
export default function App(props) {
    return (
        <div className='App'>
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
                <Card titulo="Componente com Filhos #5">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Gabriel" ></FamiliaMembro>
                        <FamiliaMembro nome="Isabel" ></FamiliaMembro>
                        <FamiliaMembro nome="Maria" sobrenome="Nina"></FamiliaMembro>
                    </Familia>
                </Card>
            </div>


        </div>
    );
}