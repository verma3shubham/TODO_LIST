

//import { useReducer , useState } from 'react';
import { useDispatch } from 'react-redux';
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/TodoList/TodoList'
import { bindActionCreators } from 'redux';
//import TodoContext from './Context/TodoContext';
//import todoReducer from './Reducers/todoReducer';
//import TodoDispatchContext from "./Context/TodoDispatchContext";
import { addTodo,todoDelete,todoEdit,todoFinished } from './actions/todoActions';
function App() {

  const dispatch = useDispatch();
  const actions=bindActionCreators({addTodo,todoDelete,todoEdit,todoFinished },dispatch);
  
  //const [list,setList]=useState([
   // {id:1,todoData:'todo 1',finished:false},
    //{id:2,todoData:'todo 2',finished:false},
  //]);

 // const [list,dispatch] = useReducer(todoReducer ,[]);
  
  

  return (
    <>
      <AddTodo addTodo={actions.addTodo}  />
      <TodoList todoDelete={actions.todoDelete} todoEdit={actions.todoEdit} todoFinished={actions.todoFinished}/>

      </>
    
  )
}

export default App
