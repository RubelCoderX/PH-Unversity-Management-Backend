import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middleware/validRequest';
import { createStudentValidation } from '../student/student.validation';
import { FacultyValidations } from '../faculty/faculty.validation';
import { AdminValidations } from '../admin/admin.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidation.createStudentValidationZodSchema),
  UserControllers.createStudent,
);
router.post(
  '/create-faculty',
  validateRequest(FacultyValidations.createFacultyValidationSchema),
  UserControllers.createFaculty,
);
router.post(
  '/create-admin',
  validateRequest(AdminValidations.createAdminVaditionSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
