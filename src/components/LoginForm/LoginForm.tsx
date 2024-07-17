import { ChangeEvent, MouseEvent, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, StyledTitle, InputContainer } from "./styles";
import { LOGIN_FORM_NAMES } from "./types";

function LoginForm() {
  const validationSchema = Yup.object().shape({
    [LOGIN_FORM_NAMES.EMAIL]: Yup.string().required("Email field is required").email("This field should be in email format"),
    [LOGIN_FORM_NAMES.PASSWORD]: Yup.string()
      .min(5, "Password field should contain minimum 5 symobols")
      .max(15, "Password field should contain maximum 15 symobols")
      .required("Password field is required"),
  });
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: "",
      [LOGIN_FORM_NAMES.PASSWORD]: "",
    },
    validationSchema: validationSchema,
    validateOnMount:false,
    validateOnChange:false,
  
    onSubmit: (values, helpers) => {
      console.log("submit works");
      console.log(values, helpers);
    },
  });
  console.log(formik);

  // const [emailValue, setEmailValue] = useState<string>("");
  // const [passwordValue, setPasswordValue] = useState<string>("");

  // const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmailValue(event.target.value);
  // };

  // const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPasswordValue(event.target.value);
  // };

  const login = (event: MouseEvent): void => {
    // event.preventDefault();
    // console.log(
    //   "Data to send on server",
    //   { email: formik.values.email },
    //   { password: formik.values.password }
    // );
  };

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <StyledTitle>Login form</StyledTitle>
      <InputContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_NAMES.EMAIL}
          type="text"
          placeholder="Enter your email"
          label="Email"
          value={formik.values[LOGIN_FORM_NAMES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_NAMES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
      </InputContainer>
      <Button disabled={formik.isSubmitting} name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;
