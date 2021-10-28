import Card from './Card'

import React from 'react'
import { connect } from 'react-redux'

const Media = props => {
  const { min, max } = props

  return (
    <Card title="Média de Números" Green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(min + max) / 2}</strong>
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = state => ({
  min: state.numeros.min,
  max: state.numeros.max
})

export default connect(mapStateToProps)(Media)
