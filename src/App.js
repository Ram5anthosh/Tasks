import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit";

import {useState} from "react";

function App() {
  const [tasks,setTasks]=useState([
    {desc : "Sample Task 1", id:1, date:"02-03-2023 09:00", status: "Complete"},
    {desc : "Sample Task 2", id:2, date:"04-07-2023 10:00", status: "Open"},
  ]);

  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);
  
  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };  


  return (
    <div className="App">
      <Header></Header>
      <button
  className="button outline"
  onClick={() => setShowTaskEdit(!showTaskEdit)}>
  {!showTaskEdit && "New"}
  {showTaskEdit && "➖"}
</button>;
  {
  showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />
  }
      <div className="container">
        <Tasks tasks={tasks} onTglStatus={onTglStatus}></Tasks>
      </div>
      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="font-bold">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-3xl font-bold underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  */}
    </div>
  );
}

export default App;
