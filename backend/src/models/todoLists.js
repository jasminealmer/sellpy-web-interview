export const todoLists = {
  '0000000001': {
    id: '0000000001',
    title: 'First List',
    todos: ['First todo of first list!'],
  },
  '0000000002': {
    id: '0000000002',
    title: 'Second List',
    todos: ['First todo of second list!'],
  },
}

export const getAllTodoLists = () => {
  return todoLists
}

export const updateSpecificTodoList = (id, todos) => {
  todoLists[id].todos = todos
  return todoLists[id]
}
