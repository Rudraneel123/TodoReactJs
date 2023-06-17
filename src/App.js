import React, { useState } from 'react'
import'./App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import Card from '@mui/material/Card';

function App() {
  const[listTodo,setListTodo]=useState([]);
  let addList=(inputText)=>{
    //add Input text i.e., todo to existing todos ,so we use spread operator to copy array
    if(inputText !== '')
    setListTodo([...listTodo,inputText]);
  }
  const deleteListItem =(key)=> {
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])
  }
  return (
   
 <div className='main-container'>

  <div className='center-container'>
    <Card sx={{height: 'auto',
    width: 'auto',
    paddingLeft:3,
    paddingRight: 12,
    paddingBottom: 10,
    paddingTop: 7,
    boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'pink',
    }}>
  <TodoInput addList={addList}/>
  <h1 className='app-heading'>TODO</h1>
  <hr/>
  {listTodo.map((listItem,i)=>{
    return (
      <TodoList  key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
    )
  })}
  </Card>
  </div>
  
 </div>
 
  );
}

export default App