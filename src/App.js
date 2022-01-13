import { useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { LIST_TASK } from "./data/taches";

function App() {
  const [listTaches, setListTaches] = useState(LIST_TASK)
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
