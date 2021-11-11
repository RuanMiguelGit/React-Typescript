import { Task } from './interfaces'

interface Props {
    task : Task
    deleteTask : (id:number) => void
}

function TaskCard({task, deleteTask}:Props) {
    return (
        <div>
            <h1>{task.id}</h1>
            <h1>{task.title}</h1>
            <h2>{task.description}</h2>
            <button onClick={() => task.id && deleteTask(task.id)}>
                Deletar
            </button>
        </div>
    )
}

export default TaskCard
