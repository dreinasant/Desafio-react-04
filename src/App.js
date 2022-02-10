import React, { Component } from "react";
import "./App.css"

class message extends Component{

Mensagem = () => {
  return <h1>Estou na tentativa de aprender Arrow function!! hehehehe</h1>
}

 mult = ( x, y) =>{
  return (x * y)
}
  render(){
    return(
    <div>
      {this.Mensagem()}
      <div className="intro">
      <h2>{this.mult(20, 2)}</h2>
      </div>
    </div>
    )
  }
}

export default message