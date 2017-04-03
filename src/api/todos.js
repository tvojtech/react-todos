import {v4} from 'uuid'
import Promise from 'bluebird'

const delay = () => new Promise(resolve => setTimeout(resolve, 3000))

let todos = JSON.parse(window.localStorage.getItem('aaaaaaa_todos') || '[]')

const newTodos = newTodos => {
  todos = newTodos
  window.localStorage.setItem('aaaaaaa_todos', JSON.stringify(todos))
}

const list = () => delay().then(() => todos)

const get = id => delay().then(() => todos.find(t => t.id === id))

const save = todo => {
  let clone = {...todo, id: todo.id || v4()}
  const idx = todos.findIndex(t => t.id === clone.id)
  delay().then(() => {
    if (idx >= 0) {
      newTodos([...todos.slice(0, idx), clone, ...todos.slice(idx + 1)])
    } else {
      newTodos([...todos, clone])
    }
  })
}

const remove = idOrTodo => {
  const id = idOrTodo.id || idOrTodo
  delay().then(() => newTodos(todos.filter(t => t.id !== id)))
}

export default {
  list,
  get,
  save,
  remove
}
