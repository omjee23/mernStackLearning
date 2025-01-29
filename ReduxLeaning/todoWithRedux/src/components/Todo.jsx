import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo , markAsDone} from "../features/todo/todoSlice";

export default function Todo(){
    const todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();
    console.log(todos);
    const deleteHandler = (id)=>{
        console.log('delete' , id);
        dispatch((deleteTodo(id)));    
    }
    const MarkHandler = (id)=>{
        dispatch((markAsDone(id)));
    }
    return(
        <>
        <AddForm/>
        <h3>Todo Heading</h3>
        {
            todos.map((todo)=>{
                return(
                    <li 
                    key={todo.id}
                    style={{textDecoration: todo.isDone? "line-through" : "none"}}
                    >{todo.task}
                    <button onClick={()=> deleteHandler(todo.id)}>Delete</button>
                    <button onClick={()=> MarkHandler(todo.id)}>Mark As Done</button>
                    </li>
                )
            })
        }
        </>
    )
}