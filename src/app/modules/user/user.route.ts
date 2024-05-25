import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middleware/validRequest';
import { createStudentValidation } from '../student/student.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidation.createStudentValidationZodSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
