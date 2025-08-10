import { Button, Text, TextField } from "@/shared/ui";
import { TextAlign } from "@/shared/ui/Text/Text.tsx";
import classes from "./RegistrationForm.module.scss";

export const RegistrationForm = () => {
  return (
    <div className={classes.registrationForm}>
      <Text align={TextAlign.CENTER}>Регистрация</Text>
      <TextField label="Email" />
      <TextField label="Пароль" />
      <TextField label="Подтверждение пароля" />
      <Button>Зарегистрироваться</Button>
    </div>
  );
};
