import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  numeros: (state, action) => ({ min: 7, max: 25 }),
  nomes: (state, action) => ['Ana', 'Bia', 'Carlos']
})

const storeconfig = () => createStore(reducers)

export default storeconfig
