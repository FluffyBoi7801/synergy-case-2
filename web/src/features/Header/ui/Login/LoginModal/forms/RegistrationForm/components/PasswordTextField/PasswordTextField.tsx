import { FormValues } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/types.ts";
import { Control, Controller } from "react-hook-form";
import { FC } from "react";
import { TextField } from "@/shared/ui";

type Props = {
  name: keyof FormValues;
  control: Control<FormValues>;
};

export const PasswordTextField: FC<Props> = ({ name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextField label="Пароль" {...field} />}
    />
  );
};
