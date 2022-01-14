import { useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { LIST_TASK } from "./data/taches";
import { Tache } from "./models/tache";

function App() {
  const [listTaches, setListTaches] = useState(LIST_TASK)

  const addNewTask = (titleTask,descTask) => {
    //  alert(titleTask)
    // it wont display the data because we didnt use setListTaches 
    // listTaches.push(new Tache(1,titleTask))
    // console.log(listTaches)
    let newListTach = listTaches
    
    newListTach.push(new Tache(listTaches.length+1,titleTask,descTask))
    console.log(newListTach);
    setListTaches([...newListTach])
  }

  const deleteTaskById = (idTask)=>{
    // alert(idTask)
    //copier la list pred
    let newListTach = listTaches
    //faire le changement sur la new list
    newListTach = newListTach.filter(t=>t.id!=idTask)
    //on ecrase notre state avec la new list 
    setListTaches([...newListTach])
  }
  const updateTask = (newTitle,newDesc,idTask)=>{
    // alert(newTitle+' '+newDesc+" "+idTask)
    //copier la list pred
    let newListTach = listTaches
    //faire le changement sur la new list
    newListTach.forEach(t=>{
      if(t.id==idTask){
        t.title = newTitle
        t.description = newDesc
      }
    })
    //on ecrase notre state avec la new list 
    setListTaches([...newListTach])
  }

  return (
    <main className="w-75 mx-auto">
      {/* AJOUTER TASK SECTION */}
      <AddTask 
        addNewTask={addNewTask}
       />
      <hr />
      {/* LIST TASK  */}
      <ListTask 
        list={listTaches}
        deleteTaskById={deleteTaskById} 
        updateTask = {updateTask}/>
    </main>

  );
}

export default App;
