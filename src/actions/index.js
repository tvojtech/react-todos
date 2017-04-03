import * as names from './names'
import {v4} from 'uuid'
import todosApi from '../api/todos'

export const addTodo = text => dispatch => {
  const id = v4()
  dispatch({type: names.ADD_TODO_START, payload: {id, text}})
  return todosApi.save({text, id})
    .then(() => dispatch({type: names.ADD_TODO_SUCCESS}))
    .catch(() => dispatch({type: names.ADD_TODO_ERROR, payload: id}))
}

/*export const deleteTodo = payload => dispatch => {
 dispatch({type: names.DELETE_TODO_START, payload})
 todosApi.remove(payload)
 .then(() => dispatch({type: names.DELETE_TODO_SUCCESS}))
 .catch(() => dispatch({type: names.DELETE_TODO_ERROR, payload}))
 }*/

export const toggleTodo = payload => dispatch => {
  let newPayload = {...payload, finished: !payload.finished};
  dispatch({type: names.TOGGLE_TODO_START, payload: newPayload})
  todosApi.save(newPayload)
    .then(() => dispatch({type: names.TOGGLE_TODO_SUCCESS}))
    .catch(() => dispatch({type: names.TOGGLE_TODO_ERROR, payload: payload}))
}

export const selectFilter = filter => ({
  type: names.SELECT_FILTER,
  payload: filter
})

export const fetchTodos = () => dispatch => {
  dispatch({type: names.FETCH_TODOS_START})
  return todosApi.list()
    .then(todos => dispatch({type: names.FETCH_TODOS_SUCCESS, payload: todos}))
    .catch(() => dispatch({type: names.FETCH_TODOS_ERROR}))
}

export {names}
