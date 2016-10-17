import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoInput dispatch={this.props.dispatch}/>
        <TodoList todos={ this.props.todos }/>
      </div>
    )
  }

}

function mapStateToProps(state){
  //part of state that is going to be connected to this component (all of it)
  return state;
}

//export app connected to state in <Provider> using react-redux connect function
export default connect(mapStateToProps)(App);
