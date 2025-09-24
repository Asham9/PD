import { Router } from 'express';
import { adminLogin, getAdminProfile, logoutAdmin } from '../controllers/authController.js';
import { adminAuth } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/admin', adminLogin);
router.get('/admin/profile', adminAuth, getAdminProfile);
router.post('/admin/logout', adminAuth, logoutAdmin);

export default router;
