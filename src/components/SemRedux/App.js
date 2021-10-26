import React, { useState } from 'react'
import '../../App.css'
import Intervalo from './Intervalo'
import Media from './Media'
import Soma from './Soma'
import Sorteio from './Sorteio'

function App() {
  const [min, setMin] = useState(100)
  const [max, setMax] = useState(1000)

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo
          min={min}
          max={max}
          minChange={setMin}
          maxChange={setMax}
        ></Intervalo>
      </div>
      <div className="linha">
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>
  )
}

export default App
