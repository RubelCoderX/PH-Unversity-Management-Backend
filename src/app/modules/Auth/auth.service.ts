import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import bcrypt from 'bcrypt';

const createLoginUser = async (payload: TLoginUser) => {
  // checking if the user is exist

  const user = await User.isUserExistsByCustomId(payload.id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This User is not Found');
  }
  // // checking is the user is already soft deleted
  const isDelete = isUserExist?.isDeleted;
  if (isDelete) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted');
  }
  // // if the user is blocked
  const userStatus = isUserExist?.status;
  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked!');
  }
  // checking if the password is correct
  if (!(await User.isPasswordMatched(payload.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched !');
  }
  // Access Granted : send AccessToken, refresh token

  return {};
};

export const AuthServices = {
  createLoginUser,
};
