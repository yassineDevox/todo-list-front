import { useState } from "react";
import { Tache } from "../models/tache";
import Task from "./Task";

export default function ListTask() {

    //  const tableau = useState("")
    //  const etat = tableau[0]
    //  const setEtat = tableau[1]

    //  const [etat, setEtat] = useState("")

    //  console.log(useState(""))

    const [listTaches, setListTaches] = useState(
        [

            new Tache(1, "titre 1", true),
            new Tache(2, "titre 2", true),
            new Tache(3, "titre 3", true),
        ]
    )

    return (
        <section>
            <h1 className="text-center mt-4 text-decoration-underline">List Task</h1>
            <div className="d-flex justify-content-center align-items-center">
                <input id="inpCle" type="text" className="form-control w-50" placeholder="Filter Task by title" />
                <span className="input-group-text m-3"><i className="fas fa-search" /></span>
            </div>

            <ul className="list-group list-group-flush " id="listTsk">
                {
                    listTaches
                        .map(
                            t => (<Task key={t.id} title={t.title} />)
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
