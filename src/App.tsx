import { useState } from 'react';
import { Task } from './components/interfaces';
import TaskList from './components/TaskList'
import './App.css';



function App() {
  const [task] = useState<Task[]>([
    {
      id:1,
      title:'learn react',
      description:'learn react',
      completed:true
    }
  ]);
  return (
    <div className="App">
    <TaskList task={task} />
    </div>
  );
}

export default App;
