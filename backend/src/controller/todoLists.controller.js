import { getAllTodoLists } from '../models/todoLists.js'
import { updateSpecificTodoList } from '../models/todoLists.js'

const getTodoLists = (req, res) => {
  try {
    return res.status(200).json(getAllTodoLists())
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateTodoList = (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req

    res.status(200).json(updateSpecificTodoList(id, body))
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { getTodoLists, updateTodoList }
