import { useEffect, useState } from 'react'
import Child from './components/child'

export default function App() {

  const [counter, setCounter] = useState(0)
  const [showChild, setShowChild] = useState(true)

  //when component did mount
  //arg1:fonction flechée
  //arg2:tableau des dependances
  useEffect(
    () => {
      console.log("component did mount")
    }
  ,[])

  // component did update sur toutes les states
  useEffect(
    ()=>{
      if(counter!=0)
      console.log("component did update for all states");
    }
  )

  
  //component did update sur juste le compteur
  useEffect(
    ()=>{
      if(counter!=0)
      console.log("component did update just for reda counter");
    }
  ,[counter])


  const handleClick = () => {
    // this.state.counter++; walo
    setCounter(counter + 1)
  }
  const handleClickHideChild = () => {
    //counter++; walo
    setShowChild(false)
  }


  return (
    <div className='text-center'>

      <span className='fs-1'>{counter}</span><br />
      <button
        onClick={handleClick}
        className='btn btn-success'>Incrementer</button>

      <h1>List des childs </h1>
      {showChild ? <Child /> : null}
      <button
        onClick={handleClickHideChild}
        className='btn btn-danger'>Hide Child</button>
    </div>
  )

}
