import Card from './Card'

import React from 'react'

export default props => {

  const { max, min } = props

  const aleatorio = parseInt(Math.random() * (max - min)) + min
  return (
    <Card title="Sorteio de Números" Purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  )
}
