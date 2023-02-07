import Joi from "joi";
import { emailSchema, passwordSchema } from "./schema-components";

export const loginSchema = Joi.object({
  email: emailSchema(),
  password: passwordSchema(),
});
