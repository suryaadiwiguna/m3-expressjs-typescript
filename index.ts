import express, { Request, Response } from 'express'
import expenseRouter from "./router/expenseRouter"

const PORT: number = 3002
const app = express()

app.use('/expense', expenseRouter)
app.get('/', (req: Request, res: Response) => {
    res.send("Hi, there!")
})

app.listen(PORT, () => {
    console.log('server started on port ' + PORT)
})