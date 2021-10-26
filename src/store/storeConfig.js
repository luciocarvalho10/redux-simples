import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({
  numeros: (state, action) => {
    console.log(state, ' ', action)
    return { min: 0 , max: 10}
  },
  nomes: (state, action) => {
    console.log(state, ' ', action)
    return ['Ana', 'Bia', 'Carlos']
  }
})

const storeconfig = () => createStore(reducers)

export default storeconfig
