import express, { Request, Response } from 'express'

const PORT: number = 3002
const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send("Hi, there!")
})

app.listen(PORT, () => {
    console.log('server started on port ' + PORT)
})