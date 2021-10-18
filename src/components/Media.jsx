import Card from './Card'

import React from 'react'

export default props => {

  const {max, min} = props

  return (
    <Card title="Média de Números" Green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  )
}
