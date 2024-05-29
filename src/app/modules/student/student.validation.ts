import { z } from 'zod';

// Define the UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First Name cannot be more than 20 characters')

    .min(1, 'First Name is required'),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, 'Last Name is required')
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Last Name is not valid',
    }),
});

// Define the Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's Name is required"),
  fatherOccupation: z.string().min(1, "Father's Occupation is required"),
  fatherContactNo: z.string().min(1, "Father's Contact Number is required"),
  motherName: z.string().min(1, "Mother's Name is required"),
  motherOccupation: z.string().min(1, "Mother's Occupation is required"),
  motherContactNo: z.string().min(1, "Mother's Contact Number is required"),
});

// Define the LocalGuardian schema
const localguardianValidationSchema = z.object({
  name: z.string().min(1, "Local Guardian's Name is required"),
  occupation: z.string().min(1, "Local Guardian's Occupation is required"),
  contactNo: z.string().min(1, "Local Guardian's Contact Number is required"),
  address: z.string().min(1, "Local Guardian's Address is required"),
});

// Define the Student schema
const createStudentValidationZodSchema = z.object({
  body: z.object({
    password: z.string().min(1, 'Password is required'),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().min(1, 'Email is required').email('Email is not valid'),
      contactNo: z.string().min(1, 'Contact Number is required'),
      emergencyContactNo: z
        .string()
        .min(1, 'Emergency Contact Number is required'),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().min(1, 'Present Address is required'),
      permanentAddress: z.string().min(1, 'Permanent Address is required'),
      guardian: guardianValidationSchema,
      localGuardian: localguardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});
export const createStudentValidation = {
  createStudentValidationZodSchema,
};
