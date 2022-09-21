import TodoForm from "./TodoForm";

const AddTaskPage = ({ addItemFunction }) => {
    return(
        <>
            <p>Please fill out this form to add a new task!</p>
            <TodoForm addTodoFunction={ addItemFunction } />
        </>
    )
}

export default AddTaskPage;