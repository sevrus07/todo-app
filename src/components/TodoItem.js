
import './TodoItem.css';


const TodoItem = ({ name, status, deleteFunction, MarkAsDoneFtn }) => {
    

    return(
        <div className='item'>
            <p className='ItemName'>{ name }</p>

           
            { status.toLowerCase() === "pending" && <button onClick= { () => MarkAsDoneFtn ( name, status ) }> Mark as Done </button> }


            
            <button onClick={ () => deleteFunction(name) }>Delete</button>
        </div>
    )
}

export default TodoItem;