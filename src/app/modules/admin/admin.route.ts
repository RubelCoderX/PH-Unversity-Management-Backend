import express from 'express';
import { AdminControllers } from './admin.controller';
import validateRequest from '../../middleware/validRequest';
import { AdminValidations } from './admin.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/', auth(USER_ROLE.superAdmin), AdminControllers.getAllAdmins);
router.get('/:id', auth(USER_ROLE.superAdmin), AdminControllers.getSingleAdmin);
router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin),
  validateRequest(AdminValidations.updateAdminValidationSchema),
  AdminControllers.updateAdmins,
);
router.delete('/:id', auth(USER_ROLE.superAdmin), AdminControllers.deleteAdmin);

export const AdminRouter = router;
