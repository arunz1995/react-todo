import {useState} from 'react'
import { Link } from "react-router-dom"


const List = () => {
    const [userName,setUserName] =useState('');
    const[todoList,setTodoList]=useState([]);
    const[todo,setTodo]=useState('');
    const loadData =() => {
        fetch(`http://192.168.1.48:8086/todos/${userName}`)
        .then(res=> res.json())
        .then(data =>{
            setTodoList(data.todos);
        }).catch(err =>{
            alert("oops!!!! Invalid user name..Please try again");
        });

    }
    const addTodo =() =>{
        let data ={
            user:userName,
            todos:[
                ...todoList,
                {text:todo,status:true}
            ]
        }
        updateData(data)
    }
    const switchActive =(id)=> {
        const newList=todoList.map(todo=>{
            if(todo._id===id){
                todo.status =!todo.status;
             
            }
           return todo;
        });
        let data={
            user:userName,
            todos:newList
        }
        updateData(data)
    }
    const updateData=(data) =>{
        fetch(`http://192.168.1.48:8086/todos`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>res.json())
        .then(data =>{
            setTodoList(data.todos);
        })
       }

return (
    <div>
        <header>
            <input type="text"
            placeholder='User Name'
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            />
            <button onClick={loadData}>
                    Submit
                </button>

        </header>
        <main>
                <div className="add-todo">
                    <input
                    type="text"
                    value={todo}
                    onChange={(e)=>setTodo(e.target.value)}
                    />
                    <button onClick={addTodo}>Add</button>
                    
                    </div>
                    {todoList.map(todo =>(
                   <div key={todo._id}className={todo.status?"online":"offline"}
                       onClick={()=>switchActive(todo._id)}
                       >
                   <p>{todo.text}</p> 
                   </div>
                ))}
                    </main>
        </div>
)
}

export default List