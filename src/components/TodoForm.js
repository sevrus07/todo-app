import { useState } from "react";
import { useNavigate } from 'react-router';

const TodoForm = ({ addTodoFunction }) => {
    const [ todo, updateTodo ] = useState('');

    const navigate = useNavigate();

    const addItemFunction = (e) => {
        e.preventDefault();

   
        addTodoFunction( todo );
        updateTodo('');

    
        navigate('/pending');
    }


    return(
        <>
            <form>
                <input type='text' value={ todo } onChange={ e => updateTodo(e.target.value) } />
                <button onClick={ () => updateTodo('') }>Clear</button>
                <button onClick={ (e) => addItemFunction(e) }>Submit</button>
                
            </form>
        </>
    )
}

export default TodoForm;