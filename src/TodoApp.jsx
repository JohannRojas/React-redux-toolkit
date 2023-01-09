import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/api'

export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery()

  const [todoId, setTodoId] = useState(1)
  const { data: todo = [], isLoading } = useGetTodoByIdQuery(todoId)

  const handlePrevTodo = () => {
    setTodoId(todoId - 1)
  }

  const handleNextTodo = () => {
    setTodoId(todoId + 1)
  }

  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

      <pre>{ JSON.stringify(todo) }</pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong> {todo.completed ? 'Done ' : 'Pending '}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}

      <button onClick={() => handlePrevTodo()}>
        Prev Todo
      </button>
      <button onClick={ () => handleNextTodo()}>
        Next Todo
      </button>
    </>
  )
}