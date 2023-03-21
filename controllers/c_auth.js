import { list } from "../model/users.js"


export const getUsers = async (req, res) => {
    try {
        const data = await list()

        console.log(data)

        res.json({
            status: 'ok',
            values: data
        })
    } catch (error) {
        console.log(error)
    }

}