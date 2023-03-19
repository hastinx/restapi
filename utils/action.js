import { getDataExpense, setExpense, updateExpense } from "./expense.js"
import { formatDate } from "./formatDate.js"


let expense = JSON.parse(getDataExpense)
export const action = {
    getExpense() {
        console.log('======================================================================== GET ========================================================================')
        return {
            status: 200,
            values: expense
        }
    },
    getExpenseByDate(start, end) {
        console.log('======================================================================== GET BY DATE ========================================================================')
        let found = expense.filter(i => new Date(i.created_at) >= new Date(start) && new Date(i.created_at) <= new Date(end))
        let sum = 0
        found.map(i => sum += i.nominal)
        if (found.length !== 0) {
            return {
                status: 200,
                values: {
                    expense: found,
                    total_expense: sum
                }
            }
        } else {
            return {
                status: 404,
                message: "Data not found"
            }
        }

    },
    getExpenseByCategory(category) {
        console.log('======================================================================== GET BY CATEGORY ========================================================================')
        let found = expense.filter(i => (i.category).toLowerCase() === category.toLowerCase())
        console.log(found)
        let sum = 0
        found.map(i => sum += i.nominal)
        if (found.length !== 0) {
            return {
                status: 200,
                values: {
                    expense: found,
                    total_expense: sum
                }
            }
        } else {
            return {
                status: 404,
                message: "Data not found"
            }
        }
    },
    getExpenseById(id) {
        console.log('======================================================================== GET BY ID ========================================================================')
        let found = expense.find(i => i.id === Number(id))
        let expenseById = []
        expenseById.push(found)
        if (found !== undefined) {
            return {
                status: 200,
                values: expenseById
            }
        } else {
            return {
                status: 404,
                message: "Data not found"
            }
        }
    },
    postExpense(data) {
        console.log('======================================================================== POST ========================================================================')
        let found = expense.find(i => (i.name).toLowerCase() === data.name.toLowerCase())
        console.log(found)
        const newId = expense.length + 1
        const newExpense = {
            id: newId,
            ...data,
            created_at: formatDate(Date.now()),
        }

        if (found === undefined) {
            setExpense(JSON.stringify(newExpense))
            return {
                status: 200,
                message: "Data insert success"
            }
        } else {
            return {
                status: 405,
                message: "Data already exist"
            }
        }
    },
    editExpense(id, name, nominal, category) {
        console.log('======================================================================== PATCH ========================================================================')
        let index = expense.findIndex((i) => i.id === id);
        let found = expense.find(i => i.id === id)
        if (name !== undefined) found.name = name;
        if (nominal !== undefined) found.nominal = nominal;
        if (category !== undefined) found.category = category;
        found.updated_at = formatDate(Date.now())

        expense.splice(index, 1, found)


        if (index === -1) {
            return {
                status: 404,
                message: "Data not found"
            }
        } else {
            updateExpense(JSON.stringify(expense))
            return {
                status: 201,
                message: "Data update success"
            }
        }

    },
    deleteExpense(id) {
        console.log('======================================================================== DELETE ========================================================================')
        let deleteExpense = JSON.parse(getDataExpense)
        let index = deleteExpense.findIndex((i) => i.id === id);

        deleteExpense.splice(index, 1)
        console.log(deleteExpense)

        if (index === -1) {
            return {
                status: 404,
                message: "Data not found"
            }

        } else {
            updateExpense(JSON.stringify(deleteExpense))
            return {
                status: 200,
                message: "Data delete success"
            }
        }

    }
}