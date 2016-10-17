//exports an object with a method addTodo which is a Redux actions
// this returns an object that has a command type and a text payload
// -- could be other data types like an integer or boolean or nothing at all
let actions = {
  addTodo: function(text){
    return {
      type: "ADD_TODO",
      text: text
    }
  }
}

export default actions
