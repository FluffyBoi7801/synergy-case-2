import { FormValues } from "@/features/Header/ui/Login/LoginModal/forms/LoginForm/types.ts";
import { LoginUserRequest } from "@/shared/api/__generated__/apiTypes.ts";
import { objectIsNullFree } from "@/shared/lib/typeGuards";

export const buildFormValues = (
  values: FormValues
): LoginUserRequest | null => {
  if (objectIsNullFree(values)) {
    return {
      email: values.email,
      password: values.password,
    };
  } else {
    return null;
  }
};
