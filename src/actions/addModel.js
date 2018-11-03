export const ADD_MODEL = 'ADD_MODEL'

export function addModel(selectState) {
  return {
    type: ADD_MODEL,
    payload: {
      selectState
    }
  }
}