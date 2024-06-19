import express from 'express';
import { CourseControllers } from './course.controller';
import validateRequest from '../../middleware/validRequest';
import { CourseValidation } from './course.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-course',
  auth(USER_ROLE.admin),
  validateRequest(CourseValidation.createCourseValidationSchema),
  CourseControllers.createCourse,
);
router.get('/', CourseControllers.getAllCourses);
router.get(
  '/:id',
  auth('student', 'faculty', 'admin'),
  CourseControllers.getSingleCourse,
);
router.patch(
  '/:id',
  auth('admin'),
  validateRequest(CourseValidation.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);
router.delete('/:id', auth('admin'), CourseControllers.deleteCourse);

// Assign Faculties route for course
router.put(
  '/:courseId/assign-faculties',
  validateRequest(CourseValidation.assignFacultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourses,
);
router.delete(
  '/:courseId/remove-faculties',
  CourseControllers.removeAssignFacultiesWithCourse,
);
export const CourseRoutes = router;
