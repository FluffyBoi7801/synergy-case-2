import { FC } from "react";
import { useToaster } from "@/shared/ui/Toaster/hooks";
import { useGetCurrentUser, useLoginUser } from "@/shared/api/user";
import classes from "./LoginForm.module.scss";
import { Text, TextAlign } from "@/shared/ui/Text/Text.tsx";
import { Button } from "@/shared/ui";
import { ButtonType } from "@/shared/ui/Button/Button.tsx";
import { useForm } from "react-hook-form";
import {
  INITIAL_VALUES,
  VALUES_KEYS,
} from "@/features/Header/ui/Login/LoginModal/forms/LoginForm/constants.ts";
import { ControlledTextField } from "@/features/Header/ui/Login/LoginModal/forms/LoginForm/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/features/Header/ui/Login/LoginModal/forms/LoginForm/validationSchema.ts";
import { AxiosError } from "axios";
import { ToastType } from "@/shared/ui/Toaster/components";
import { buildFormValues } from "@/features/Header/ui/Login/LoginModal/forms/LoginForm/utils";
import { FormValues } from "@/features/Header/ui/Login/LoginModal/forms/LoginForm/types.ts";
import { useCurrentUser } from "@/shared/store";

type Props = {
  onClose: Function;
};

export const LoginForm: FC<Props> = ({ onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: INITIAL_VALUES,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const { setUserInfo } = useCurrentUser();
  const { addToast } = useToaster();
  const { mutate: loginUser, isPending: isLoading } = useLoginUser();

  const onSubmit = (values: FormValues) => {
    const variables = buildFormValues(values);

    if (variables) {
      loginUser(variables, {
        onSuccess: () => {
          addToast({
            type: ToastType.OK,
            text: "Вы успешно вошли в систему",
          });
          onClose();
        },
        onError: (e) => {
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
    <form className={classes.loginForm}>
      <Text className={classes.loginForm__title} align={TextAlign.CENTER}>
        Вход
      </Text>
      <div className={classes.loginForm__body}>
        <ControlledTextField
          name={VALUES_KEYS.email}
          control={control}
          label="Email"
        />
        <ControlledTextField
          name={VALUES_KEYS.password}
          control={control}
          label="Пароль"
          type="password"
        />
      </div>
      <div className={classes.loginForm__footer}>
        <Button
          type={ButtonType.submit}
          isLoading={isLoading}
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Войти
        </Button>
      </div>
    </form>
  );
};
