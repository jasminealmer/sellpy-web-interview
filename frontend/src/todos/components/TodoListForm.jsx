import AddIcon from '@mui/icons-material/Add'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import { Todo } from './Todo'

export const TodoListForm = ({ todoList, saveTodoList }) => {
  const [todos, setTodos] = useState(todoList.todos)
  const timeout = useRef(null)

  useEffect(() => {
    clearTimeout(timeout.current)

    timeout.current = setTimeout(() => {
      saveTodoList(todoList.id, { todos })
    }, 1000)
  }, [todos])

  const handleSubmit = (event) => {
    event.preventDefault()
    saveTodoList(todoList.id, { todos })
  }

  const allTodosCompleted = () => {
    return todos.every((todo) => todo.completed)
  }

  return (
    <Card sx={{ margin: '0 1rem' }}>
      <CardContent>
        <Typography component='h2'>{todoList.title}</Typography>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
        >
          {todos.map((_, index) => (
            <Todo key={index} index={index} todos={todos} setTodos={setTodos} />
          ))}
          {allTodosCompleted() && (
            <Typography padding={'1rem'} variant='h6'>
              All todos completed. Nice work!
            </Typography>
          )}
          <CardActions>
            <Button
              type='button'
              color='primary'
              onClick={() => {
                setTodos([...todos, ''])
              }}
            >
              Add Todo <AddIcon />
            </Button>
            <Button type='submit' variant='contained' color='primary'>
              Save
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  )
}
