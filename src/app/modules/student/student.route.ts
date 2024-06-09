import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middleware/validRequest';
import { createStudentValidation } from './student.validation';

const router = express.Router();

//for getSingleStudent
router.get('/:studentId', StudentControllers.getSingleStudent);
//for delete route
router.delete('/:studentId', StudentControllers.deleteStudent);
//for student update
router.patch(
  '/:studentId',
  validateRequest(createStudentValidation.updateStudentValidationZodSchema),
  StudentControllers.updateStudent,
);
// for getAllStudent
router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
