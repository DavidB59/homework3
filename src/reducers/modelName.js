import { MODEL_NAME } from '../actions/modelName'



export default (state = [], action = {}) => {
  switch (action.type) {
    case MODEL_NAME:
    return [
      action.payload
    ]
        default:
      return state
  }

}