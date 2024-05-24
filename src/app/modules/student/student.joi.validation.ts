import Joi from 'joi';
// UserName schema
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Z][a-z]*$/)
    .message(
      'First Name must be capitalized and can not be more than 20 characters',
    ),
  middleName: Joi.string().optional(),
  lastName: Joi.string()
    .required()
    .regex(/^[A-Za-z]+$/)
    .message('Last Name must contain only alphabetic characters'),
});

// Guardian schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string()
    .required()
    .messages({ 'any.required': "Father's Name is required" }),
  fatherOccupation: Joi.string()
    .required()
    .messages({ 'any.required': "Father's Occupation is required" }),
  fatherContactNo: Joi.string()
    .required()
    .messages({ 'any.required': "Father's Contact Number is required" }),
  motherName: Joi.string()
    .required()
    .messages({ 'any.required': "Mother's Name is required" }),
  motherOccupation: Joi.string()
    .required()
    .messages({ 'any.required': "Mother's Occupation is required" }),
  motherContactNo: Joi.string()
    .required()
    .messages({ 'any.required': "Mother's Contact Number is required" }),
});

// Local Guardian schema
const localguardianValidationSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ 'any.required': "Local Guardian's Name is required" }),
  occupation: Joi.string().required().messages({
    'any.required': "Local Guardian's Occupation is required",
  }),
  contactNo: Joi.string().required().messages({
    'any.required': "Local Guardian's Contact Number is required",
  }),
  address: Joi.string()
    .required()
    .messages({ 'any.required': "Local Guardian's Address is required" }),
});

// Student schema
const studentValidationSchema = Joi.object({
  id: Joi.string()
    .required()
    .messages({ 'any.required': 'Student ID is required' }),
  name: userNameValidationSchema
    .required()
    .messages({ 'any.required': "Student's Name is required" }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': '{#value} is not supported',
    'any.required': 'Gender is required',
  }),
  dateOfBirth: Joi.string().required(),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': '{#value} is not a valid email type',
  }),
  contactNo: Joi.string()
    .required()
    .messages({ 'any.required': 'Contact Number is required' }),
  emergencyContactNo: Joi.string()
    .required()
    .messages({ 'any.required': 'Emergency Contact Number is required' }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional(),
  presentAddress: Joi.string()
    .required()
    .messages({ 'any.required': 'Present Address is required' }),
  permanentAddress: Joi.string()
    .required()
    .messages({ 'any.required': 'Permanent Address is required' }),
  guardian: guardianValidationSchema
    .required()
    .messages({ 'any.required': 'Guardian details are required' }),
  localGuardian: localguardianValidationSchema
    .required()
    .messages({ 'any.required': 'Local Guardian details are required' }),
  profileImg: Joi.string().optional(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
