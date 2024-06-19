import { z } from 'zod';
import { UserStatus } from './user.constant';

const userSchemaValidation = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 character' })
    .optional(),
});
const changeStatusValidation = z.object({
  body: z.object({
    status: z.enum([...UserStatus] as [string, ...string[]]),
  }),
});
export const userValidation = {
  userSchemaValidation,
  changeStatusValidation,
};
