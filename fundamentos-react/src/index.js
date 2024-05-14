import { createRoot } from 'react-dom/client';
import React from "react";
import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <div id='app'>
        <Primeiro></Primeiro>
        <ComParametro titulo="Titulo Principal" subtitulo="Titulo Secundario"></ComParametro>
        <Fragmento></Fragmento>
    </div>
)