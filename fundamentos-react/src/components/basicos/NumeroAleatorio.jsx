import React from "react";

export default function NumeroAleatorio(props) {
    let numeroAleatorio = parseInt(Math.random() * (props.max - props.min) + props.min);
    return (
        <div>
            <h2>Numero Aleatorio</h2>
            <p>Entre {props.min} e {props.max} o número escolhido foi: {numeroAleatorio}</p>
        </div>
    );
}