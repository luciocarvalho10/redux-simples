import Card from './Card'

import React from 'react'
import { connect } from 'react-redux'

const Sorteio = props => {
  const { min, max } = props
  const resultado = parseInt(Math.random() * (max - min)) + min

  return (
    <Card title="Sorteio de Números" Purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{resultado}</strong>
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = state => ({
  min: state.numeros.min,
  max: state.numeros.max
})

export default connect(mapStateToProps)(Sorteio)
