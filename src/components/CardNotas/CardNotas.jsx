import React, { Component } from 'react';
import './estilo.css'

export default class Notas extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <section className="card-nota">
                <h3>Título: {this.props.nota.titulo}</h3>
                <p>{this.props.nota.nota}</p>
            </section>
        )
    }
}