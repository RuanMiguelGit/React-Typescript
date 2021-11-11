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

  const getcurrentTimeStamp = () => new Date().getTime()

  const addAnewTask  = (tasks:Task) => {
    setTask([...task, {...tasks, id:getcurrentTimeStamp(), completed:true}])
  }

  const deleteTask = (id:number) =>setTask( task.filter((task) => task.id !== id))
  return (
    <div className="App">
      <div>
      <TaskList task={task} deleteTask={deleteTask} />
      </div>
      <div>
        <TaskForm func={addAnewTask}/>
      </div>
    </div>
  );
}

export default App;
