import express from 'express';
import { CourseControllers } from './course.controller';
import validateRequest from '../../middleware/validRequest';
import { CourseValidation } from './course.validation';

const router = express.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidation.createCourseValidationSchema),
  CourseControllers.createCourse,
);
router.get('/', CourseControllers.getAllCourses);
router.get('/:id', CourseControllers.getSingleCourse);
router.patch(
  '/:id',
  validateRequest(CourseValidation.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);
router.delete('/:id', CourseControllers.deleteCourse);

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
