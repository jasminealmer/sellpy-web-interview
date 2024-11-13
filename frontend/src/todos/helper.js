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
