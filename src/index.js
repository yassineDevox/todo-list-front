import { createStore } from "redux"
import { TodoModel } from "./model/todo"

const stateTodos = []

//types todo
const TODO_ADD = "todo/add"
const TODO_DEL = "todo/del"

//todo reducer def avec initialisation de prevState 
const todoReducer = (prevState=stateTodos, action) => {

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
const store  = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

//tu affiche le state lors du changement 
// store.subscribe((store)=>{
//   console.log(store.getState())
// })

//add 
store.dispatch({
  type:TODO_ADD,
  payload:new TodoModel(1,"task 1")
})

store.dispatch({
  type:TODO_ADD,
  payload:new TodoModel(2,"task 2")
})



