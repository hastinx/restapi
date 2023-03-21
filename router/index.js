import express from 'express'
import { getUsers } from '../controllers/c_auth.js';
import { deleteExpense, editExpense, getExpense, postExpense } from '../controllers/c_expense.js';
import { deleteMobil, getMobil, patchMobil, postMobil, putMobil } from '../controllers/c_mobil.js';
const router = express.Router()

router.get('/mobil', getMobil)
router.post('/mobil', postMobil)
router.put('/mobil', putMobil)
router.patch('/mobil', patchMobil)
router.delete('/mobil', deleteMobil)


//Expense

router.get('/expense', getExpense)
router.post('/expense', postExpense)
router.patch('/expense', editExpense)
router.delete('/expense/:id', deleteExpense)

//Users

router.get('/users', getUsers)

export default router;