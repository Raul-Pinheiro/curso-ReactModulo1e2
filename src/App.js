import React, { Component } from 'react';
import ListaDeNotas from './components/ListaNotas'
import Formulario from './components/Formulario'

class App extends Component{

  constructor(){
    super()
    this.state={
      notas:[]
    }
  }
  
  criarCard(titulo,nota){        
    const novoArrayNotas = [...this.state.notas,{titulo,nota}]
    this.setState({
      notas:novoArrayNotas
    });
  }

  render(){

    return (
        <div>
          <Formulario criarCard={this.criarCard.bind(this)} />
          <ListaDeNotas notas={this.state.notas} />
        </div>
    );
  }
}

export default App;
