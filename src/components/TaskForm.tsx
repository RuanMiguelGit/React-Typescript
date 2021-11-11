import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './interfaces';

interface Func {
    func: (task:Task) => void
}

function TaskForm({func}:Func) {
    type HandleInputChange =  ChangeEvent<HTMLInputElement| HTMLTextAreaElement>

    let initialState = {
        title:'',
        description:''
    }

    const [task, setTask] = useState(initialState);

    const changeHandler = ({ target:{name, value }}: HandleInputChange) => {
        setTask({ ...task, [name]: value });

    }


    const handleTask = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        func(task)
        setTask(initialState)
    }
    return (
        <div>
            <form onSubmit={handleTask}>
                <input type='input'
                 placeholder='add task'
                 onChange={changeHandler} 
                 />
                <textarea name='descricao' 
                rows={10} placeholder='descriçao'
                 onChange={changeHandler} />
                <button> Save</button>
            </form>
        </div>
    )
}

export default TaskForm
