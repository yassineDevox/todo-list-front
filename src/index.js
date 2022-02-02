import { TodoModel } from "./model/todo"

const stateTodos = []

//types todo
const TODO_ADD = "todo/add"
const TODO_DEL = "todo/del"

//todo reducer def
const todoReducer = (prevState, action) => {

  switch (action.type) {
    case TODO_ADD:
      return [
        ...prevState, { ...action.payload }
      ]

    case TODO_DEL:
      return [
        ...prevState.filter(
          t => t.id != action.payload.deletedID
        )
      ]
    default:
      return prevState
  }

}



//utilisation de la fonction 
const stateTodos1 = todoReducer(stateTodos,
  {
    type: TODO_ADD,
    payload: new TodoModel(1, "title 1")
  }
)

console.log(stateTodos1)

// appel add todo 
const stateTodos2 = todoReducer(stateTodos1,
  {
    type: TODO_ADD,
    payload: new TodoModel(2, "title 2")
  }
)
console.log(stateTodos2)

//suppression dun todo id = 2
const stateTodos3 = todoReducer(stateTodos2,
  {
    type: TODO_DEL,
    payload: { deletedID: 2 }
  }
)

console.log(stateTodos3);

