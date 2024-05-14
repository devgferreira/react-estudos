import { createRoot } from 'react-dom/client';
import React from "react";
import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <div>
        <strong>
            <Primeiro></Primeiro>
            <ComParametro></ComParametro>
        </strong>
    </div>
)