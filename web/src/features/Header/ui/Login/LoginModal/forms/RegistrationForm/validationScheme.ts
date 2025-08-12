import * as yup from "yup";
import { VALIDATION_ERRORS } from "@/shared/constants";

export const validationScheme = yup.object({
  firstname: yup.string().required(VALIDATION_ERRORS.REQUIRED).nullable(),
  lastname: yup.string().required(VALIDATION_ERRORS.REQUIRED).nullable(),
  email: yup
    .string()
    .email(VALIDATION_ERRORS.EMAIL)
    .required(VALIDATION_ERRORS.REQUIRED)
    .nullable(),
  password: yup
    .string()
    .required(VALIDATION_ERRORS.REQUIRED)
    .min(8, VALIDATION_ERRORS.PASSWORD_TOO_SHORT)
    .matches(/[A-Z]/, VALIDATION_ERRORS.PASSWORD_NO_UPPERCASE)
    .matches(/[^a-zA-Z0-9]/, VALIDATION_ERRORS.PASSWORD_NO_SPECIAL_CHAR)
    .nullable(),
  passwordConfirmation: yup
    .string()
    .required(VALIDATION_ERRORS.REQUIRED)
    .test(
      "passwords-match",
      VALIDATION_ERRORS.PASSWORD_MISMATCH,
      (password, context) => {
        return password === context.parent.password;
      }
    )
    .nullable(),
});
