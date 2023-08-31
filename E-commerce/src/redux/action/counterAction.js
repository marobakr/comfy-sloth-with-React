import { DECREMENT, INCREMENT, DEFULTIMGE } from './types'
// action creator.. this function to return action
//  -- so when i wanna to import the actoin i will writh action every tiem but here i will put it in file and when i wanna to use action ... i just make import this file

export const incrementAction = () => {
  return {
    type: INCREMENT,
  }
}
export const decrementAction = (vl) => {
  return {
    type: DECREMENT,
    value: vl,
  }
}
