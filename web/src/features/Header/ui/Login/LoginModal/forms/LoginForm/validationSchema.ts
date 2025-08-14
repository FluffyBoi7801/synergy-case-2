import * as yup from "yup";
import { VALIDATION_ERRORS } from "@/shared/constants";

export const validationSchema = yup.object({
  email: yup
    .string()
    .email(VALIDATION_ERRORS.EMAIL)
    .required(VALIDATION_ERRORS.REQUIRED)
    .nullable()
    .test("value not null", (value) => value !== null),
  password: yup
    .string()
    .required(VALIDATION_ERRORS.REQUIRED)
    .nullable()
    .test("value not null", (value) => value !== null),
});
