
import {  useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
//import TodoContext from "../../Context/TodoContext";
//import { useContext } from 'react';
//import TodoDispatchContext from '../../Context/TodoDispatchContext';
function TodoList({addTodo,todoDelete,todoEdit,todoFinished }){


    //const dispatch=useDispatch();

    const list = useSelector((state) => state.todo);

   // const {list} = useContext(TodoContext);
    //const {dispatch}=useContext(TodoDispatchContext)

    function onFinished(todo,isFinished){

        todoFinished(todo,isFinished);
        
        //dispatch({type:'finish_todo',payload:{todo,isFinished:isFinished}})

    }

    function onDelete(todo){


        todoDelete(todo);
       // dispatch({type:'delete_todo',payload:{todo}})

}
    function onEdit(todo,todoText){


        todoEdit(todo,todoText);
        //dispatch({type:'edit_todo',payload:{todo,todoText}})
    }

    
    return (

        <div>
            {list.length>0 && 
            list.map(todo => <Todo 
                                    key={todo.id} 
                                    id={todo.id} 
                                    isFinished={todo.finished} 
                                    todoData={todo.todoData}  
                                    changeFinished={(isFinished) =>  onFinished(todo,isFinished)}
                                    onDelete={() => onDelete(todo)
                                        
                                    }
                                    onEdit={(todoText) => onEdit(todo,todoText)
                                        
                                    
                                }
                                    
                    />)}
        </div>
    );

}
export default TodoList;