import { getDataExpense, setExpense, updateExpense } from "../utils/expense.js"
import { action } from "../utils/action.js"
import { formatDate } from "../utils/formatDate.js"



export const getExpense = (req, res) => {
    console.log('======================================================================== GET ========================================================================')
    const { id, startdate, enddate, category } = req.query

    if (id) {
        res.json(action.getExpenseById)
    } else if (startdate && enddate) {
        res.json(action.getExpenseByDate(startdate, enddate))
    } else if (category) {
        res.json(action.getExpenseByCategory(category))
    } else {
        res.json(action.getExpense())
    }

}

export const postExpense = (req, res) => {
    console.log('======================================================================== POST ========================================================================')

    res.json(action.postExpense(req.body))

}

export const editExpense = (req, res) => {
    console.log('======================================================================== PATCH ID ' + req.body.id + ' ========================================================================')

    const { id, name, nominal, category } = req.body
    res.json(action.editExpense(id, name, nominal, category))

}

export const deleteExpense = (req, res) => {
    console.log('======================================================================== DELETE ID ' + req.params.id + ' ========================================================================')

    let id = Number(req.params.id)
    res.json(action.deleteExpense(id))
}