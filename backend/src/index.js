import express from 'express'
import cors from 'cors'
import todoListsRoute from './routes/todoLists.route.js'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3001

app.get('/', (req, res) => res.send('Hello Sellpy Todo App!'))

app.use('/todo-lists', todoListsRoute)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
