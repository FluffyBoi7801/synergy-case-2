import { FormValues } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/types";

export const VALUES_KEYS: Readonly<Record<string, keyof FormValues>> = {
  email: "email",
  password: "password",
  passwordConfirmation: "passwordConfirmation",
};

export const INITIAL_VALUES: Partial<FormValues> = {
  email: null,
  password: null,
  passwordConfirmation: null,
};
