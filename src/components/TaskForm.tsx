import React, { ChangeEvent, useState } from 'react'
import { Task } from './interfaces';

interface Func {
    func: (task:Task) => void
}

function TaskForm({func}:Func) {
    type HandleInputChange =  ChangeEvent<HTMLInputElement| HTMLTextAreaElement>
    const [task, setTask] = useState({
        title:'',
        description:''
    });

    const changeHandler = ({target:{name, value}}: HandleInputChange) => {
        setTask({...task, [name]:value})
    }

    return (
        <div>
            <form>
                <input type='input' placeholder='add task'onChange={changeHandler} />
                <textarea name='descricao' rows={10} placeholder='descriçao' onChange={changeHandler}> </textarea>
                <button> Save</button>
            </form>
        </div>
    )
}

export default TaskForm
