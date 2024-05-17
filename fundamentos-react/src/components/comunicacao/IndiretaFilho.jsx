import React from "react";

export default function IndiretaFilho(props) {
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function (e) {
                    props.quandoClicar("Gabriel", 53, true)
                }
            }>Fornecer Inforamções</button>
        </div>
    );
}