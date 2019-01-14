
import { combineReducers } from 'redux'
import addModel from './addModel'
import modelName from '../reducers/modelName'


export default combineReducers({
  addModel, modelName
})