import axios from 'axios'
import React, { useEffect, useState , useRef} from 'react'

const Todo = (props) => {

  const handleClickDelete = () => {
    props.deleteTask(props.id)
  }
  
  const handleClickUpdate = () => {
    props.updateTask(props.id,props.title)
  }
  


  return (
    <li>{props.title}
      <button
        onClick={handleClickDelete}
      >delete</button>
      <button
      onClick={handleClickUpdate}
      >Edit my Task</button>

    </li>
  )
}

const App = () => {

  const [todos, setTodos] = useState([])
  const [updatedId, setUpdateId] = useState()
  
  //ref pour linput title 
  const titleRef = useRef()
  const titleRefUpdate = useRef()

  //component did mount : au chargement de la page tu recupere la liste des todos 
  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then(response => setTodos(response.data))

  }, [])


  const deleteTask = (selectedId) => {
    axios.delete("https://jsonplaceholder.typicode.com/todos/" + selectedId)
      .then(response => {
        //response un objet qui contient tt les info lier ala reponse serveur
        if (response.status === 200) {
          alert("todo deleted successfuly ")
          //suppression au niveau de linterface (state) 
          setTodos([...todos.filter(t => t.id != selectedId)])
        }
      })
  }
  const handleSubmit= (e)=>{
    e.preventDefault()

    if(titleRef.current.value==="") alert("go home ")
    else 
    //recupere le titre et lenvoyer avec post vers api todo 
    axios.post("https://jsonplaceholder.typicode.com/todos/",
      {
        userId: 1,
        id:null,
        title: titleRef.current.value,
        completed: false
      }
    )
    .then(response => {
      if(response.status === 201){
        alert("todo with id = "+response.data.id+" added successfuly")
        //ajouter au niveau de linterface
        setTodos([...todos,{
          userId: 1,
          id:response.data.id,
          title: response.data.title,
          completed: false
        }])
      }
    })
    titleRef.current.value = ""
  }
  //pour transporter le titre vers linput update 
  const updateTask = (selectedId,title)=>{
    //stocker le id de todo qu on va modifier pour lenvoyer au server apres 
    setUpdateId(selectedId)
    //donner title a linput refTitleUpdate
    titleRefUpdate.current.value=title
  }

  const handleSubmitUpdate = (e)=>{
    e.preventDefault()

    if(titleRefUpdate.current.value==="") alert("go home dude")
    else {
      axios.put("https://jsonplaceholder.typicode.com/todos/"+updatedId,
      {
        userId: 1,
        id:updatedId,
        title: titleRefUpdate.current.value,
        completed: true
      }).then(response => {
        if(response.status === 200){
          alert("todo with id = "+response.data.id+" updated successfuly")
          //modifier au niveau de linterface
          setTodos([...todos.map(t=>{

            if(t.id===updatedId){
              t.title=response.data.title
              t.completed=response.data.completed
            }
            return t
          })])
        }
      })
    }
  }
  return (
    <div>
      <form
      onSubmit={handleSubmit}
        className="p-2 text-center">
        <input type="text" placeholder="title" ref={titleRef}/>
        <button
          type="submit">add task for user 1</button>
      </form> 
       <form
      onSubmit={handleSubmitUpdate}
        className="p-2 text-center">
        <input type="text" placeholder="title" ref={titleRefUpdate}/>
        <button
          type="submit">edit task for user 1</button>
      </form>
      <hr />
      <h1>list Todos Yaay !!</h1>
      <ul>
        {todos.map(t =>
          <Todo
            key={t.id}
            id={t.id}
            title={t.title}
            deleteTask={deleteTask}
            updateTask = {updateTask}
          />)}
      </ul>
    </div>
  )
}

export default App