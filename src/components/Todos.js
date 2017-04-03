import React from 'react'
import List from './List'
import Add from './Add'
import Filters from './Filters'
import * as actions from '../actions'
import store from '../store'

export default class Todos extends React.Component {
  componentWillMount() {
    store.dispatch(actions.fetchTodos())
  }

  render() {
    return (
      <div>
        <Add />
        <Filters />
        <List />
      </div>
    )
  }
}
