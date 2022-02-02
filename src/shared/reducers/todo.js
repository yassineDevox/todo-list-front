import { TodoModel } from "../../model/todo"

const initialState = [
    // new TodoModel(1,"task 1")
]

//types
export const TodoTypes = {
    add : "todo/add",
    del : "todo/del",
    edit : "todo/edit",
    filter : "todo/filter"
}


export const todoReducer = (prevState=initialState,action)=>{

    switch (action.type) {

        case TodoTypes.add:
            
            return [
                ...prevState,{...action.payload}
            ] 
            
            
        case TodoTypes.del:
            
            return [
                ...prevState.filter(
                    t=>t.id!==action.payload.deletedID
                )
            ] 
            
        default:
            return prevState
    }
}



