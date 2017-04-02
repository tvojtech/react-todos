import * as names from './names'
import {v4} from 'uuid'

export const addTodo = text => ({
  type: names.ADD_TODO,
  payload: {
    id: v4(),
    text
  }
})

export const toggleTodo = id => ({
  type: names.TOGGLE_TODO,
  payload: id
})

export const selectFilter = filter => ({
  type: names.SELECT_FILTER,
  payload: filter
})

export {names}
