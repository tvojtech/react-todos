import todos, {selectors as todosSelectors} from './todos'
import filters, {selectors as filtersSelectors} from './filters'
import {combineReducers} from 'redux'

export default combineReducers({
  todos,
  filters
})

const getTodos = state => {
  const todos = todosSelectors.getTodos(state.todos)
  const selectedFilter = getSelectedFilter(state)
  if (selectedFilter === 'open') {
    return todos.filter(t => !t.finished)
  }
  if (selectedFilter === 'closed') {
    return todos.filter(t => t.finished)
  }
  return todos
}
const isFetchingTodos = state => todosSelectors.isFetchingTodos(state.todos)
const isFetchErrorTodos = state => todosSelectors.isFetchErrorTodos(state.todos)

const getSelectedFilter = state => filtersSelectors.getSelectedFilter(state.filters)

export const selectors = {
  getTodos,
  isFetchingTodos,
  isFetchErrorTodos,
  getSelectedFilter
}
