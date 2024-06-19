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
    password: z.string().min(1, 'Password is required').optional(),
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
      // profileImg: z.string().optional(),
    }),
  }),
});
//for update
// Define the UserName schema for update
const userNameUpdateSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First Name cannot be more than 20 characters')
    .min(1, 'First Name is required')
    .optional(),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, 'Last Name is required')
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Last Name is not valid',
    })
    .optional(),
});

// Define the Guardian schema for update
const guardianUpdateSchema = z.object({
  fatherName: z.string().min(1, "Father's Name is required").optional(),
  fatherOccupation: z
    .string()
    .min(1, "Father's Occupation is required")
    .optional(),
  fatherContactNo: z
    .string()
    .min(1, "Father's Contact Number is required")
    .optional(),
  motherName: z.string().min(1, "Mother's Name is required").optional(),
  motherOccupation: z
    .string()
    .min(1, "Mother's Occupation is required")
    .optional(),
  motherContactNo: z
    .string()
    .min(1, "Mother's Contact Number is required")
    .optional(),
});

// Define the LocalGuardian schema for update
const localguardianUpdateSchema = z.object({
  name: z.string().min(1, "Local Guardian's Name is required").optional(),
  occupation: z
    .string()
    .min(1, "Local Guardian's Occupation is required")
    .optional(),
  contactNo: z
    .string()
    .min(1, "Local Guardian's Contact Number is required")
    .optional(),
  address: z.string().min(1, "Local Guardian's Address is required").optional(),
});

// Define the Student schema for update
const updateStudentValidationZodSchema = z.object({
  body: z.object({
    password: z.string().min(1, 'Password is required').optional(),
    student: z
      .object({
        name: userNameUpdateSchema.optional(),
        gender: z.enum(['male', 'female', 'other']).optional(),
        dateOfBirth: z.string().optional(),
        email: z
          .string()
          .min(1, 'Email is required')
          .email('Email is not valid')
          .optional(),
        contactNo: z.string().min(1, 'Contact Number is required').optional(),
        emergencyContactNo: z
          .string()
          .min(1, 'Emergency Contact Number is required')
          .optional(),
        bloodGroup: z
          .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
          .optional(),
        presentAddress: z
          .string()
          .min(1, 'Present Address is required')
          .optional(),
        permanentAddress: z
          .string()
          .min(1, 'Permanent Address is required')
          .optional(),
        guardian: guardianUpdateSchema.optional(),
        localGuardian: localguardianUpdateSchema.optional(),
        admissionSemester: z.string().optional(),
        // profileImg: z.string().optional(),
      })
      .partial(), // Makes all fields optional within the student object
  }),
});
export const createStudentValidation = {
  createStudentValidationZodSchema,
  updateStudentValidationZodSchema,
};
