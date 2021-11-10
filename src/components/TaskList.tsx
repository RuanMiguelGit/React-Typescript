 import { Task } from '../components/interfaces';
 import TaskCard from '../components/TaskCard'

 interface Props {
    task : Task[]
}

 function TaskList({task}:Props ) {
     return (
         <div>
        {task.map((task) =>  <TaskCard task={task}/> )}
         </div>
     )
 }
 
 export default TaskList
 