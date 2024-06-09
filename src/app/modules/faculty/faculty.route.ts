import express from 'express';
import { FacultyControllers } from './faculty.controller';
import validateRequest from '../../middleware/validRequest';
import { FacultyValidations } from './faculty.validation';

const router = express.Router();

router.get('/', FacultyControllers.getAllFaculties);
router.get('/:id', FacultyControllers.getSingleFaculty);
router.patch(
  '/:id',
  validateRequest(FacultyValidations.updateFacultyValidationSchema),
  FacultyControllers.updateFaculties,
);
router.delete('/:id', FacultyControllers.deleteFaculty);

export const FacultyRouter = router;
