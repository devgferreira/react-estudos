import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css"

export default function TabelaProdutos(props) {

    const row = produtos.map((produto) => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
        );
    })

    return (
        <div >
            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        </div>
    );
}