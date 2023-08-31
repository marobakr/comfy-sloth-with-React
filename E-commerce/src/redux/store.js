// this store will be carry reducer and inital state
import { createStore } from 'redux'
import reducer from './reducer'
// -- you should put in parances (reducer)
// -- the reducer it was a function and responsible to make change at the state with depend on an action
// -- the reducer accept tow pramter 1/ => action pram 2/ => state pram
// -- store === redux
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const redux = createStore(reducer, enhancer())
export default redux
