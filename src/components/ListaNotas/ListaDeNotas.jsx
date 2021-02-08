import React, { Component } from 'react';
import Notas from '../CardNotas/CardNotas'
import './estilo.css'

export default class ListaDeNotas extends Component{
  
    render(){
        return (
            <ul>
                {this.props.notas
                .map((nota,index)=>
                    <li key={index} className="li-nota">                        
                        <Notas nota={nota}/>
                    </li>
                )}
                
                
            </ul>
        )
    }
}


