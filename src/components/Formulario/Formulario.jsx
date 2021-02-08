import React, { Component } from 'react';
import './estilo.css';
export default class Formulario extends Component{

    constructor(props){
        super(props)
        this.titulo = "";
        this.texto= "";
        this.nota= "";
    }

    _handleMudancaTitulo(event){
        event.stopPropagation();
        return this.titulo = event.target.value;
        
    }
    _handleMudancaTexto(event){
        event.stopPropagation();
        return this.texto = event.target.value
        
    }

    _criarNota(event){
        event.preventDefault();
        event.stopPropagation();
        return this.props.criarCard( this.titulo , this.texto)
    }
    render(){
        return (
            <div>
                <h1 className="form-titulo">Crie uma nota</h1>
                <form 

                    onSubmit={
                        this._criarNota.bind(this)
                        
                    }
                >                    
                    <input
                        type="text"
                        data-titulo
                        className="form-input-titulo" 
                        placeholder="Escreva um titulo"
                        onChange={this._handleMudancaTitulo.bind(this)}
                    />
                    <textarea 
                        className="form-input-texto" 
                        placeholder="Escreva sua nota..."
                        rows="15"
                        onChange={this._handleMudancaTexto.bind(this)}
                    >

                    </textarea>
                    <input type="submit" value="Criar Nota"className="form-input-btn"/>
                </form>
            </div>
        )
    }
}