import { Types } from 'mongoose';

export type TGrade = 'O' | 'A' | 'A+' | 'B' | 'B+' | 'P' | 'F' | 'NA';

export type TErolledCourseMarks = {
  classTest1: number;
  midTerm: number;
  classTest2: number;
  finalTerm: number;
};

export type TEnrolledCourse = {
  semesterRegistration: Types.ObjectId;
  academicSemester: Types.ObjectId;
  academicFaculty: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  offeredCourse: Types.ObjectId;
  course: Types.ObjectId;
  student: Types.ObjectId;
  faculty: Types.ObjectId;
  isEnrolled: boolean;
  courseMarks: TErolledCourseMarks;
  grade: TGrade;
  gradePoints: number;
  isCompleted: boolean;
};
