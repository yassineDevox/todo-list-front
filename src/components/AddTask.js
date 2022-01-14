import { useRef } from "react"

export default function AddTask(props) {


    //creer une reference taskRef avec useRef hook
    //il contient une propriete current qui contient lelement sur le 
    //quel on a mis ref 
    const taskRef = useRef()
    const descRef = useRef()

    const handleClick = () => {
        //cibler la valeur dinput 
        // console.log(taskRef.current.value)
        let taskValue = taskRef.current.value
        let descValue = descRef.current.value
        if (taskValue == "" || descValue==="") alert(" invalid task")
        else {
            //vider l'input 
            taskRef.current.value = ""
            descRef.current.value = ""
            //appel la fonction addNewTask du comp App
            props.addNewTask(taskValue,descValue)
        }
    }

    return (

        <section>
            <h1 className="text-center mt-4 text-decoration-underline">Ajouter Task</h1>
            <div className="d-flex justify-content-center align-items-center">
                {/* taskRef c'est la variable reference sur linput   */}
                <input type="text"
                    className="form-control w-50"
                    placeholder="Type new Task"
                    ref={taskRef}
                />
                <textarea type="text"
                    className="form-control w-50"
                    placeholder="Description de la tache"
                    ref={descRef}
                ></textarea>
                <button className="btn btn-primary m-3 "
                    onClick={handleClick} >
                    <i className="fas fa-plus" />
                </button>
            </div>
        </section>
    )
}
