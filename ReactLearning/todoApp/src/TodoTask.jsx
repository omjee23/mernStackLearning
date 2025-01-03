import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function AddTodo(){
    const [task, setTask] = useState([{todo: 'sample' , id : uuidv4(), isDone: false}]);
    const [newTask , setNewTask] = useState('');

    function addTask(){
        setTask((prevousTodo) =>{
            return ([...prevousTodo , {id:uuidv4(), todo: newTask , isDone: false}])
        });
        setNewTask("")
    }
    function updateValue(event){
        setNewTask(event.target.value);
    }

    function deleteTask(id){
       setTask(task.filter((todo)=>(todo.id != id)))   
    }
    function upperCaseAll(){
        setTask((previousTodo)=>(previousTodo.map((newTodo)=>{
            return {
                ...newTodo, todo: newTodo.todo.toUpperCase()
            }
        })))
    }
    function UpperOne(id){
        setTask((previousTodo)=>(previousTodo.map((newtodo)=>{
            if(newtodo.id === id){
                return{
                    ...newtodo, todo: newtodo.todo.toUpperCase()
                }
            }
            else{
                return newtodo;
            }
        })))
    }

    function markAsDone(id){
        setTask((previousTodo) => (previousTodo.map((newTodo)=>{
            if(newTodo.id === id){
                return {
                    ...newTodo, isDone: true                }
            }else{
                return newTodo;
            }
        })))
    }
    function markAllDone(){
        setTask((prevousTodo) =>(prevousTodo.map((task)=>{
            return{
                ...task, isDone : true
            }
        })))
    }
    return(
        <>
        <div>
            <h2>To Do App</h2>
            <div>
                <input type="text" placeholder="Add Task" value={newTask} onChange={updateValue}/>
                <button onClick={addTask}>Add</button>
            </div>
            <br />
            <br />
            <br />
            <hr />
            <div>
                <ul>
                    {
                        task.map((item)=>(
                            <li key={item.id}>
                                <span style={item.isDone? {textDecorationLine: "line-through"} :{}}>{item.todo}</span>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={()=>deleteTask(item.id)}>Delete</button>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={()=>UpperOne(item.id)}>UpperOne</button>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={()=>markAsDone(item.id)}>Mark as Done</button>
                            </li>
                        ))
                    }
                </ul>
                <br />
                <br />
                <button onClick={upperCaseAll}>UpperCase All</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={markAllDone}>Mark All Done</button>
            </div>
        </div>
        </>
    )
} 

export default AddTodo;