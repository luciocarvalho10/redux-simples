import React from 'react'
import '../../App.css'
import Intervalo from './Intervalo'
import Media from './Media'
import Soma from './Soma'
import Sorteio from './Sorteio'

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  )
}

export default App
