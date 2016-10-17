import React, { Component } from 'react'

class TodoList extends Component {

  constructor(props, context) {
    super(props, context)
  }

  //returns an unordered list with an array of <li> elements maped from the
  // this.props.todos.  React is able to take the array and populate it as individual
  // jsx items.  Magic!
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return <li key={todo.id}>{todo.text}</li>
          })
        }
      </ul>
    );
  }

}

export default TodoList
