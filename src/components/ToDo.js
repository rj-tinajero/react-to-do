import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        return (
            <div>
            <li>
                <input type="checkbox" checked={ this.props.isCompleted } onChange={ () => this.props.toggleComplete(this.props.index)  } />
                <span>{ this.props.description }</span>
                <button onClick={this.props.deleteTodo}>X</button>
            </li>
            </div>
        );
    }
}

export default ToDo;