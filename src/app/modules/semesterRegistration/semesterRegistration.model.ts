import mongoose, { model, Schema } from 'mongoose';
import { TcreateSemesterRegistration } from './semesterRegistration.interface';
import { semesterRegistrationStatus } from './semesterRegistration.constrant';

const semesterRegistrationSchema =
  new mongoose.Schema<TcreateSemesterRegistration>(
    {
      academicSemester: {
        type: Schema.Types.ObjectId,
        unique: true,
        required: [true, 'Academic Semester id is required'],
        ref: 'AcademicSemester',
      },
      status: {
        type: String,
        enum: semesterRegistrationStatus,
        default: 'UPCOMING',
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      minCredit: {
        type: Number,
        required: true,
      },
      maxCredit: {
        type: Number,
        default: 3,
      },
    },
    {
      timestamps: true,
    },
  );

export const SemesterRegistration = model<TcreateSemesterRegistration>(
  'SemesterRegistration',
  semesterRegistrationSchema,
);
