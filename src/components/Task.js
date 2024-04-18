export default function Task({task,onSelectTaskToUpdate,onDeleteTask}){
    return (
        <li className="task">
            {task.content} 
            <button style={{position: "absolute",right: "28px"}} onClick={_=> onSelectTaskToUpdate(task)}>&#9998;</button>
            <button style={{position: "absolute",right: "5px"}} onClick={_=> onDeleteTask(task)}>&#10005;</button>
        </li>
    )
}