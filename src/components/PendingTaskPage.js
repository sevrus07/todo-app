import TodoItem from "./TodoItem";

const PendingTaskPage = ({ todoItems }) => {
    return(
        <>
            <h3>Pending Tasks</h3>
            {
                todoItems.filter( todo => todo.status.toLowerCase() === 'pending' ).map( todo => <TodoItem name={ todo.name } status={ todo.status } type="water" /> )
            }
        </>
    )
}

export default PendingTaskPage;