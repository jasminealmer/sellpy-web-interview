import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Checkbox, TextField, Typography } from '@mui/material'
import React from 'react'

export const Todo = ({ index, todos, setTodos }) => {
  const todo = todos[index]

  const handleOnChange = (event) => {
    const { value, checked, type, name } = event.target

    const newValue = type === 'checkbox' ? checked : value

    setTodos([
      // immutable update
      ...todos.slice(0, index),
      { ...todo, [name]: newValue },
      ...todos.slice(index + 1),
    ])
  }

  const handleOnDelete = () => {
    setTodos([
      // immutable delete
      ...todos.slice(0, index),
      ...todos.slice(index + 1),
    ])
  }

  return (
    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox name='completed' checked={todo.completed || false} onChange={handleOnChange} />
      <Typography sx={{ margin: '8px' }} variant='h6'>
        {index + 1}
      </Typography>
      <TextField
        name='todoTitle'
        sx={{ flexGrow: 1, marginTop: '1rem' }}
        label='What to do?'
        value={todo.todoTitle || ''}
        onChange={handleOnChange}
      />
      <Button sx={{ margin: '8px' }} size='small' color='secondary' onClick={handleOnDelete}>
        <DeleteIcon />
      </Button>
    </div>
  )
}
