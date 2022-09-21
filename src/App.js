import { useState } from 'react';


import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

import { Routes, Route, Link } from 'react-router-dom';


import AddTaskPage from './components/AddTaskPage';
import TaskPage from './components/TaskPage';
import './App.css';

const App = () => {
  const initialValue = [
    { name: "Eat", status: "done" },
    { name: "Take a bath", status: "Pending" },
    { name: "Watch Videos", status: "done" }
  ];

  const [ todos, setTodo ] = useState( initialValue );

  const addTodoItem = ( newTodo ) => {
    const index = todos.findIndex( todo => todo.name.toLowerCase() === newTodo.toLowerCase() );
    if (index < 0){
      console.log( newTodo );
      const newTodoItem = { name: newTodo, status: "PENDING" };
      const currentTodo = todos.slice(0); 
      currentTodo.push( newTodoItem );    
      setTodo( currentTodo );           
    }
    else{
      alert(`Task has already been added`);
    }
  }

  const OnDeleteFunction = ( name ) => {
    alert(`To delete : ${name}`);
    const index = todos.findIndex( todo => todo.name === name );
    const currentTodo = todos.slice(0);
    todos.splice( index, 1 );
    setTodo( todos.filter( todo => todo.name !== name) );
    

  
  }
  const MarkAsDoneFunction = ( name, status ) => {
    const index = todos.findIndex( todo => todo.name === name );
    const currentTodo = todos.slice(0);
    todos.splice( index, 1 );
    setTodo( todos.filter( todo => todo.status === 'done') );
    


  }

  return(
    <>
     
        <div className='Nav'>
        <nav>
          <Link to='' className='links' >Home</Link> | 
          <Link to='pending' className='links'>Pending Task</Link> | 
          <Link to='done' className='links'>Done Task</Link> |
          <Link to='add' className='links'>Add New Task</Link>
        </nav>
        
        <Routes>
          <Route path='/' element={ 
          todos.map( todo => <TodoItem name={ todo.name } status={ todo.status } deleteFunction={OnDeleteFunction} MarkAsDoneFtn={MarkAsDoneFunction}/> )
        } /> 
          <Route path='/:status' element={ <TaskPage todoItems={ todos } deleteFunction={OnDeleteFunction} MarkAsDoneFtn={MarkAsDoneFunction} />  } />
          <Route path='/add' element={ <AddTaskPage addItemFunction={addTodoItem} /> } />
        </Routes>
        </div>

    </>
  )
}
export default App;