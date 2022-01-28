import axios from "axios";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import Task from "./components/Task";
import { LIST_TASK } from "./data/taches";
import { TacheModel } from "./models/tache";

function App() {
  const [listTaches, setListTaches] = useState(LIST_TASK)
  const [listTachesOrigine, setListTachesOrigine] = useState(LIST_TASK)


  //______________add-task

  const addNewTask = (titleTask) => {
    //ajouter sur le serveur 
    axios.post(
      "http://jsonplaceholder.typicode.com/todos",
      new TacheModel(null, titleTask)
    ).then(response => {
      if (response.status === 201) {
        alert("task added successfully : " + response.data.id)
        //modifier linterface
        setListTaches([new TacheModel(response.data.id, titleTask), ...listTaches])
        //tu va changer aussi la copie 
        setListTachesOrigine([new TacheModel(response.data.id, titleTask), ...listTaches])
      }
    })

  }

  //______________delete-task

  const deleteTaskById = (idTask) => {
    // // alert(idTask)

    //supprimmer au niveau du serveur
    axios.delete("http://jsonplaceholder.typicode.com/todos/" + idTask)
      .then(response => {
        if (response.status === 200) {

          alert("deleted successfully 😢 !!")

          //copier la list pred
          let newListTach = listTaches
          //faire le changement sur la new list
          newListTach = newListTach.filter(t => t.id !== idTask)
          //on ecrase notre state avec la new list 
          setListTaches([...newListTach])
          //tu va changer aussi la copie 
          setListTachesOrigine([...newListTach])

        }
      })
  }

  const updateTask = (newTitle, idTask) => {
    //modifier au niveau du serveur 
    axios.put("http://jsonplaceholder.typicode.com/todos/" + idTask,
              new Task(idTask,newTitle))
      .then(response => {
        if(response.status===200){
          alert("task : "+ response.data.id+" updated successfully 😄 !")
          //modifier linterface ui 
              setListTaches([...listTaches.map(
                t=>{
                  if(t.id===idTask){
                    t.title = newTitle
                  }
                  return t
                }
              )])
              setListTachesOrigine([...listTaches])

        }
      })
  }


  //filter 
  const filterTaskByTitle = (queryTitle) => {
    if (queryTitle === "") {
      setListTaches([...listTachesOrigine])
    } else {

      // console.log(queryTitle)
      //copier la list pred
      let newListTach = listTaches
      //faire le changement sur la new list
      newListTach = newListTach.filter(t => t.title.includes(queryTitle))
      //on ecrase notre state avec la new list 
      setListTaches([...newListTach])
    }
  }

  //_________________CALL_API______

  //au chargement de la page 
  useEffect(() => {
    //communiquer avec l api json place holder 
    axios.get("http://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setListTaches(response.data)
        setListTachesOrigine(response.data)
      })
  }, [])

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
        updateTask={updateTask}
        filterTaskByTitle={filterTaskByTitle} />
    </main>

  );
}

export default App;
