import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props){
    return(
        <div>
            <FamiliaMembro nome="Gabriel" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Isabel" {...props}></FamiliaMembro>
            <FamiliaMembro nome="Maria" sobrenome="Nina"></FamiliaMembro>
        </div>
    );
}