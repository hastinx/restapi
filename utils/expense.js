import fs from 'fs'

const dataExpense = fs.readFileSync("./expense.json")

export const getDataExpense = dataExpense

export const setExpense = (data) => {
    let arr = JSON.parse(dataExpense)
    arr.push(JSON.parse(data))

    fs.writeFileSync('./expense.json', JSON.stringify(arr))
}

export const updateExpense = (data) => {
    fs.writeFileSync('./expense.json', data)
}

