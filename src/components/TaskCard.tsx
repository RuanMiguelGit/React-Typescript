import { Task } from './interfaces'

interface Props {
    task : Task
}

function TaskCard({task}:Props) {
    return (
        <div>
            <h1>{task.title}</h1>
        </div>
    )
}

export default TaskCard
