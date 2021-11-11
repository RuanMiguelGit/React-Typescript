import { Task } from './interfaces'

interface Props {
    task : Task
}

function TaskCard({task}:Props) {
    return (
        <div>
            <p>{task.id}</p> 
            <h1>{task.title}</h1>
            <h2>{task.description}</h2>
            <button >
                Deletar
            </button>
        </div>
    )
}

export default TaskCard
