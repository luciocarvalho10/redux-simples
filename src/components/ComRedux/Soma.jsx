import Card from './Card'

import React from 'react'

export default props => {

  const { max, min } = props
  return (
    <Card title="Soma de Números" Blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{ 10 }</strong>
        </span>
      </div>
    </Card>
  )
}
