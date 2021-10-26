import Card from './Card'
import '../Intervalo.css'

import React from 'react'

export default props => {

  const { max, min } = props

  return (
    <Card title="Intervalo de Números" Red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={e => props.minChange(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={e => props.maxChange(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  )
}
