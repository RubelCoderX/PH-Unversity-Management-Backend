import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//for getSingleStudent
router.get('/:studentId', StudentControllers.getSingleStudent);
//for delete route
router.delete('/:studentId', StudentControllers.deleteStudent);
// for getAllStudent
router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
