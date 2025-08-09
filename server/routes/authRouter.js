import { Router } from 'express'
const router=Router();

import {adminLogin} from '../controllers/authController.js'

router.post('/admin',adminLogin)



export default router;