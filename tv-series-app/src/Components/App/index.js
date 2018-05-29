import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';
import 'whatwg-fetch'
import Series from '../../containers/series';



/*Clase APP la cual es un componente. Tiene un estado que es un arreglo de series
y dos funciones
--componentDidMount()
--render()
*/
class App extends Component {
  




/*La funcion render, es la que "renderea". En este caso renderea unos divs
y el tamaño del arreglo de series, al cual accesamos con el estado del arreglo
*/
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv series list</h1>
        </header>
        <Intro message = "Here you can find all of your most loved series"/>
        <Series />
      </div>
    );
  }
}

export default App;
