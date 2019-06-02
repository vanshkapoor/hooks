import React,{useState} from 'react';
import styled from 'styled-components';
import './App.css';
import Button from './common/Button';

function Todo({todo,index,completedTodo,removeTodo})
{
  return <div className="todo" 
    style={{ textDecoration:todo.isCompleted ? 'line-through' : ''}}>
    {todo.text}
    <div> <Button onClick={() => completedTodo(index)}> completed </Button></div>
    <div> <Button onClick={() => removeTodo(index)}> deleted </Button></div>
    </div>;
}



function TodoForm({addTodo}){
  const [value,setValue] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} className="input" onChange={e => setValue(e.target.value)} placeholder="add a todo..."/>
    </form>
  )
}



function App()
{
  const [todos, setTodos] = useState([
    {
      text:'xyz',
      isCompleted:false
    },
    {
      text:'abe',
      isCompleted:false
    },
    {
      text:'pqr',
      isCompleted:false
    }
    ]);


const addTodo = text =>{
  const newTodos = [...todos,{text}];
  setTodos(newTodos);
}

const completedTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
}

const removeTodo = index =>{
  const newTodos = [...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
}
const Container = styled.div`
  text-align:center;
`


return(
<Container>
  <div className="app">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo 
          key={index} 
          index={index} 
          todo={todo} 
          completedTodo={completedTodo}
          removeTodo={removeTodo}
          />
        ))}

        <TodoForm addTodo={addTodo} />
    </div>
  </div>
</Container>
  )
}

export default App;