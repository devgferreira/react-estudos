import React from "react";

export default function NumeroAleatorio(props) {
    let max = props.max
    let min = props.min
    let numeroAleatorio = Math.random() * (max - min) + min;
    let numeroArrendondado = Math.round(numeroAleatorio)
    return (
        <div>
            <h2>Numero Aleatorio</h2>
            <p>Entre {props.min} e {props.max} o número escolhido foi: {numeroArrendondado}</p>
        </div>
    );
}