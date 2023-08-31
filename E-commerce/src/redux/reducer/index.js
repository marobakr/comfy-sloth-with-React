import { combineReducers } from 'redux'
import { conterReducer } from './counterReducer'
export default combineReducers({
  counter: conterReducer,
})
