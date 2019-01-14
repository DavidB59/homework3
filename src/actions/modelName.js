export const MODEL_NAME = 'MODEL_NAME'

export function modelName(model) {
  return {
    type: MODEL_NAME,
    payload:  model
  }
}