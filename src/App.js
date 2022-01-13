import { useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  const [listTaches, setListTaches] = useState()
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
