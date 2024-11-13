import express from 'express'
import { getTodoLists, updateTodoList } from '../controller/todoLists.controller.js'

const router = express.Router()

router.get('/', getTodoLists)
router.patch('/:id', updateTodoList)

export default router
