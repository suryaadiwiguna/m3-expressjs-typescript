import express, { Router, Request, Response } from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'

const router: Router = express.Router()
const jsonParser = bodyParser.json()

router.route('/')
    .get(async (req: Request, res: Response) => {
        try {
            const expense = await axios.get('http://localhost:3001/expenses')
            res.status(200).send({
                "message": "ok",
                data: expense.data
            })
        } catch (err) {
            res.status(500).send({
                "message": JSON.stringify(err)
            })
        }
    })
    .post(jsonParser, async (req: Request, res: Response) => {

        const { name, nominal, category } = req.body

        try {
            const newExpense = await axios.post('http://localhost:3001/expenses', {
                name: name,
                nominal: nominal,
                category: category
            })

            res.status(200).send({
                message: "OK",
                data: newExpense.data
            })

        } catch (err) {
            res.status(500).send(JSON.stringify(err))
        }


    })

router.route('/:id')
    .get(async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            // console.log(id)
            const expenseDetail = await axios.get(`http://localhost:3001/expenses/${id}`)
            res.status(200).send({
                "messages": "ok",
                "data": expenseDetail.data
            })
        } catch (err: any) {
            res.send({
                "messages": "failed",
                "details": JSON.stringify(err?.message)
            })
        }
    })
    .put(jsonParser, async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, nominal, category } = req.body

        try {
            const updateExpense = await axios.put(`http://localhost:3001/expenses/${id}`, {
                name: name,
                nominal: nominal,
                category: category
            })
            res.status(200).send({
                "messages": "ok",
                "data": updateExpense.data
            })
        } catch (err: any) {
            res.send({
                "messages": "failed",
                "details": JSON.stringify(err?.message)
            })
        }
    })

export default router