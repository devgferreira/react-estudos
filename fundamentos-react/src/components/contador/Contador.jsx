import React from "react"
import './Contador.css'

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) =>{
        this.setState({
            passo: +e.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                Contador
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }

}