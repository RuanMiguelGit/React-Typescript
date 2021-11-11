import { useState } from 'react';
import { Task } from './components/interfaces';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import './App.css';



function App() {
  const [task, setTask] = useState<Task[]>([
    {
      id:1,
      title:'learn react',
      description:'learn react',
      completed:true
    }
  ]);

  const addAnewTask  = (tasks:Task) => {
    setTask([...task, tasks])
  }
  return (
    <div className="App">
      <div>
      <TaskList task={task} />
      </div>
      <div>
        <TaskForm func={addAnewTask}/>
      </div>
    </div>
  );
}

export default App;
