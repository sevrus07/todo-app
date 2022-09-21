import TodoItem from "./TodoItem";

const DoneTaskPage = ({ todoItems }) => {
    return(
        <>
            <h3>Done Tasks</h3>
            {
                todoItems.filter( todo => todo.status.toLowerCase() === 'done' ).map( todo => <TodoItem name={ todo.name } status={ todo.status } /> )
            }
        </>
    )
}

export default DoneTaskPage;