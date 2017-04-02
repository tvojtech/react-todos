import {names} from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case names.ADD_TODO:
      return [...state, action.payload]
    case names.TOGGLE_TODO:
      const idx = state.findIndex(item => item.id === action.payload)
      return [...state.slice(0, idx), {...state[idx], finished: !state[idx].finished}, ...state.slice(idx + 1)]
    default:
      return state
  }
}

const getTodos = state => state

export const selectors = {
  getTodos
}
