import express from 'express';
import { AdminControllers } from './admin.controller';
import validateRequest from '../../middleware/validRequest';
import { AdminValidations } from './admin.validation';

const router = express.Router();

router.get('/', AdminControllers.getAllAdmins);
router.get('/:id', AdminControllers.getSingleAdmin);
router.patch(
  '/:id',
  validateRequest(AdminValidations.updateAdminValidationSchema),
  AdminControllers.updateAdmins,
);
router.delete('/:id', AdminControllers.deleteAdmin);

export const AdminRouter = router;
