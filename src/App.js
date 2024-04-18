import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Divider from "./components/Divider";
import Logo from "./components/Logo";
import Tasks from "./components/Tasks";
import UpdateTaskForm from "./components/UpdateTaskForm";

export default function App(){
    const [tasksList,setTasksList] = useState([])
    const [selectedTaskToUpdate,setSelectedTaskToUpdate] = useState(null)

    function handelSelectedTaskToUpdate(task){
        return setSelectedTaskToUpdate(task)
    }

    function handelAddTask(task){
        return setTasksList((list) => [...list,task])
    }

    function handelUpdateTask(task){
        return setTasksList((list) => list.map(item => item.id === task.id ? {...item,content: task.content} : item))
    }

    function handelResetTask(){
        return setSelectedTaskToUpdate(null)
    }

    function handelDeleteTask(task){
        return setTasksList((list) => list.filter(item => item.id !== task.id))
    }

    return (
        <div className="App">
            <Logo />
            <Divider />
            <Tasks tasks={tasksList} onSelectTaskToUpdate={handelSelectedTaskToUpdate} onDeleteTask={handelDeleteTask} />
            <AddTaskForm onAddTask={handelAddTask} />
            {
                selectedTaskToUpdate != null ? 
                <UpdateTaskForm 
                    onUpdateTask={handelUpdateTask} 
                    selectedTaskToUpdate={selectedTaskToUpdate} 
                    onResetTask={handelResetTask}
                /> : ''
            }
        </div>
    )
}