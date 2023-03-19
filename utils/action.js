import { getDataExpense, setExpense, updateExpense } from "./expense.js"


let expense = JSON.parse(getDataExpense)
export const action = {
    getExpense() {
        return {
            status: 200,
            values: expense
        }
    },
    getExpenseByDate(start, end) {
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
        let found = expense.filter(i => (i.category).toLowerCase() === category.toLowerCase())
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
        let found = expense.find(i => i.id === Number(id))
        let expenseById = []
        expenseById.push(found)
        return {
            status: 200,
            values: expenseById
        }
    },
    postExpense(data) {
        const newId = expense.length + 1
        const newExpense = {
            id: newId,
            ...data,
            created_at: formatDate(Date.now()),
        }
        setExpense(JSON.stringify(newExpense))
        return {
            status: 200,
            message: "Data insert success"
        }
    },
    editExpense(id, name, nominal, category) {
        let index = expense.findIndex((i) => i.id === id);
        let found = expense.find(i => i.id === id)
        if (name !== undefined) found.name = name;
        if (nominal !== undefined) found.nominal = nominal;
        if (category !== undefined) found.category = category;
        found.updated_at = formatDate(Date.now())

        expense.splice(index, 1, found)

        updateExpense(JSON.stringify(expense))
        if (index === 1) {
            return {
                status: 201,
                message: "Data update success"
            }
        } else {
            return {
                status: 404,
                message: "Data not found"
            }
        }

    },
    deleteExpense(id) {
        let deleteExpense = JSON.parse(getDataExpense)
        let index = deleteExpense.findIndex((i) => i.id === id);

        deleteExpense.splice(index, 1)
        console.log(deleteExpense)
        updateExpense(JSON.stringify(deleteExpense))
        if (index == 1) {
            return {
                status: 200,
                message: "Data delete success"
            }
        } else {
            return {
                status: 404,
                message: "Data not found"
            }
        }

    }
}