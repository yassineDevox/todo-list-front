import Task from "./Task";

export default function ListTask() {
    return (
        <section>
            <h1 className="text-center mt-4 text-decoration-underline">List Task</h1>
            <div className="d-flex justify-content-center align-items-center">
                <input id="inpCle" type="text" className="form-control w-50" placeholder="Filter Task by title" />
                <span className="input-group-text m-3"><i className="fas fa-search" /></span>
            </div>

            <ul className="list-group list-group-flush " id="listTsk">
                {/* task
               <Task title="first task"/>
               <Task title="second task"/>
               <Task title="third task" /> */}
                {
                    ["first task", "second task", "third task"]
                    .map(
                        t => (<Task title={t} />)
                    )
                }
            </ul>
        </section>

    )
}
