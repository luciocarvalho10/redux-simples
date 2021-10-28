import Card from './Card'
import '../Intervalo.css'

import React from 'react'
import { connect } from 'react-redux'
import { maxAction, minAction } from '../../store/actions/numeros'

const Intervalo = props => {
  const { min, max } = props

  return (
    <Card title="Intervalo de Números" Red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={e => props.propMinAction(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={e => props.propMaxAction(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = state => ({
  min: state.numeros.min,
  max: state.numeros.max
})

const mapDispatchToProps = dispatch => ({
  propMinAction: min => dispatch(minAction(min)),
  propMaxAction: max => dispatch(maxAction(max))
})

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)
