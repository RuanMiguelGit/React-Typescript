 import { Task } from '../components/interfaces';
 import TaskCard from '../components/TaskCard'

 interface Props {
    task : Task[]
    deleteTask : (id:number) => any

}

 function TaskList({task, deleteTask}:Props ) {
     return (
         <div>
        {task.map((tasks) =>  <TaskCard task={tasks} deleteTask={deleteTask}/> )}
         </div>
     )
 }
 
 export default TaskList
 