import { Tache } from "../models/tache";
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
                {
                    // ["first task", "second task", "third task"]
                    // .map(
                    //     (t,index) => (<Task key={index} title={t} />)
                    // )
                    // [

                    //     { id: 1, title: "first task"},
                    //     { id: 2, title: "second task" },
                    //     { id: 3, title: "third task" }
                    // ]
                    // .map(
                    //     t => (<Task key={t.id} title={t.title} />)
                    // )

                    [

                        new Tache(1, "first task"),
                        new Tache(2, "second task"),
                        new Tache(3, "third task")
                    ]
                        .map(
                            t => (<Task key={t.id} title={t.title} />)
                        )

                }
            </ul>
        </section>

    )
}
