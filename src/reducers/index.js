import todos, {todosSelectors} from './todos'
import {combineReducers} from 'redux'

export default combineReducers({
  todos,
})

const getTodos = state => todosSelectors.getTodos(state.todos)

export const selectors = {
  getTodos
}
