import { byIdUsers, deleteUsers, insertUsers, listUsers, updateUsers } from "../model/users.js"


export const getUsers = async (req, res) => {
    try {
        const data = await listUsers()

        console.log(data)

        res.json({
            status: 'ok',
            values: data
        })
    } catch (error) {
        console.log(error)
    }

}

export const getUsersById = async (req, res) => {
    try {
        const data = await listUsers(req.params)

        res.json({
            status: 'ok',
            values: data
        })
    } catch (error) {
        console.log(error)
    }

}

export const postUser = async (req, res) => {
    try {
        await insertUsers(req.body)

        res.json({
            status: 'ok',
            message: 'Data berhasil ditambahkan'
        })
    } catch (error) {
        res.json({
            status: 'error',
            message: error
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        await updateUsers(req.body)

        res.json({
            status: 'ok',
            message: 'Data berhasil diubah'
        })
    } catch (error) {
        res.json({
            status: 'error',
            message: error
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        await deleteUsers(req.params)

        res.json({
            status: 'ok',
            message: 'Data berhasil dihapus'
        })
    } catch (error) {
        res.json({
            status: 'error',
            message: error
        })
    }
}