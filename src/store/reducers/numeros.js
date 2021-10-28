import { MAX_ALTERADO, MIN_ALTERADO } from "../actions/actionTypes"

const initialState = {
  min: 1,
  max: 10
}

export const numeros = (state = initialState, action) => {
  switch (action.type) {
    case MIN_ALTERADO :
      return {
        ...state,
        min: action.payload
      }
    case MAX_ALTERADO :
      return {
        ...state,
        max: action.payload
      }
    default:
      return state
  }
}