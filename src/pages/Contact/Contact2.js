import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Podaj swój wiek"),

  userEmail: Yup.string()
    .required("Email jest wymagany")
    .email("Niepoprawny adres email"),
  userMessage: Yup.string().required("Napisz coś do nas!"),
});

const Contact2 = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        userName: "",
        userEmail: "",
        userMessage: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form className="container">
          <div className="contact_input">
            <Field name="userName" type="text" placeholder="type your name" />
            <ErrorMessage className="has-error" name="userName" />
            <Field name="userEmail" type="text" placeholder="type your email" />
            <ErrorMessage className="has-error" name="userEmail" />

            <Field
              className="textarea"
              name="userMessage"
              type="text"
              component="textarea"
              placeholder="type your message"
            />
            <ErrorMessage className="has-error" name="userMessage" />

            <Button
              className="contact_btn"
              type="submit"
              variant="contained"
              color="inherit"
            >
              Wyślij
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Contact2;
