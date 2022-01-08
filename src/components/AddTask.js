
export default function AddTask() {
    return (
        
        <section>
            <h1 className="text-center mt-4 text-decoration-underline">Ajouter Task</h1>
            <div className="d-flex justify-content-center align-items-center">
                <input type="text" className="form-control w-50" id="addTask" placeholder="Type new Task" />
                <button className="btn btn-primary m-3 " id="ajoutsk"><i className="fas fa-plus" /></button>
                <button className="btn btn-success m-3  d-lg-none" id="uptsk" onclick="upTsaks()"><i className="fas fa-edit" /></button>
            </div>
        </section>
    )
}
