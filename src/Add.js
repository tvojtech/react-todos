import React from 'react'

export default class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = () => {
        this.props.onTodoAdd(this.state.value)
        this.setState({value: ''})
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value}
                       onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}