import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  numeros: (state, action) => {
    switch(action.type) {
      case 'MIN_ALTERADO':
        return {
          ...state,
          min: action.payload
        }
      case 'MAX_ALTERADO':
        return {
          ...state,
          max: action.payload
        }
      default:
        return {
          min: 7,
          max: 25
        }
    }
  },
  nomes: (state, action) => ['Ana', 'Bia', 'Carlos']
})

const storeconfig = () => createStore(reducers)

export default storeconfig
