import { useState } from 'react';
import { Task } from './components/interfaces';
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
      {task.map(task =>  {
       return <h1>{task.title}</h1>
      })}
    </div>
  );
}

export default App;
