import React from 'react'
import List from './List'
import Add from './Add'
import Filters from './Filters'

export default class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                "todo 1",
                "todo 2"
            ],
            filter: 'open'
        }
    }

    onTodoAdd = todo => {
        this.setState({todos: [...this.state.todos, todo]})
    }

    onFilterSelect = filter => {
        this.setState({filter})
    }

    render() {
        return (
            <div>
                <Add onTodoAdd={this.onTodoAdd}/>
                <List todos={this.state.todos}/>
                <Filters onFilterSelect={this.onFilterSelect}/>
            </div>
        )
    }
}