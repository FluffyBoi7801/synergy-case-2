import type { FormValues } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/types";

export const VALUES_KEYS: Readonly<Record<string, keyof FormValues>> = {
  firstname: "firstname",
  lastname: "lastname",
  email: "email",
  password: "password",
  passwordConfirmation: "passwordConfirmation",
};

export const INITIAL_VALUES: Partial<FormValues> = {
  firstname: null,
  lastname: null,
  email: null,
  password: null,
  passwordConfirmation: null,
};
