import React, { useState } from 'react';

export default function Mega(props) {
    const [numeroInicial, setNumeroInicial] = useState(props.numeroInicial)
    const [numerosSorteados, setNumerosSorteados] = useState([]);
    
    function quandoMudar(e){

        setNumeroInicial(e.target.value)
    }

    function gerarNumerosAleatorios() {
        const megaNumero = new Set();

        while (megaNumero.size < numeroInicial) {
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            megaNumero.add(numeroAleatorio);
        }

        const numerosOrdenados = Array.from(megaNumero).sort((a, b) => a - b);
        setNumerosSorteados(numerosOrdenados);
    }

    return (
        <div>
            <div>
                <label htmlFor="megasenaNumeroInput">Número para gerar da Megasena:</label>
                <input id="megasenaNumeroInput" type="number" value={numeroInicial} onChange={quandoMudar} />
            </div>
            
            <div>
                <button onClick={gerarNumerosAleatorios}>Gerar</button>
            </div>
            <label htmlFor="">Números sorteados: {numerosSorteados.join(', ')}</label>
        </div>
    );
}
