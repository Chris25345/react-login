import Joi from "joi";

export const emailSchema = (
  required = "Email is required",
  email = "Format is not correct"
) =>
  Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": required,
      "string.email": email,
    });

export const passwordSchema = (
  required = "Password is required",
  max = "Password is more than 20 characters",
  min = "Password is less than 6 characters"
) =>
  Joi.string().min(6).max(20).required().messages({
    "string.required": required,
    "string.empty": required,
    "string.min": min,
    "string.max": max,
  });
