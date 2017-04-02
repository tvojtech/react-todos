import React from 'react'
import {connect} from 'react-redux'
import {selectors} from '../reducers'
import * as actions from '../actions'

const List = ({todos, toggleTodo}) => (
  <ul>
    {todos.map(
      t =>
        <li key={t.id} onClick={() => toggleTodo(t.id)}
            style={{
              'text-decoration': t.finished && 'line-through',
              'color': t.finished && 'grey',
            }}>
          {t.text}
        </li>
    )}
  </ul>
)

const mapStateToProps = state => ({
  todos: selectors.getTodos(state)
})

export default connect(mapStateToProps, actions)(List)
