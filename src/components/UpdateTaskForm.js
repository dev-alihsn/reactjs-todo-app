import { useState } from "react";
import Popup from "./Popup";

export default function UpdateTaskForm({onUpdateTask,selectedTaskToUpdate,onResetTask}){

    const [newTaskContent,setNewTaskContent] = useState(selectedTaskToUpdate.content)

    function handelSubmit(e){
       e.preventDefault()

       if(newTaskContent.length === 0) return

       const UpdatedTask = {...selectedTaskToUpdate,content: newTaskContent}

       onUpdateTask(UpdatedTask)
       onResetTask()
    }

    function handelClose(){
        onResetTask()
    }

    return (
        <Popup handelClose={handelClose}>
            <form onSubmit={handelSubmit}>
                <textarea value={newTaskContent} style={{marginTop: '20px',padding: '5px'}} onChange={e=> setNewTaskContent(e.target.value)}></textarea>
                <br />
                <button style={{padding: '4px',marginTop: '5px'}} type="submit">Update Task</button>
            </form>
        </Popup>
    )
}