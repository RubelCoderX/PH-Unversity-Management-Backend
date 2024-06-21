import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';

import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { FacultyRouter } from '../modules/faculty/faculty.route';
import { AdminRouter } from '../modules/admin/admin.route';
import { CourseRoutes } from '../modules/course/course.route';
import { SemesterRegistrationRouters } from '../modules/semesterRegistration/semesterRegistration.route';
import { OfferedCourseRouter } from '../modules/OfferedCourse/OfferedCourse.route';
import { AuthRouters } from '../modules/Auth/auth.route';
import { EnrolledCourseRoutes } from '../modules/enrolledCourse/enrolledCourse.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRouter,
  },
  {
    path: '/admins',
    route: AdminRouter,
  },
  {
    path: '/courses',
    route: CourseRoutes,
  },
  {
    path: '/semester-registration',
    route: SemesterRegistrationRouters,
  },
  {
    path: '/offered-course',
    route: OfferedCourseRouter,
  },
  {
    path: '/auth',
    route: AuthRouters,
  },
  {
    path: '/enroll-courses',
    route: EnrolledCourseRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
