import * as names from './names'
import {v4} from 'uuid'
import todosApi from '../api/todos'

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

export const fetchTodos = () => dispatch => {
  dispatch({type: names.FETCH_TODOS_START})
  todosApi.list()
    .then(todos => dispatch({type: names.FETCH_TODOS_SUCCESS, payload: todos}))
    .catch(() => dispatch({type: names.FETCH_TODOS_ERROR}))
}

export {names}
