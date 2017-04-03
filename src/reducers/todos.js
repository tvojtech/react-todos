import {names} from '../actions'

export default (state = {fetching: false, fetchError: false, todos: []}, action) => {
  switch (action.type) {
    case names.ADD_TODO_START:
      return {...state, todos: [...state.todos, action.payload]}
    case names.ADD_TODO_ERROR:
      return {...state, todos: state.todos.filter(t => t.id !== action.payload)}
    case names.TOGGLE_TODO_START:
    case names.TOGGLE_TODO_ERROR:
      const idx = state.todos.findIndex(item => item.id === action.payload.id)
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, idx),
          action.payload,
          ...state.todos.slice(idx + 1)
        ]
      }
    case names.FETCH_TODOS_START:
      return {...state, fetching: true, fetchError: false}
    case names.FETCH_TODOS_SUCCESS:
      return {...state, fetching: false, todos: [...state.todos, ...action.payload]}
    case names.FETCH_TODOS_ERROR:
      return {...state, fetching: false, fetchError: true}
    default:
      return state
  }
}

const getTodos = state => state.todos
const isFetchingTodos = state => state.fetching
const isFetchErrorTodos = state => state.fetchError

export const selectors = {
  getTodos,
  isFetchingTodos,
  isFetchErrorTodos
}
