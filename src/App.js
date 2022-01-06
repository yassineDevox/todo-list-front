import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <main className="w-75 mx-auto">
      {/* AJOUTER TASK SECTION */}
      <AddTask />
      <hr />
      {/* LIST TASK  */}
      <ListTask />
    </main>

  );
}

export default App;
