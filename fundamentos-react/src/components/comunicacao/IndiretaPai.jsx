import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai(props) {
    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)
    function fornecerInformacoes(Nome, Idade, Nerd) {
        setNome(Nome)
        setIdade(Idade)
        setNerd(Nerd)
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? "Verdadeiro" : "Falso"}!</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    );
}