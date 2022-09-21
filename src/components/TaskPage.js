import { useParams } from "react-router"; 

import TodoItem from "./TodoItem";

const TaskPage = ({ todoItems, deleteFunction, MarkAsDoneFtn }) => {
    const { status } = useParams();
    
    return(
        <>
            <h3>{ status.toUpperCase() } TASKS</h3>
            {
                todoItems.filter( todo => todo.status.toLowerCase() === status.toLowerCase() ).map( todo => <TodoItem name={ todo.name } status={ todo.status } deleteFunction={deleteFunction} MarkAsDoneFtn={MarkAsDoneFtn} /> )
            }
        </>
    )
}

export default TaskPage;