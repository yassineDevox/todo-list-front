
export default function Task(props) {
    console.log(props);//afficher la liste des attributs(props)
    return (
        <li className="list-group-item listup">
            <span className="fs-4 tasklist">{props.title}
            <br /> desc : {props.desc}</span>
            <button className="btn btn-danger float-end m-3" onclick="deleteTask(this)">
                <i className="fas fa-trash" />
            </button>
            <button className="btn btn-success float-end m-3" onclick="editTask(this)">
                <i className="fas fa-edit" />
            </button>
        </li>
    )
}
