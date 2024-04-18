import { useState } from "react"

export default function AddTaskForm({onAddTask}){
    const [task,setTAsk] = useState('')

    function handelSubmit(e){
        e.preventDefault()

        if(!task) return
        const newTask = {
            id: crypto.randomUUID(),
            content: task
        }

        onAddTask(newTask)
       
        setTAsk('')
    }

    return (
        <form className="add-task-form" onSubmit={handelSubmit}>
            <input type="text" placeholder="Type Something To Do" value={task} onChange={e=> setTAsk(e.target.value)} />
            <button className="add-task-btn">Add</button>
        </form>
    )
}