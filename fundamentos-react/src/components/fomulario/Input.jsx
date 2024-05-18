import { useState } from "react";
import "./Input.css"

export default function Input(props){
    const [valor, setValor] = useState("Inicial");

    function quandoMudar(e){

        setValor(e.target.value)
    }

    return(
        <div className="Input">
            <div>
                <input type="text" value={valor} onChange={quandoMudar} />
                <input type="text" value={valor} readOnly />
                <input type="text" value={undefined} />
            </div>
        </div>
    );
}