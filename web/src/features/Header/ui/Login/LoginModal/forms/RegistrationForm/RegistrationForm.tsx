import { Button, Text, TextField } from "@/shared/ui";
import { TextAlign } from "@/shared/ui/Text/Text.tsx";
import classes from "./RegistrationForm.module.scss";
import { useForm } from "react-hook-form";
import { FormValues } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/types.ts";
import {
  INITIAL_VALUES,
  VALUES_KEYS,
} from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/constnats.ts";
import {
  EmailTextField,
  PasswordTextField,
} from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/components";
import { ButtonType } from "@/shared/ui/Button/Button.tsx";
import { PasswordConfirmationTextField } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/components/PasswordConfirmation";

export const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: INITIAL_VALUES,
    mode: "onChange",
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <form className={classes.registrationForm}>
      <Text
        className={classes.registrationForm__title}
        align={TextAlign.CENTER}
      >
        Регистрация
      </Text>
      <div className={classes.registrationForm__body}>
        <EmailTextField name={VALUES_KEYS.email} control={control} />
        <PasswordTextField name={VALUES_KEYS.password} control={control} />
        <PasswordConfirmationTextField
          name={VALUES_KEYS.passwordConfirmation}
          control={control}
        />
      </div>
      <div className={classes.registrationForm__footer}>
        <Button
          type={ButtonType.submit}
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};
