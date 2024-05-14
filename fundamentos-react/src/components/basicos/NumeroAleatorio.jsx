import React from "react";

export default function NumeroAleatorio(props){
    max = props.max
    min = props.min
    numeroAleatorio = Math.random * (max - min) + min;
    return(
        <div>
            <h2>Numero Aleatorio</h2>
            <p>Entre {props.min} e {props.max} o número escolhido foi: {numeroAleatorio}</p>
        </div>
    );
}