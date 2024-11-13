export const fetchTodoLists = async (setTodoLists) => {
  await fetch('http://localhost:3001/todo-lists', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => setTodoLists(data))
    .catch((error) => console.error('Error:', error))
}

export const saveTodoList = async (id, { todos }) => {
  try {
    await fetch(`http://localhost:3001/todo-lists/${id}`, {
      body: JSON.stringify(todos),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
    })
  } catch (error) {
    console.error('Error: ', error)
  }
}
