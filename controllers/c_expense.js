import { action } from "../utils/action.js"


export const getExpense = (req, res) => {
    const { id, startdate, enddate, category } = req.query
    if (id) {
        res.json(action.getExpenseById(id))
    } else if (startdate && enddate) {
        res.json(action.getExpenseByDate(startdate, enddate))
    } else if (category) {
        res.json(action.getExpenseByCategory(category))
    } else {
        res.json(action.getExpense())
    }
}

export const postExpense = (req, res) => {
    res.json(action.postExpense(req.body))
}

export const editExpense = (req, res) => {
    const { id, name, nominal, category } = req.body
    res.json(action.editExpense(id, name, nominal, category))
}

export const deleteExpense = (req, res) => {
    let id = Number(req.params.id)
    res.json(action.deleteExpense(id))
}