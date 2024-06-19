import express from 'express';
import { FacultyControllers } from './faculty.controller';
import validateRequest from '../../middleware/validRequest';
import { FacultyValidations } from './faculty.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.faculty),
  FacultyControllers.getAllFaculties,
);
router.get('/:id', FacultyControllers.getSingleFaculty);
router.patch(
  '/:id',
  validateRequest(FacultyValidations.updateFacultyValidationSchema),
  FacultyControllers.updateFaculties,
);
router.delete('/:id', FacultyControllers.deleteFaculty);

export const FacultyRouter = router;
