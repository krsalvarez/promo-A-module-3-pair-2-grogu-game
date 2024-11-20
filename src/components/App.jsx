/*Inicializar el Estado: Define el estado inicial del juego, incluyendo la posición inicial de Grogu, el conjunto de mercancías, y el resultado inicial del dado.

Lanzar el Dado: Implementa una función para simular el lanzamiento del dado. Esta función generará un número aleatorio entre 1 y 4, y actualizará el estado del resultado del dado.

Mover a Grogu: Basándote en el resultado del dado, actualiza la posición de Grogu en el tablero. Si Grogu alcanza el final del tablero (el armario), el juego termina y el jugador pierde.

Descargar Mercancías: Cada vez que se lance el dado y no resulte en que Grogu avance hacia el armario, el jugador tiene la oportunidad de "descargar" una mercancía. Actualiza el estado de las mercancías restantes.

Verificar el Fin del Juego: Después de cada turno, verifica si todas las mercancías han sido descargadas. Si es así, el jugador gana. Si Grogu llega al armario antes de que se descarguen todas las mercancías, el jugador pierde.

Reiniciar el Juego: Proporciona una manera de reiniciar el juego a su estado inicial.

Interfaz de Usuario: Asegúrate de que la interfaz de usuario refleje el estado actual del juego, mostrando la posición de Grogu, las mercancías restantes, y el resultado del dado. */


import "../scss/App.scss";
import groguImage from "../images/grogu.webp";
import { useState } from "react";
import Board from "./Board";
import Dice from "./Dice";


function App() {
  
const [randomNumber, setRandomNumber]= useState("");
const rollDice = () =>{
  const randomNumber = Math.floor(Math.random() *4)+1;
  setRandomNumber(randomNumber);
  console.log(randomNumber);
}
const [positionGrogu, setpositionGrogu] = useState(0)
const handleClick =(event) =>{


}

  return (
    
      <div className="page" >
        
        <header>
          <h1>¡hello!</h1>
        </header>
        <main className="page">
        <Board/>

          <section>
            <Dice onClickDice={rollDice}/>
            <div className="game-status">En curso</div>
          </section>

          <section className="goods-container">
            <div className="goods-item">🍪</div>
            <div className="goods-item">🍪</div>
            <div className="goods-item">🍪</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">🥚</div>
            <div className="goods-item">🥚</div>
            <div className="goods-item">🥚</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">🐸</div>
            <div className="goods-item">🐸</div>
            <div className="goods-item">🐸</div>
          </section>
          <section>
            <button className="restart-button">Reiniciar Juego</button>
          </section>
        </main>
      </div>

    
  )
}

export default App
//Pasos 
/* Cuando la usuaria haga click en lanzar dado
 - generar número aleatorio entre 1 y 4
 - si es 4 --> grogu avanza 1 casilla 
      y si  es 1 -->quitar una galleta
      si es 2 --> quitar una huevo
      si es 3 --> quitar una rana
- Saber en qué posición se encuentra el grogu o mercancias 
   - Mostrar en pantalla el estado del juego
      -si grogu avanza --> mostrar mesanje  "Grogu ha avanzado"
      -si se quita una galleta --> mostrar mensaje "Se ha quitado una galleta"
      -si se quita un huevo --> mostrar mensaje "Se ha quitado un huevo"
      -si se quita una rana --> mostrar mensaje "Se ha quitado una rana"

      */