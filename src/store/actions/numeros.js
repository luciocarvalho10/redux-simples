import { MAX_ALTERADO, MIN_ALTERADO } from "./actionTypes"


export const minAction = valor => ({
  type: MIN_ALTERADO,
  payload: valor
})

export const maxAction = valor => ({
  type: MAX_ALTERADO,
  payload: valor
})