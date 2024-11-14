export const todoLists = {
  '0000000001': {
    id: '0000000001',
    title: 'First List',
    todos: [
      { todoTitle: 'First todo of first list!', completed: false },
      { todoTitle: 'Sellpy case', completed: true },
    ],
  },
  '0000000002': {
    id: '0000000002',
    title: 'Second List',
    todos: [{ todoTitle: 'First todo of second list!', completed: false }],
  },
}

export const getAllTodoLists = () => {
  return todoLists
}

export const updateSpecificTodoList = (id, todos) => {
  todoLists[id].todos = todos
  return todoLists[id]
}
