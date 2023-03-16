import express from 'express'
import { deleteMobil, getMobil, patchMobil, postMobil, putMobil } from '../controllers/c_mobil.js';
const router = express.Router()

router.get('/mobil', getMobil)
router.post('/mobil', postMobil)
router.put('/mobil', putMobil)
router.patch('/mobil', patchMobil)
router.delete('/mobil', deleteMobil)

export default router;