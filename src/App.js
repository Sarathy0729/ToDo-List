
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './Todo';
import FormComponent from './formtodo';
import { Card, CardBody } from 'react-bootstrap';
function App() {
  const [todos , setTodos] =useState([
    {
      text: 'Learn about Reactjs',
      isDone : false
    }

  ]);
  console.log([ setTodos]);
  const addTodo = (text) => {
    const newTodos =[...todos,{text , isDone: false}];
    setTodos(newTodos);
  }
  const markTodo = (index) => {
    const newTodos =[...todos];
    newTodos[index].isDone=!newTodos[index].isDone;
    setTodos(newTodos);
  }
  const deleteTodo = (index) => {
    const newTodos =[...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className='container'>
        <h1 className="text-center mb-4">ToDO-List</h1>
        <FormComponent addTodo={addTodo}/>
        <br />
        <div className="todos">
          {
            todos.map((todo,index) => (
              
              <Card>
                <CardBody>
                  <Todo  todo={todo} index={index} markTodo={markTodo}
                  deleteTodo={deleteTodo}/>
                  


                </CardBody>
              </Card>
            ))
          }
        </div>
      </div>
    
    </div>
  )
}
 export default App;