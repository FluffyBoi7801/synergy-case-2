import { FC } from "react";
import { Button, Text } from "@/shared/ui";
import { TextAlign } from "@/shared/ui/Text/Text.tsx";
import classes from "./RegistrationForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/types.ts";
import {
  INITIAL_VALUES,
  VALUES_KEYS,
} from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/constnats.ts";
import { ControlledTextField } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/components";
import { ButtonType } from "@/shared/ui/Button/Button.tsx";
import { useCreateUser } from "@/shared/api/user";
import { buildFormValues } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/utils";
import { validationScheme } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm/validationScheme";
import { useToaster } from "@/shared/ui/Toaster/hooks";
import { AxiosError } from "axios";
import { ToastType } from "@/shared/ui/Toaster/components";

type Props = {
  onClose: Function;
};

export const RegistrationForm: FC<Props> = ({ onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(validationScheme),
    defaultValues: INITIAL_VALUES,
    mode: "onChange",
  });
  const { addToast } = useToaster();
  const { mutate: createUser, isPending: isLoading } = useCreateUser();

  const onSubmit = (values: FormValues) => {
    console.log(values);

    const variables = buildFormValues(values);

    if (variables) {
      createUser(variables, {
        onSuccess: () => {
          addToast({
            type: ToastType.OK,
            text: "Пользователь успешно создан, проверьте почту",
          });
          onClose();
        },
        onError: (e) => {
          console.log(e);
          if (e instanceof AxiosError) {
            addToast({
              type: ToastType.ERROR,
              text: e.response?.data?.message || "Произошла неизвестная ошибка",
            });
          }
        },
      });
    }
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
        <ControlledTextField
          name={VALUES_KEYS.firstname}
          control={control}
          label="Имя"
        />
        <ControlledTextField
          name={VALUES_KEYS.lastname}
          control={control}
          label="Фамилия"
        />
        <ControlledTextField
          name={VALUES_KEYS.email}
          control={control}
          label="Email"
          type="email"
        />
        <ControlledTextField
          name={VALUES_KEYS.password}
          control={control}
          label="Пароль"
          type="password"
        />
        <ControlledTextField
          name={VALUES_KEYS.passwordConfirmation}
          control={control}
          label="Подтверждение пароля"
          type="password"
        />
      </div>
      <div className={classes.registrationForm__footer}>
        <Button
          type={ButtonType.submit}
          isLoading={isLoading}
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};
