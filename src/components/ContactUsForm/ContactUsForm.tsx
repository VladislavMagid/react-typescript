import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { ContactUsFormForm, TitleContactUsForm } from "./styles";
import { CONTACT_US_FORM_NAMES } from "./types";

function ContactUsForm() {
  const validationScheme = Yup.object().shape({
    [CONTACT_US_FORM_NAMES.NAME]: Yup.string()
      .required("Full name is required")
      .min(3, "Name cant be shorter then 3 characters")
      .max(50, "Too long, max 50 characters"),
    [CONTACT_US_FORM_NAMES.PHONE]: Yup.string()
      .required("Phone is required")
      .min(4, "Phone cant be shorter then 4 numbers")
      .max(20, "Too long, max 20 numbers"),
    [CONTACT_US_FORM_NAMES.EMAIL]: Yup.string()
      .min(6, "Email cant be shorter then 6 characters")
      .max(60, "Too long, max 60 characters")
      .email("This field should be in email format"),
  });

  const formic = useFormik({
    initialValues: {
      [CONTACT_US_FORM_NAMES.NAME]: "",
      [CONTACT_US_FORM_NAMES.PHONE]: "",
      [CONTACT_US_FORM_NAMES.EMAIL]: "",
    },
    validationSchema: validationScheme,
    onSubmit: async (values, helpers) => {
      console.log(values);
      helpers.resetForm();
    },
    validateOnMount: false,
    validateOnChange: false,
  });

  return (
    <ContactUsFormForm onSubmit={formic.handleSubmit}>
      <TitleContactUsForm>Contact us</TitleContactUsForm>
      <Input
        id="input-1"
        name={CONTACT_US_FORM_NAMES.NAME}
        label="Full name*"
        placeholder="Your full name"
        value={formic.values[CONTACT_US_FORM_NAMES.NAME]}
        onChange={formic.handleChange}
        error={formic.errors[CONTACT_US_FORM_NAMES.NAME]}
      />
      <Input
        id="input-2"
        name={CONTACT_US_FORM_NAMES.PHONE}
        label="Phone*"
        placeholder="Your phone number"
        value={formic.values[CONTACT_US_FORM_NAMES.PHONE]}
        onChange={formic.handleChange}
        error={formic.errors[CONTACT_US_FORM_NAMES.PHONE]}
      />
      <Input
        id="input-3"
        name={CONTACT_US_FORM_NAMES.EMAIL}
        label="Email"
        placeholder="Your email"
        value={formic.values[CONTACT_US_FORM_NAMES.EMAIL]}
        onChange={formic.handleChange}
        error={formic.errors[CONTACT_US_FORM_NAMES.EMAIL]}
      />
      <Button name="SEND REQUEST" type="submit" />
    </ContactUsFormForm>
  );
}

export default ContactUsForm;
