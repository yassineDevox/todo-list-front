import React, { Component } from 'react'

export default class Child extends Component {

    //si le child est debrancher
    componentWillUnmount(){
        console.log(" au revoir les amis 😢 !! ")
    }
    render() {
        return (
            <div className=' border w-25 p-1 text-danger mx-auto m-1'>
                child Component
            </div>
        )
    }
}
