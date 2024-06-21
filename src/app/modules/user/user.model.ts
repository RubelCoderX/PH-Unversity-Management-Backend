/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { UserStatus } from './user.constant';

const userSchema = new Schema<TUser, UserModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangesAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: ['superAdmin', 'admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: UserStatus,
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook : we will save the data');
  const user = this; // this refer kore document ka
  // hsahing password and save into db
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

//set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  // console.log(this, 'post hook : we saved our data');

  next();
});

// Static method to check if a user exists by custom ID
userSchema.statics.isUserExistsByCustomId = async function (id: string) {
  return await User.findOne({
    id,
  }).select('+password');
};
// Static method to check if the password matches
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};
// check jwt issued Before Password Changed
userSchema.statics.isJwtIssuedBeforePasswordChanged = async function (
  passwordChangedTimeStamp: Date,
  jwtIssuedTimestamp: number,
) {
  const passwordChangedTime =
    new Date(passwordChangedTimeStamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const User = model<TUser, UserModel>('User', userSchema);
