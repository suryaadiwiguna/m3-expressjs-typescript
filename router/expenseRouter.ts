import express, { Router, Request, Response } from 'express'
import axios from 'axios'

const router: Router = express.Router()

router.get('/', async (req, res) => {

    try {
        const expense = await axios.get('http://localhost:3001/expense')
        res.status(200).send({
            "message": "All good!",
            data: expense.data
        })
    } catch (err) {
        res.status(500).send({
            "message": JSON.stringify(err)
        })
    }
})

export default router