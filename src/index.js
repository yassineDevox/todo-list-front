const state = {
  todos:[]
}

//types todo
const TODO_ADD = "todo/add"
const TODO_DEL = "todo/del"

//todo reducer 
const todoReducer = (prevState,action)=>{

  switch (action.type) {

    case TODO_ADD:
        return {
              todos:
              [
                ...prevState.todos,
                { ...action.payload.newTask }
              ]
            }
                
    case TODO_DEL:
      return {
        todos:[
          ...prevState.todos.
          filter(t=>t.id!=action.payload.deletedId)
        ]
      }

    default: return {
      todos:[ ...prevState.todos]
    }
  }
}


//use the reducer 
const state1 = todoReducer(state,{type:"",payload:{}})
console.log(state1)

const state2 = 
todoReducer(state1,
  { 
    type:TODO_ADD,
    payload:{
      newTask : {id:1,title:"title 1",completed:false}
    }
  }
)
console.log(state2)
const state3 = 
todoReducer(state2,
  { 
    type:TODO_ADD,
    payload:{
      newTask : {id:2,title:"title 2",completed:false}
    }
  }
)
console.log(state3)