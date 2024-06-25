import { ILogingErrorProps, ILogingProps } from "@/types/types";

export function validateForm(values: ILogingProps): ILogingErrorProps {
  let errors: ILogingErrorProps = {};

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!values.email.trim()) {
    errors.email = "Email required";
  } else if (!regexEmail.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.password.trim()) {
    errors.password = "Password required";
  } else if (!regexPassword.test(values.password)) {
    errors.password =
      "Password must have at least 8 characters, 1 lowercase, 1 uppercase, and 1 digit. LEVEL UP!";
  }

  return errors;
}
