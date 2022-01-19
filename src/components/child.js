import { useEffect } from "react"

const Child = () => {

    // component will unmount 
    useEffect(()=>{
        //stp react tu voila je te retourn la fonction a executer
        //lorsque tu va debrancher le composant child 
        return ()=>{
            console.log("au revoir les amis 😢 !!")    
        }

    },[])  
    return (
        <div className=' border w-25 p-1 text-danger mx-auto m-1'>
            child Component
        </div>
    )

}

export default Child
