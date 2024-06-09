import { model, Schema } from 'mongoose';
import { TAdmin, TAdminUserName } from './admin.interface';
import { BloodGroup, Gender } from './admin.constant';

const adminUserNameSchema = new Schema<TAdminUserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First Name is required'],
  },
  middleName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
  },
});

const adminSchema = new Schema<TAdmin>({
  id: {
    type: String,
    required: [true, 'Id is must be required'],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: adminUserNameSchema,
    required: [true, 'Name is Required'],
  },
  designation: {
    type: String,
    required: [true, 'Designation is required'],
  },
  dateOfBirth: {
    type: Date,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  gender: {
    type: String,
    enum: {
      values: Gender,
      message: `{VALUES} is not valid gender`,
    },
  },
  bloodGroup: {
    type: String,
    enum: {
      values: BloodGroup,
      message: `{VALUES} is not a valid blood Group`,
    },
  },
  contactNo: {
    type: String,
    required: [true, 'Contact no is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency Contact No is required'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present Address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent Address is required'],
  },
  profileImg: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Admin = model<TAdmin>('Admin', adminSchema);
