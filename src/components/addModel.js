import { ADD_MODEL } from '../actions/addModel'



export default (state =[], action = {}) => {
  switch (action.type) {
    case ADD_MODEL:
      return state.value
    default:
      return state
  }

}