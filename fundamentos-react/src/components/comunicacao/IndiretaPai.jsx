import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai(props) {
    let nome = '?'
    let idade = 0
    let nerd =  false
    function fornecerInformacoes(Nome, Idade, Nerd) {
        nome = Nome;
        idade = Idade;
        nerd = Nerd
    }
    return (
        <div>
            <div>
                <span>{nome}</span>
                <span>{idade}</span>
                <span>{nerd ? "Verdadeiro" : "Falso"}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    );
}