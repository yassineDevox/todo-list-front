
export default function Task(props) {


    const handleClick = () => {
        if (window.confirm("Are you sure ?"))
            props.deleteTaskById(props.id)
    }

    const handleClickEdit = ()=>{
        props.editTask(props.title,props.id)
    }


    return (
        <li className="list-group-item listup">
            <span className="fs-4 tasklist">{props.title}</span>
            <button
                onClick={handleClick}
                className="btn btn-danger float-end m-3" >
                <i className="fas fa-trash" />
            </button>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="btn btn-success float-end m-3"
                onClick={handleClickEdit}>
                <i className="fas fa-edit"
                
                />
            </button>
        </li>
    )
}
