import Card from './Card'

import React from 'react'
import { connect } from 'react-redux'

const Soma = props => {
  const { min, max } = props
  return (
    <Card title="Soma de Números" Blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{min + max}</strong>
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = state => ({
  min: state.numeros.min,
  max: state.numeros.max
})

export default connect(mapStateToProps)(Soma)
