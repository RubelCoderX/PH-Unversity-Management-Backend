import { UserService } from './user.service';
import sendResponse from '../../utils/sendRespons';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;

  const result = await UserService.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is Created Successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
