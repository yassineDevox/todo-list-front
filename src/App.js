import { useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { Tache } from "./models/tache";

function App() {
  const [listTaches, setListTaches] = useState([
    new Tache(1,"dadad")
  ])
  return (
    <main className="w-75 mx-auto">
      {/* AJOUTER TASK SECTION */}
      <AddTask />
      <hr />
      {/* LIST TASK  */}
      <ListTask list={listTaches} />
    </main>

  );
}

export default App;
