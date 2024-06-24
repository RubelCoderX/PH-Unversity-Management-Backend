import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middleware/validRequest';
import { createStudentValidation } from './student.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

//for getSingleStudent
router.get(
  '/:studentId',
  auth(USER_ROLE.admin, USER_ROLE.superAdmin, USER_ROLE.faculty),
  StudentControllers.getSingleStudent,
);
//for delete route
router.delete(
  '/:studentId',
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  StudentControllers.deleteStudent,
);
//for student update
router.patch(
  '/:studentId',
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  validateRequest(createStudentValidation.updateStudentValidationZodSchema),
  StudentControllers.updateStudent,
);
// for getAllStudent
router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.superAdmin, USER_ROLE.faculty),
  StudentControllers.getAllStudents,
);

export const StudentRoutes = router;
