import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const[todos, setTodos] = useState([]);
const[text ,setText] = useState("");
const[indexNum , SetindexNum] = useState();
let add = () => {
  if(indexNum > -1){
    todos[indexNum] = text;
    setTodos([...todos]);
    SetindexNum(-1);
  }
  else{todos.push(text);
  setTodos([...todos]);
  }  
  setText("");
}
let del = (i) =>{
  todos.splice(i,1);
  setTodos([...todos])
}
let edit = (i) => {
  SetindexNum(i);
  setText(todos[i])
}
return(
<div className='App'>
  <h1>Todo App</h1>
  <input type="text" placeholder='Your Text' value={text} onChange={(e) => setText(e.target.value)} />
  <button onClick={add}>Add</button>
  {todos.map((x,i) => {
    return(
    <li key={i}>
      {x}
      <button onClick={() => del(i)}>Delete</button>
      <button onClick={() => edit(i)}>Edit</button>

    </li>
    )
  })}
</div>
)
}

export default App;
