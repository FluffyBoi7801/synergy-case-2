import type { FormValues } from "@/features/Header/ui/Login/LoginModal/forms/LoginForm/types.ts";

export const VALUES_KEYS: Readonly<Record<string, keyof FormValues>> = {
  email: "email",
  password: "password",
};

export const INITIAL_VALUES: Partial<FormValues> = {
  [VALUES_KEYS.email]: null,
  [VALUES_KEYS.password]: null,
};
