

function getId(state){
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId);
  }, -1) + 1;
}

let reducer = function(state, action){
  switch(action.type){
    case 'ADD_TODO':
      //Object.assign merges seperate objects together and returns a new object
      //The spread operator (...) will take state.todos array and add each element
      //to the new todos array.
      return Object.assign({}, state, {
        todos: [{
          //add new todo info
          text: action.text,
          completed: false,
          id: getId(state)
        }, ...state.todos]
      });
      break;
    default:
      return state;
  }
}

export default reducer;
