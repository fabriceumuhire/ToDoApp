// import logo from './logo.svg';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import TodoList from './components/ToDo';
library.add(faTrash, faEdit, faPlus);
// import Demo from "./components/Demo";
// import Demo1 from "./components/Demo1";
// import Parent from "./components/Parent";
// import Sample from "./components/Sample";


function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
