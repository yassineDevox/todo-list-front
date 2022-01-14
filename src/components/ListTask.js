
import Task from "./Task";

export default function ListTask(props) {


    return (
        <section>
            <h1 className="text-center mt-4 text-decoration-underline">List Task</h1>
            <div className="d-flex justify-content-center align-items-center">
                <input id="inpCle" type="text" className="form-control w-50" placeholder="Filter Task by title" />
                <span className="input-group-text m-3"><i className="fas fa-search" /></span>
            </div>

            <ul className="list-group list-group-flush " id="listTsk">
                {
                    props.list
                        .map(
                            t => (<Task key={t.id} title={t.title} desc={t.description} />)
                        )
                }
                {/* il va etre creer en se basent sur le tableau setListTache
                qui contient 3 elements
                <Task key={1} title="titre 1" />
                <Task key={2} title="titre 2" />
                <Task key={3} title="titre 3" /> */}
            </ul>
        </section>

    )
}
