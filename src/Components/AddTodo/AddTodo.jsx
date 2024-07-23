import {  useState } from 'react';
//import TodoDispatchContext from '../../Context/TodoDispatchContext';
//import { useDispatch } from 'react-redux';
//import { addTodo } from '../../actions/todoActions';
function AddTodo({addTodo}){

    //const dispatch=useDispatch();

const [inputText,setInputText]=useState(' ');
//const {dispatch} = useContext(TodoDispatchContext);

    return (

        <div>

            <input 
            value={inputText}
            type="text"
            placeholder="add your next todo..." 
            onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() => {
               addTodo(inputText);
                setInputText(' ');}}>Add</button>
        </div>
    )


}


export default AddTodo;