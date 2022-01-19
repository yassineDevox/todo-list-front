import React, { Component } from 'react'
import Child from './components/child'

export default class App extends Component {

  constructor() {
    super()//pour appeler le constructeur de la class parent(component)
    this.state = { counter: 0 ,showChild:true}
    console.log("constructeur")
  }

  componentDidMount() {
    console.log("component did mount")
  }

  handleClick = ()=>{
    // this.state.counter++; walo
    this.setState({counter:this.state.counter+1})
  }
  handleClickHideChild = ()=>{
    // this.state.counter++; walo
    this.setState({showChild:false})
  }

  //si ya un changement au niveau des states (counter)
  componentDidUpdate(){
    console.log("counter changed")
  }


  render() {
    return (
      <div className='text-center'>
        
        <span className='fs-1'>{this.state.counter}</span><br />
        <button
        onClick={this.handleClick} 
        className='btn btn-success'>Incrementer</button>

        <h1>List des childs </h1>
       {this.state.showChild ?  <Child /> : null}
        <button 
        onClick={this.handleClickHideChild}
        className='btn btn-danger'>Hide Child</button>
      </div>
    )
  }
}
