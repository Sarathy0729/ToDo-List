import React from 'react'
import { Button } from 'react-bootstrap'

function Todo({todo, index, markTodo,deleteTodo}) {
  const {text ,isDone} =todo;
  return (
    <div className='todo'>
        <span style={{ textDecoration: isDone ? 'line-through ': ''}}>{todo.text}</span>
        <div className='todobutton'>
        <Button onClick={()=>markTodo(index)}>{isDone ? 'NotDone' : 'Done'}</Button>
        <Button variant='danger' onClick={()=>deleteTodo(index)}>Delete</Button>
        </div>

        </div>
  )
}

export default Todo