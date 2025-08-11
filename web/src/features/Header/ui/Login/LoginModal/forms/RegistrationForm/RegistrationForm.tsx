import { Button, Text, TextField } from "@/shared/ui";
import { TextAlign } from "@/shared/ui/Text/Text.tsx";
import classes from "./RegistrationForm.module.scss";

export const RegistrationForm = () => {
  return (
    <div className={classes.registrationForm}>
      <Text
        className={classes.registrationForm__title}
        align={TextAlign.CENTER}
      >
        Регистрация
      </Text>
      <div className={classes.registrationForm__body}>
        <TextField label="Email" />
        <TextField label="Пароль" />
        <TextField label="Подтверждение пароля" />
      </div>
      <div className={classes.registrationForm__footer}>
        <Button>Зарегистрироваться</Button>
      </div>
    </div>
  );
};
