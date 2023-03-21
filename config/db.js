import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import mysql from 'mysql2'
dotenv.config()

console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_NAME, process.env.DB_PORT)
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

export default db