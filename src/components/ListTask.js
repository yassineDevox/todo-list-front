
import { useRef, useState } from "react";
import Task from "./Task";

export default function ListTask(props) {

    const [selectedId, setSelectedId] = useState()
    //reference 
    const titleRef = useRef()
    const filterQueryRef = useRef()


    const editTask = (title, id) => {
        // alert(title+" et "+desc)
        titleRef.current.value = title
        setSelectedId(id)
    }
    const handleClickUpdate = () => {

        // alert(titleRef.current.value+' '+descRef.current.value)
        props.updateTask(titleRef.current.value, selectedId)
    }
    const handleKeyUp = ()=>{
        // console.log(filterQueryRef.current.value)
        props.filterTaskByTitle(filterQueryRef.current.value)
    } 

    return (
        <section>
            <h1 className="text-center mt-4 text-decoration-underline">List Task</h1>
            {/* INPUT FILTER  */}
            <div className="d-flex justify-content-center align-items-center">
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Filter Task by title" 
                    onKeyUp={handleKeyUp}
                    ref={filterQueryRef}/>
                <span className="input-group-text m-3"><i className="fas fa-search" /></span>
            </div>

            <ul className="list-group list-group-flush " id="listTsk">
                {
                    props.list
                        .map(
                            t => (<Task
                                key={t.id}
                                id={t.id}
                                title={t.title}
                                deleteTaskById={props.deleteTaskById}
                                editTask={editTask} />)
                        )
                }
            </ul>

            <div>

                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Editer Task</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body text-center">
                                <input type="text"
                                    className="form-control w-50"
                                    placeholder="Type new Task"
                                    ref={titleRef}
                                />
                               


                            </div>
                            <div className="modal-footer">
                                <button onClick={handleClickUpdate} data-bs-dismiss="modal" className="btn btn-success m-3 "
                                > Update <i className="fas fa-edit" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
