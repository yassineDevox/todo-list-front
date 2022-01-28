import { useRef } from "react"

export default function AddTask(props) {


    //creer une reference taskRef avec useRef hook
    //il contient une propriete current qui contient lelement sur le 
    //quel on a mis ref 
    const taskRef = useRef()

    const handleClick = () => {
        //cibler la valeur dinput 
        // console.log(taskRef.current.value)
        let taskValue = taskRef.current.value
        if (taskValue === "" ) alert(" invalid task")
        else {
            //vider l'input 
            taskRef.current.value = ""
            //appel la fonction addNewTask du comp App
            props.addNewTask(taskValue)
        }
    }

    return (

        <section>
            <h1 className="text-center mt-4 text-decoration-underline">Ajouter Task</h1>
            <div className="d-flex justify-content-center align-items-center">
                {/* taskRef c'est la variable reference sur linput   */}
                <input type="text"
                    className="form-control w-50"
                    placeholder="entrer le titre de la tache"
                    ref={taskRef}
                />
                <button className="btn btn-primary m-3 "
                    onClick={handleClick} >
                    <i className="fas fa-plus" />
                </button>
            </div>
        </section>
    )
}
