import { IRegisterProps, IRegisterErrorProps } from "@/types/types";

export function validateRegister(values: IRegisterProps): IRegisterErrorProps {
  let errors: IRegisterErrorProps = {};

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const regexName = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const regexAddress = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const regexPhone = /^[0-9]{6,15}$/;
  if (!values.email) {
    errors.email = "Email required";
  } else if (!regexEmail.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (!regexPassword.test(values.password)) {
    errors.password =
      "Password must have at least 8 characters, 1 lowercase, 1 uppercase, and 1 digit. LEVEL UP!";
  }

  if (!values.name) {
    errors.name = "Name required";
  } else if (!regexName.test(values.name)) {
    errors.name = "Invalid name";
  }

  if (!values.address) {
    errors.address = "Address required";
  } else if (!regexAddress.test(values.address)) {
    errors.address = "Invalid address format";
  }

  if (!values.phone) {
    errors.phone = "Phone required";
  } else if (!regexPhone.test(values.phone)) {
    errors.phone = "Invalid phone format";
  }
  return errors;
}
