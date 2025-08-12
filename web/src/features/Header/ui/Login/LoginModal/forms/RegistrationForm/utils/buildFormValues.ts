import type { CreateUserRequest } from "@/shared/api/__generated__/apiTypes.ts";
import type { FormValues } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/types.ts";
import { objectIsNullFree } from "@/shared/lib/typeGuards";

export const buildFormValues = (
  values: FormValues
): CreateUserRequest | null => {
  if (objectIsNullFree(values)) {
    return {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
    };
  } else {
    return null;
  }
};
