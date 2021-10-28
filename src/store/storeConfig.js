import { createStore, combineReducers } from 'redux'
import { numeros } from './reducers/numeros'

const reducers = combineReducers({
  numeros
})

const storeconfig = () => createStore(reducers)

export default storeconfig
