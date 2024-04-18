import Task from "./Task"

export default function Tasks({tasks,onSelectTaskToUpdate,onDeleteTask}){
    return (
        <ul className="tasks">
            {tasks.map(task => <Task task={task} key={task.id} onSelectTaskToUpdate={onSelectTaskToUpdate} onDeleteTask={onDeleteTask} />)}
        </ul>
    )
}